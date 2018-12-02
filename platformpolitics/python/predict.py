from nlp import predict_vote
import sys

race = sys.argv[1]
handle = sys.argv[2]

#-------------- Predicting a vote

# handle = input("Enter a twitter handle: ")
# name = input("Enter a race name: ")
# print("Predicting . . .")



sys.stdout.write(str(predict_vote(race, handle)[0]))

#sublinear tf
