#!/usr/bin/env python
# coding: utf-8

# In[122]:


from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.naive_bayes import GaussianNB, MultinomialNB, ComplementNB
import numpy as np
import os, pickle

def create_model(basedir = "TXSen"):
    labels = []
    users = []

    test_labels = []
    test_users = []



    #create labels and list of file paths, ignore non .txt
    for folder in os.listdir(basedir):
        print(basedir + '/' + folder)
        for filename in os.listdir(basedir + '/' + folder)[:1000]:
            if filename.endswith(".txt"):
                labels.append(folder)
                users.append(basedir + '/' + folder + '/' + filename)
            else:
                continue
        #the first 1000 users are training set, the other 500 are test
        for filename in os.listdir(basedir + '/' + folder)[1000:]:
            if filename.endswith(".txt"):
                test_labels.append(folder)
                test_users.append(basedir + '/' + folder + '/' + filename)
            else:
                continue

    print(len(users))
    observations = []

    #unpack list of filepaths into list of corpora
    for user in users:
        #print(user)
        file = open(user, 'rb')
        x = pickle.load(file)
        corpus = ""
        for tweet in x:
            corpus += tweet
        observations.append(corpus)

    test_corpora = []

    for user in test_users:
        #print(user)
        file = open(user, 'rb')
        x = pickle.load(file)
        corpus = ""
        for tweet in x:
            corpus += tweet
        test_corpora.append(corpus)

    print(len(test_corpora))


    # In[123]:


    vectorizer = TfidfVectorizer(input="content", stop_words="english", max_features=100000)#, use_idf="False")
    freq_vects = vectorizer.fit_transform(observations).toarray()
    test_set = vectorizer.transform(test_corpora).toarray()
    print("Vectorized!")
    print(freq_vects.shape)

    vect1 = "TXvect1.txt"
    with open(vect1, "wb") as f:
        pickle.dump(vectorizer, f)


    # In[127]:


    vectorizer_2 = TfidfVectorizer(input="content", ngram_range=(2,5), max_features=10000, stop_words="english")
    freq_vects_2 = vectorizer_2.fit_transform(observations).toarray()
    test_set_2 = vectorizer_2.transform(test_corpora).toarray()

    freq_vects = np.block([[freq_vects, freq_vects_2]])
    test_set = np.block([[test_set, test_set_2]])

    print(vectorizer_2.get_feature_names())

    vect2 = "TXvect2.txt"
    with open(vect2, "wb") as f:
        pickle.dump(vectorizer_2, f)


    # In[128]:


    NBclf = GaussianNB().fit(freq_vects, labels)
    #print(vectorizer.get_feature_names())
    print("Trained!")

    clf = "TXgaussian.txt"
    with open(clf, "wb") as f:
        pickle.dump(NBclf, f)


# In[129]:

def predict_vote(corpus):
    model_file = open("TXgaussian.txt", "rb")
    model = pickle.load(model_file)

    vect1_file = open("TXvect1.txt", "rb")
    vect1 = pickle.load(vect1_file)

    vect2_file = open("TXvect2.txt", "rb")
    vect2 = pickle.load(vect2_file)

    freq_vect_1 = vect1.transform([corpus]).toarray()
    freq_vect_2 = vect2.transform([corpus]).toarray()

    freq_vect = np.block([[freq_vect_1, freq_vect_2]])
    return model.predict(freq_vect)

#np.mean(predicted == test_labels)
