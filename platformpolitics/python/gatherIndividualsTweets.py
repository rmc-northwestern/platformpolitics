import tweepy, sys, pickle, os
from APIKeys import *


def getPersonsData(twitterHandle):
    # Handle getting the @symbol gone, that's easy but needs a lil more work


    auth = tweepy.AppAuthHandler(API_KEY, API_SECRET)
    api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)

    if not api:
        print("Can't Authenticate")
        sys.exit(-1)
    try:
        personTweets = api.user_timeline(id=twitterHandle, count=200)
    except:
        print("Could not get this user's tweets.  The Twitter handle is either invalid or private.")
        return
    personTweetText = []
    for tweet in personTweets:
        try:
            personTweetText.append(tweet.text)
        except:
            continue
    return(personTweetText)
    #thf = twitterHandle+".txt"
    #with open(thf, "wb") as f:
    #    pickle.dump(personTweetText, f)
    #print("Tweets Gathered!")
