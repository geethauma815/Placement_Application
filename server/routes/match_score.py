
import spacy
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import sys  # <-- Import the sys module to read arguments

# --- Your functions remain the same ---
nlp = spacy.load("en_core_web_md")

def preprocess(text):
    doc = nlp(text.lower())
    tokens = [token for token in doc if not token.is_stop and token.is_alpha]
    return tokens

def average_vector(tokens):
    if not tokens:
        return np.zeros((300,))
    return np.mean([token.vector for token in tokens], axis=0)

def extract_keywords(text):
    doc = nlp(text.lower())
    return set([token.text for token in doc if token.pos_ in ("NOUN", "PROPN", "ADJ") and not token.is_stop])

def match_score(bio, job_desc):
    bio_tokens = preprocess(bio)
    jd_tokens = preprocess(job_desc)
    vec1 = average_vector(bio_tokens).reshape(1, -1)
    vec2 = average_vector(jd_tokens).reshape(1, -1)
    vector_score = cosine_similarity(vec1, vec2)[0][0] * 100
    bio_keywords = extract_keywords(bio)
    jd_keywords = extract_keywords(job_desc)
    overlap = bio_keywords & jd_keywords
    keyword_boost = len(overlap) * 2
    final_score = vector_score + keyword_boost
    return int(min(max(final_score, 0), 100))

# --- This is the new, essential part that makes the script runnable ---
if __name__ == '__main__':
    # Read the arguments sent from Node.js
    # sys.argv[0] is the script name itself
    job_description_arg = sys.argv[1]
    candidate_bio_arg = sys.argv[2]
    
    # Calculate the score
    final_score = match_score(candidate_bio_arg, job_description_arg)
    
    # Print the final score so Node.js can capture it
    print(final_score)
