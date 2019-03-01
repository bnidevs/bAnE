from pymongo import MongoClient

client = MongoClient()
L = client.test.restaurants

def findbyboro(boro):
	for r in L.find({"borough" : boro}):
		print(r)

def findbyzip(zcode):
	for r in L.find({"address.zipcode" : zcode}):
		print(r)

def findbygrade(zcode, grade):
	for r in L.find({$and : [{"address.zipcode" : zcode}, {"grades.grade" : grade}]}):
		print(r)
		
def findbyscore(zcode, score):
	for r in L.find({$and : [{"address.zipcode" : zcode}, {"grades.score" : {$lt: score}}]}):
		print(r)
