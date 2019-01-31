from nlp import create_model
from gatherTweetsForCandidates import getCandidateFollowerTweets
import sys

race = sys.argv[1]
handle1 = sys.argv[2]
handle2 = sys.argv[3]

def create_race(name, candidates):
    # getCandidateFollowerTweets(candidates[0], candidates[1], name, 50)
    create_model(name)

create_race(race, [handle1, handle2])

sys.stdout.write("Trained!")
