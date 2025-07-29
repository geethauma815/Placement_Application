import spacy
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

nlp = spacy.load("en_core_web_sm")  # small model with no .vector

def preprocess(text):
    doc = nlp(text.lower())
    tokens = [token for token in doc if not token.is_stop and token.is_alpha]
    return tokens

def average_vector(tokens):
    vectors = []
    for token in tokens:
        if token.has_vector:
            vectors.append(token.vector)
    if not vectors:
        return np.zeros((96,))  # small model dim
    return np.mean(vectors, axis=0)

def extract_keywords(text):
    doc = nlp(text.lower())
    return set([token.text for token in doc if token.pos_ in ("NOUN", "PROPN", "ADJ") and not token.is_stop])

def match_score(bio, job_desc):
    # Vector-based similarity
    bio_tokens = preprocess(bio)
    jd_tokens = preprocess(job_desc)

    vec1 = average_vector(bio_tokens).reshape(1, -1)
    vec2 = average_vector(jd_tokens).reshape(1, -1)

    try:
        vector_score = cosine_similarity(vec1, vec2)[0][0] * 100
    except:
        vector_score = 0

    # Keyword overlap boost
    bio_keywords = extract_keywords(bio)
    jd_keywords = extract_keywords(job_desc)
    overlap = bio_keywords & jd_keywords
    keyword_boost = len(overlap) * 2

    final_score = vector_score + keyword_boost
    return int(min(max(final_score, 0), 100))
