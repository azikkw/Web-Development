import math

a = int(input())
b = int(input())

ans = 0

for i in range(a, b + 1):
    if i ** 2 <= b:
        print(i ** 2)

# L = [x for x in range(a, b + 1) if int(math.sqrt(x)) == math.sqrt(x)] 
# print(L)