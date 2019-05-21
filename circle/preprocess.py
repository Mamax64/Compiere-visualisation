import csv, json

temp = {}
data = []
done = []

def write_temp():
	with open("../raw-data/basegraph.csv", "r") as graph_file:
		print("Reading relations file...")
		lines = csv.reader(graph_file)
		for line in lines:
			for item in line[0:2]:
				if item not in done:
					class_object = {
						"name": "." + item,
						"size": 1,
						"imports": []
					}
					done.append(item)
					temp[item] = class_object
			temp.get(line[0])["imports"].append("." + line[1])


def write_data():
	for key in temp.keys():
		data.append(temp.get(key))


def write_json(d):
	with open("data/clean.json", 'w') as outfile:  
		print("Writing json data...")
		json.dump(d, outfile, indent=4)

write_temp()
write_data()
write_json(data)