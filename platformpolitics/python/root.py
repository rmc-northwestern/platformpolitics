from nlp import predict_vote, create_model
from functionToGatherTweets import gatherTweets

import pickle


def create_race(name, candidates):
    # gatherTweets(name, candidates[0], candidates[1])
    create_model(name)

#create_race("TXSen",[])

#-------------- Predicting a vote

handle = input("Enter a twitter handle: ")
name = input("Enter a race name: ")
print("Predicting . . .")



print(predict_vote(name, handle))

#sublinear tf
