import os, csv, json

data = {}
data["nodes"] = []
data["links"] = []

def write_clusters_object():
	if os.path.exists("data/nodes.txt"):
		os.remove("data/nodes.txt")
	with open("../raw-data/clusters.csv", "r") as file:
		print("Reading clusters file...")
		lines = csv.reader(file)
		for index, line in enumerate(lines):
			for node in line:
				write_cluster(node, index+1)
				write_node(node)


def write_relations():
	with open("data/nodes.txt", "r") as n_file:
		nodes = n_file.read().splitlines()
	with open("../raw-data/basegraph.csv", "r") as graph_file:
		print("Reading relations file...")
		lines = csv.reader(graph_file)
		for line in lines:
			if line[0] in nodes and line[1] in nodes:
				write_link(line[0], line[1], float(line[2]))

def write_json(d):
	with open("data/clean.json", 'w') as outfile:  
		print("Writing json data...")
		json.dump(d, outfile, indent=4)

def write_node(node):
	with open("data/nodes.txt", "a+") as file:
		file.write(node + "\n")

def write_cluster(node, id):
	data["nodes"].append({
			"cluster": id,
			"id": node
		})

def write_link(source, target, weight):
	data["links"].append({
			"source": source,
			"target": target,
			"value": weight
		})

write_clusters_object()
print("Clusters written.")
write_relations()
print("Relations written.")
write_json(data)
print("Json file written.")