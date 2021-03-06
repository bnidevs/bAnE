#Team awkcto-dawg
#Robin Han and Bill Ni

# UNION
# makes a set with all the elements of the list conversions of the arguments (eliminates duplicates when placed into set)

def union(s1, s2):
    return {x for x in [y for y in s1] + [z for z in s2]}

print(union({1,2,3,8}, {-1,2,3,4}))

# INTERSECTION
# loops thru the elements of the first argument and checks to see if it's in the second argument

def itrsct(s1, s2):
    return {x for x in s1 if x in s2}

print(itrsct({1,2,3}, {2,3,4}))

# SET DIFFERENCE
# same as intersection except checks to see if it's not in the second argument

def setdiff(s1,s2):
    return {x for x in s1 if x not in s2}

print(setdiff({1,2,3}, {2,3,4}))
print(setdiff({2,3,4}, {1,2,3}))

# SYMMETRIC DIFFERENCE
# returns union of the 2 set differences of the 2 arguments

def symdiff(s1,s2):
    return union(setdiff(s1,s2),setdiff(s2,s1))

print(symdiff({1,2,3}, {2,3,4}))

# CARTESIAN PRODUCT
# permutes thru all possible combinations of the 2 arguments

def cartprod(s1,s2):
    return {(x,y) for x in s1 for y in s2}

print(cartprod({1,2},{"red","white"}))

# QUICKSORT
# pivots by first element of each recursion

def qsort(l):
    return qsort([l[i] for i in range(len(l)) if (l[i] < l[0] or (l[i] == l[0] and i != 0))]) + [l[0]] + qsort([x for x in l if x > l[0]]) if len(l) >= 1 else l


print(qsort([1,56,2,5,6,3,2]))
