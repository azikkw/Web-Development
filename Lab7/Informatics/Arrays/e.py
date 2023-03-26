list = list(map(int, input().strip().split()))

for i in range(1, len(list)):
    if (list[i] > 0 and list[i - 1] > 0) or (list[i] < 0 and list[i - 1] < 0):
        print(list[i - 1], list[i])
        break