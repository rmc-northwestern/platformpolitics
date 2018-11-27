import tweepy, sys, pickle, os
from APIKeys import *

def gatherTweets(candidate1, candidate2):

    auth = tweepy.AppAuthHandler(API_KEY, API_SECRET)
    api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)

    if not api:
        print("Can't Authenticate")
        sys.exit(-1)


    c1FollowersFNames = []
    c2FollowersFNames = []
    for i in range(1000):
        f1 = candidate1+str(i)+".txt"
        f2 = candidate2+str(i)+".txt"
        c1FollowersFNames.append(f1)
        c2FollowersFNames.append(f2)
        
    candidate1Followers = api.followers_ids(candidate1)
    candidate2Followers = api.followers_ids(candidate2)


    for follower in candidate1Followers: 
        if follower in candidate2Followers:
            candidate1Followers.remove(follower)
            candidate2Followers.remove(follower)

    c1FollowerCount = 0
    c2FollowerCount = 0


    for follower in candidate1Followers:
        if(c1FollowerCount <1000):
            try:
                followerTweets = api.user_timeline(id=follower, count=200)
                followerTweetText = []
                for tweet in followerTweets:
                    try:
                        followerTweetText.append(tweet.text)
                    except:
                        continue
                with open(c1FollowersFNames[c1FollowerCount], "wb") as f:
                    pickle.dump(followerTweetText, f)
                print("Stored Data From C1 Follower: "+str(c1FollowerCount))
                c1FollowerCount+=1
            except:
                print("Could not store user data")
        else:
            break
    for follower in candidate2Followers:
        if(c2FollowerCount <1000):
            try:
                followerTweets = api.user_timeline(id=follower, count=200)
                followerTweetText = []
                for tweet in followerTweets:
                    try:
                        followerTweetText.append(tweet.text)
                    except:
                        continue
                with open(c2FollowersFNames[c2FollowerCount], "wb") as f:
                    pickle.dump(followerTweetText, f)
                print("Stored Data From C2 Follower: "+str(c2FollowerCount))
                c2FollowerCount+=1
            except:
                print("Could not store user data")
        else:
            break




