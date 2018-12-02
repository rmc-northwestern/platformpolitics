import tweepy, sys, pickle, os
def getCandidateFollowerTweets(candidate1, candidate2, raceName, follower_amount):
    API_KEY = "iLDXs6ALh75RvdVPHkGXcfvSy"
    API_SECRET = "AFYMdCYj7H7UqjDb5JA5TicN5HmVRVp5SXfgkJVQjrnUqfLQv3"

    auth = tweepy.AppAuthHandler(API_KEY, API_SECRET)
    api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)

    if not api:
        print("Can't Authenticate")
        sys.exit(-1)


    pathToC1 = os.makedirs("races/" + raceName+"/"+candidate1)
    pathToC2 = os.mkdir("races/" + raceName+"/"+candidate2)


    c1FollowersFNames = []
    c2FollowersFNames = []
    for i in range(follower_amount):
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
        if(c1FollowerCount < follower_amount):
            try:
                followerTweets = api.user_timeline(id=follower, count=200)
                followerTweetText = []
                for tweet in followerTweets:
                    try:
                        followerTweetText.append(tweet.text)
                    except:
                        continue
                with open("races/" + raceName + "/" + candidate1 + "/" + c1FollowersFNames[c1FollowerCount], "wb") as f:
                    pickle.dump(followerTweetText, f)
                print("Stored Data From C1 Follower: "+str(c1FollowerCount))
                c1FollowerCount+=1
            except:
                print("Could not store user data")
        else:
            break
    for follower in candidate2Followers:
        if(c2FollowerCount < follower_amount):
            try:
                followerTweets = api.user_timeline(id=follower, count=200)
                followerTweetText = []
                for tweet in followerTweets:
                    try:
                        followerTweetText.append(tweet.text)
                    except:
                        continue
                with open("races/" + raceName + "/"+candidate2 +"/" + c2FollowersFNames[c2FollowerCount], "wb") as f:
                    pickle.dump(followerTweetText, f)
                print("Stored Data From C2 Follower: "+str(c2FollowerCount))
                c2FollowerCount+=1
            except:
                print("Could not store user data")
        else:
            break
