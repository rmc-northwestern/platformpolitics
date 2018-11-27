import tweepy, sys, pickle, os

API_KEY = "iLDXs6ALh75RvdVPHkGXcfvSy"
API_SECRET = "AFYMdCYj7H7UqjDb5JA5TicN5HmVRVp5SXfgkJVQjrnUqfLQv3"

auth = tweepy.AppAuthHandler(API_KEY, API_SECRET)
api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)

if not api:
    print("Can't Authenticate")
    sys.exit(-1)


roskamFollowers = api.followers_ids("PeterRoskam")

roskamFollowerFNames = []
for i in range(len(roskamFollowers)):
    f = "roskam"+str(i)+".txt"
    roskamFollowerFNames.append(f)

with open("roskamFollowerDump.txt", 'wb') as f:
    pickle.dump(roskamFollowers, f)

for i in range(len(roskamFollowers)):
    
    userTweets = []
    try:
        for index, tweet in enumerate(tweepy.Cursor(api.user_timeline, id=roskamFollowers[i]).items()):
            try:
                userTweets.append(tweet)
            except:
                continue
        userTweetText = []
        for tweet in userTweets:
            try:
                userTweetText.append(tweet.text)
            except: 
                continue
        with open(roskamFollowerFNames[i], 'wb') as f:
            pickle.dump(userTweetText, f)
        print("Stored Data from Roskam follower: "+str(i))
    except:
        print("Could not store data from Roskam follower: "+str(i))

