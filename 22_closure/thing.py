def repeat(s=""):
	def r3(n):
		return s * n
	return r3

r1 = repeat("hello")
r2 = repeat("goodbye")

print(r1(2))
print(r2(2))
print(repeat("cool")(3))

def make_counter():
	x = 0
	def counter(b=False):
		nonlocal x
		if b:
			return x
		x += 1
		return x
	return counter

ctr1 = make_counter()
print(ctr1())
print(ctr1(True))
print(ctr1())
print(ctr1(True))

ctr2 = make_counter()
print(ctr2())
print(ctr2(True))
print(ctr1())
print(ctr1(True))
print(ctr2())
print(ctr2(True))