def capsule(f):
	def inner(n):
		window = [0, 1]

		if n < 2:
			return window[n]
		else:
			inc = 2
			while inc <= n:
				window[inc % 2] = window[(inc + 1) % 2] + window[inc % 2]
				inc += 1
			return window[(inc - 1) % 2]
	return inner

@capsule
def fib(n):
	pass

print(fib(3))
