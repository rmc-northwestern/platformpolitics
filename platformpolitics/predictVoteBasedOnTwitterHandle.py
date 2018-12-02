from python.gatherIndividualsTweets import getPersonsData
from python.nlp import predict_vote
import pickle, sys

userHandle = sys.argv[1]


# userHandle = "realDonaldTrump"

if userHandle[0] =="@":
    userHandle = userHandle[1:]

in_tweets = getPersonsData(userHandle)

predict_corpus = ""

for tweet in in_tweets:
    predict_corpus += tweet

print(predict_vote(predict_corpus))