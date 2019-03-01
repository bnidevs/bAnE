from pymongo import MongoClient

client = MongoClient()
L = client.test.restaurants

def findbyboro(boro):
	for r in L.find({"borough" : boro}):
		print(r)

def findbyzip(zcode):
	for r in L.find({"address.zipcode" : zcode}):
		print(r)