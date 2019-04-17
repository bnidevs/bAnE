uppalph = {x for x in "ABCDEFGHIJKLMNOPQRSTUVWXYZ"}
lowalph = {x for x in "abcdefghijklmnopqrstuvwxyz"}
numbers = {x for x in "0123456789"}
symbols = {x for x in ".?!&\#,;:-_*"}

def count(l, n):
	r = 0
	for i in l:
		if n == i:
			r += 1
	return r

def sat(s):
	if len(s) < 8:
		return False
	else:
		l = [0 if x in lowalph else 1 if x in uppalph else 2 if x in numbers else 3 for x in s]
		up = count(l, 1)
		lo = count(l, 0)
		nu = count(l, 2)
		
		return up >= 1 and lo >= 1 and nu >= 1

def rcor(n, lo, up):
	if n > up:
		return up
	elif n < lo:
		return lo
	else:
		return n

def rate(s):
	l = [0 if x in lowalph else 1 if x in uppalph else 2 if x in numbers else 3 for x in s]
	up = count(l, 1) + 1
	lo = count(l, 0) + 1
	nu = count(l, 2) * 2 + 1
	sb = count(l, 3) * 3 + 1

	return rcor((up * lo * nu * sb / 50), 0, 10)

print(rate("QaZ123#21PP"))