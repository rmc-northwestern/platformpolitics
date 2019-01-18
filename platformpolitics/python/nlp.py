#!/usr/bin/env python
# coding: utf-8

# In[122]:


from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.naive_bayes import GaussianNB, MultinomialNB, ComplementNB

from gatherIndividualsTweets import getPersonsData

import numpy as np
import os, pickle
import datetime

def create_model(name, train_set_size = 1000):
    labels = []
    users = []

    test_labels = []
    test_users = []

    classes = []



    #create labels and list of file paths, ignore non .txt
    for folder in os.listdir("races/" + name):
        print("races/" + name + '/' + folder)
        classes.append(folder)
        for filename in os.listdir("races/" + name + '/' + folder)[:train_set_size]:
            if filename.endswith(".txt"):
                labels.append(folder)
                users.append("races/" + name + '/' + folder + '/' + filename)
            else:
                continue
        # #The first 1000 users are training set, the other 500 are test

        # for filename in os.listdir("races/" + name + '/' + folder)[train_set_size:]:
        #     if filename.endswith(".txt"):
        #         test_labels.append(folder)
        #         test_users.append("races/" + name + '/' + folder + '/' + filename)
        #     else:
        #         continue

    # print(len(users))
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

    # # Used for testing prediction accuracy in jupyter

    # test_corpora = []
    #
    # for user in test_users:
    #     #print(user)
    #     file = open(user, 'rb')
    #     x = pickle.load(file)
    #     corpus = ""
    #     for tweet in x:
    #         corpus += tweet
    #     test_corpora.append(corpus)
    #
    # print(len(test_corpora))


    # In[123]:

    os.mkdir("models/" + name)

    vectorizer = TfidfVectorizer(input="content", stop_words="english", max_features=100000)#, use_idf="False")
    freq_vects = vectorizer.fit_transform(observations).toarray()
    # test_set = vectorizer.transform(test_corpora).toarray()
    print("Vectorized!")
    print(freq_vects.shape)

    vect1 = "models/" + name + "/vect1.large"
    with open(vect1, "wb") as f:
        pickle.dump(vectorizer, f)


    # In[127]:


    vectorizer_2 = TfidfVectorizer(input="content", ngram_range=(2,5), max_features=10000, stop_words="english")
    freq_vects_2 = vectorizer_2.fit_transform(observations).toarray()
    # test_set_2 = vectorizer_2.transform(test_corpora).toarray()

    freq_vects = np.block([[freq_vects, freq_vects_2]])
    # test_set = np.block([[test_set, test_set_2]])

    # print(vectorizer_2.get_feature_names())

    print("Vectorized_2!")
    print(freq_vects_2.shape)

    vect2 = "models/" + name + "/vect2.large"
    with open(vect2, "wb") as f:
        pickle.dump(vectorizer_2, f)


    # In[128]:


    NBclf = GaussianNB().fit(freq_vects, labels)
    #print(vectorizer.get_feature_names())
    print("Trained!")

    clf = "models/" + name + "/gaussian.txt"
    with open(clf, "wb") as f:
        pickle.dump(NBclf, f)

    create_details(name, classes, vectorizer, vectorizer_2, NBclf, train_set_size)


# In[129]:

def predict_vote(name, handle):
    in_tweets = getPersonsData(handle)

    predict_corpus = ""

    for tweet in in_tweets:
        predict_corpus += tweet

    clf = "models/" + name + "/gaussian.txt"
    model_file = open(clf, "rb")
    model = pickle.load(model_file)

    vect1 = "models/" + name + "/vect1.large"
    vect1_file = open(vect1, "rb")
    vect1 = pickle.load(vect1_file)

    vect2 = "models/" + name + "/vect2.large"
    vect2_file = open(vect2, "rb")
    vect2 = pickle.load(vect2_file)

    freq_vect_1 = vect1.transform([predict_corpus]).toarray()
    freq_vect_2 = vect2.transform([predict_corpus]).toarray()

    freq_vect = np.block([[freq_vect_1, freq_vect_2]])
    return model.predict(freq_vect)

#np.mean(predicted == test_labels)


def create_details(name, classes, vect1, vect2, model, train_set_size):
    n = 25

    cl1_ind = np.argpartition(model.theta_[0]-model.theta_[1], 0 - n)[(0 - n):]
    cl2_ind = np.argpartition(model.theta_[1]-model.theta_[0], 0 - n)[(0 - n):]

    details = {}

    details['name'] = name
    details['classes'] = classes

    print("----------------------------")

    cl1_words = []

    for key, val in vect1.vocabulary_.items():
        if val in cl1_ind:
            cl1_words.append(key)
    for key, val in vect2.vocabulary_.items():
        if val+len(vect1.vocabulary_.items()) in cl1_ind:
            cl1_words.append(key)

    print("----------------------------")

    cl2_words = []

    for key, val in vect1.vocabulary_.items():
        if val in cl2_ind:
            cl2_words.append(key)
    for key, val in vect2.vocabulary_.items():
        if val+len(vect1.vocabulary_.items()) in cl2_ind:
            cl2_words.append(key)

    details['most_common_words'] = [cl1_words, cl2_words]

    now = datetime.datetime.now()
    details['time'] = now.strftime("%Y-%m-%d %H:%M")

    save = "models/" + name + "/details.txt"
    with open(save, "wb") as f:
        pickle.dump(details, f)
