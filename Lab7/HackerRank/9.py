def mutate_string(string, position, character):
    list = []
    
    for i in string:
        list.append(i)
    
    list.pop(position)
    list.insert(position, character)
    
    ans = ''
    for i in list:
        ans += i
    
    return ans

if __name__ == '__main__':
    s = input()
    i, c = input().split()
    s_new = mutate_string(s, int(i), c)
    print(s_new)