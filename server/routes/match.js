
const express = require('express');
const { PythonShell } = require('python-shell');
const router = express.Router();

// Define the POST route
router.post('/match-score', (req, res) => {

  // The try...catch block goes INSIDE the route handler function
  try {
    console.log(" Request received for /match-score");

    const { bio, jobDesc } = req.body;

    // Options for the python-shell
    let options = {
      mode: 'text',
      pythonOptions: ['-u'], // get print results in real-time
      args: [bio, jobDesc] // pass arguments to the script
    };

    console.log("...Calling Python script. This might take a while...");

    // DEFINE pyshell here
    let pyshell = new PythonShell('routes/match_score.py', options);

    // This code runs when the Python script sends back a result
    pyshell.on('message', function (message) {
      console.log("Python script finished. Sending response.");
      // The `res` object is available here
      res.json({ matchScore: message });
    });

    // Handle any errors from the Python script
    pyshell.on('error', function (err) {
      console.error(" Python script error:", err);
      res.status(500).send("Error executing Python script");
    });

  } catch (err) {
    // This catches errors in the JAVASCRIPT code above
    console.error("A JavaScript error occurred:", err);
    // The `res` object is also available here
    res.status(500).send("Server error");
  }
});

module.exports = router;
