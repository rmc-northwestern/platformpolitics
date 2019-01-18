from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.naive_bayes import GaussianNB, MultinomialNB, ComplementNB

from gatherIndividualsTweets import getPersonsData

import numpy as np
import os, pickle

name = "Bezos_Musk"

handle = "PeterThiele"

in_tweets = getPersonsData(handle)

predict_corpus = ""

for tweet in in_tweets:
    predict_corpus += tweet
    predict_corpus += " \n"

print(predict_corpus)

clf = "models/" + name + "/gaussian.txt"
model_file = open(clf, "rb")
model = pickle.load(model_file)

vect1 = "models/" + name + "/vect1.large"
vect1_file = open(vect1, "rb")
vect1 = pickle.load(vect1_file)

vect2 = "models/" + name + "/vect2.large"
vect2_file = open(vect2, "rb")
vect2 = pickle.load(vect2_file)

# print(vect1.vocabulary_)

freq_vect_1 = vect1.transform([predict_corpus]).toarray()
freq_vect_2 = vect2.transform([predict_corpus]).toarray()

# print(freq_vect_1)

n = 25

obs_ind = np.argpartition(freq_vect_1[0], 0 - n)[(0 - n):]
print(model.theta_[0]-model.theta_[1])

cl1_ind = np.argpartition(model.theta_[0]-model.theta_[1], 0 - n)[(0 - n):]
cl2_ind = np.argpartition(model.theta_[1]-model.theta_[0], 0 - n)[(0 - n):]

print(cl1_ind)
print(cl2_ind)

print(len(vect1.vocabulary_.items()))
print(len(freq_vect_1[0]))
print(len(vect2.vocabulary_.items()))


for key, val in vect1.vocabulary_.items():
    if val in obs_ind:
        print(key)

print("----------------------------")

for key, val in vect1.vocabulary_.items():
    if val in cl1_ind:
        print(key)
for key, val in vect2.vocabulary_.items():
    if val+len(freq_vect_1[0]) in cl1_ind:
        print(key)

print("----------------------------")

for key, val in vect1.vocabulary_.items():
    if val in cl2_ind:
        print(key)
for key, val in vect2.vocabulary_.items():
    if val+len(freq_vect_1[0]) in cl2_ind:
        print(key)


freq_vect = np.block([[freq_vect_1, freq_vect_2]])
print(model.predict(freq_vect))
