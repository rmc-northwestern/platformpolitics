import sys, pickle, json

name = sys.argv[1]

path = "models/" + name + "/details.txt"
details_file = open(path, "rb")
details = pickle.load(details_file)

sys.stdout.write(json.dumps(details))

#sublinear tf
