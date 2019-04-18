def superstrip(s):
    puncs = {x for x in '!,"&?;:()[]\{\}.'}
    i = 0
    while i < len(s):
        if s == "":
            return ""
        if s[i] in puncs:
            s = s[:i] + s[i+1:]
            i -= 1
        i += 1
    return s

contents = ""

with open("book2.txt", "r") as f:
  contents = f.read()

contents = [x.strip() for x in contents.split("\n") if x.strip() != ""]
words = [superstrip(x.strip()) for y in contents for x in y.split(" ")]

def freqsing(s):
    s = s.lower()
    ct = 0
    for w in words:
        if w.lower() == s:
            ct += 1
    return ct

def grpfreq(ls):
    ls = {x.lower() for x in ls}
    ct = 0
    for w in words:
        if w.lower() in ls:
            ct += 1
    return ct

def hifreq():
    d = {}
    for w in words:
        wL = w.lower()
        if wL in d:
            d[wL] += 1
        else:
            d[wL] = 1
    mx = 0
    mxs = ""
    for k in d.keys():
        if d[k] > mx:
            mxs = k
            mx = d[k]

    return mxs

print("frequency of 'I':")
print(freqsing("I"))

print()

print("combined frequency of 'you', 'I', 'stop', 'to':")
print(grpfreq(["you", "I", "stop", "to"]))

print()

print("most frequent word:")
print(hifreq())
