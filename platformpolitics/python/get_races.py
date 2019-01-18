import os, sys, json

races = []

for race in os.listdir('models'):
    lst = [race]
    for can in os.listdir('models/' + race):
        lst.append(can)
    races.append(lst)

sys.stdout.write(json.dumps(races))
