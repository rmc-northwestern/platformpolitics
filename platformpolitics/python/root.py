from nlp import predict_vote, create_model
from gatherTweetsForCandidates import getCandidateFollowerTweets



def create_race(name, candidates):
    getCandidateFollowerTweets(candidates[0], candidates[1], name, 100)
    create_model(name)

create_race("tx2",["betoorourke", "tedcruz"])

#-------------- Predicting a vote

handle = input("Enter a twitter handle: ")
name = input("Enter a race name: ")
print("Predicting . . .")



print(predict_vote(name, handle))

#sublinear tf
