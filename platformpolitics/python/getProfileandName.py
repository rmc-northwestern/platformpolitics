import tweepy, json, sys

handle = sys.argv[1]

def getProPicAndName(twitterHandle):
    API_KEY = "iLDXs6ALh75RvdVPHkGXcfvSy"
    API_SECRET = "AFYMdCYj7H7UqjDb5JA5TicN5HmVRVp5SXfgkJVQjrnUqfLQv3"

    auth = tweepy.AppAuthHandler(API_KEY, API_SECRET)
    api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)

    if not api:
        print("Can't Authenticate")
        sys.exit(-1)
    if twitterHandle[0] =="@":
        twitterHandle = twitterHandle[1:]

    user = api.get_user(id=twitterHandle)

    profileImage = user.profile_image_url
    profileImageBig = profileImage[:-11]
    profileImageLink = profileImageBig+".jpg"

    name = user.name

    return name, profileImageLink

sys.stdout.write(json.dumps(getProPicAndName(handle)))
