# Placement_Preparatin_platform
A full-stack AI-powered platform designed for students and recruiters to streamline the campus placement process. It supports job posting with blockchain payments, applicant-job matching via NLP, and user management.


## Features

-  **User Authentication** (Register/Login for Job Seekers & Posters)
-  **Job Posting** with blockchain-based platform fee
-  **Job Search** by tech and profile
-  **AI Match Score** (Job ↔ Applicant) using NLP (spaCy + cosine similarity)
-  **Wallet Integration** with MetaMask and Polygon Amoy Testnet
- Modern UI built with React



  ##  Tech Stack
  
 Frontend - React.js
 Backend  - Node.js + Express
 Blockchain - Ethers.js + MetaMask
 AI/NLP  - Python + spaCy

 ## 1. Clone the Repository
    
git clone https://github.com/geethauma815/Placement_Application.git
cd Placement_Application


## 2. Frontend Setup
   
cd client   
npm install  
npm start  

## 3.Backend Setup

cd server  
npm install  


## 4.Run backend

node index.js


## Blockchain Integration (Polygon Amoy Testnet)
Add MetaMask Extension to Browser  
Add the following network manually:  

## Network Name: Polygon Amoy Testnet  
RPC URL: https://rpc-amoy.polygon.technology  
Chain ID: 80002  
Currency Symbol: MATIC  
Block Explorer: https://www.oklink.com/amoy  


## Fund your wallet from https://faucet.polygon.technology/  

## AI Match Score (No API used)  
The match_score uses spaCy’s medium language model and cosine similarity:   

def match_score(bio, job_desc):  
    doc1 = nlp(bio)  
    doc2 = nlp(job_desc)  
    vec1 = doc1.vector.reshape(1, -1)  
    vec2 = doc2.vector.reshape(1, -1)  
    score = cosine_similarity(vec1, vec2)[0][0]  
    return int(min(max(score * 100, 0), 100))  



## Setup NLP Model:

cd server  
python3 -m venv venv  
source venv/bin/activate  
pip install spacy scikit-learn  
python3 -m spacy download en_core_web_md  

## First Page
<img width="1918" height="936" alt="Screenshot from 2025-07-27 16-11-44" src="https://github.com/user-attachments/assets/14fb4939-baa7-4116-915a-fed42bf52911" />

## Register Page
<img width="1918" height="936" alt="Screenshot from 2025-07-27 16-15-01" src="https://github.com/user-attachments/assets/53aaa211-693f-4c51-9ac6-a2d8d67586f6" />

## Login Page
<img width="1918" height="936" alt="Screenshot from 2025-07-27 16-15-46" src="https://github.com/user-attachments/assets/a8614cf7-aa18-40b2-9573-4ecb08b61b8e" />

## Dashboard Page
<img width="1918" height="936" alt="Screenshot from 2025-07-27 16-16-28" src="https://github.com/user-attachments/assets/5997c9a3-0b4d-4036-ad47-c2ac1d07e367" />

## Post a new Job
<img width="1918" height="936" alt="Screenshot from 2025-07-27 16-17-19" src="https://github.com/user-attachments/assets/19285b46-d1f2-4ac5-988f-748daa1b892c" />

<img width="1918" height="936" alt="Screenshot from 2025-07-27 16-17-38" src="https://github.com/user-attachments/assets/51802ec0-671d-49a0-b7f2-2af27bcd19f4" />
<img width="1918" height="936" alt="Screenshot from 2025-07-27 16-23-44" src="https://github.com/user-attachments/assets/244d421a-8258-43bf-a741-793e811aa7cd" />
<img width="1918" height="936" alt="Screenshot from 2025-07-27 16-23-11" src="https://github.com/user-attachments/assets/97be768d-c456-4609-bff1-a1f1a6623639" />

## Future Improvements

Real-time interview slot booking

Resume upload & parsing

Admin analytics dashboard

ChatGPT/Gemini integration for smart resume feedback

## Contributing
Pull requests are welcome. For major changes, please open an issue first.

## License
MIT



