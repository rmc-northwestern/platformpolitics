import os, sys, json

races = []

for race in os.listdir('races'):
    lst = [race]
    for can in os.listdir('races/' + race):
        lst.append(can)
    races.append(lst)

sys.stdout.write(json.dumps(races))
