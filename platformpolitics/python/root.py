from gatherIndividualsTweets import getPersonsData
from nlp import predict_vote
import pickle

dummy1 = 5
dummy2 = 6

def create_race(name, candidates):
    for candidtate in candidates:
        # with open(name + '/' + candidtate + "/1", "wb") as f:
        with open(candidtate, "wb") as f:
            pickle.dump(dummy1, f)

create_race("test", ["dumb", "dumber"])

dumb = open("dumb", "rb")
print(pickle.load(dumb))
#-------------- Predicting a vote

inp = input("Enter a twitter handle: ")
print("Predicting . . .")

in_tweets = getPersonsData(inp)

predict_corpus = ""

for tweet in in_tweets:
    predict_corpus += tweet

print(predict_vote(predict_corpus))

#sublinear tf
