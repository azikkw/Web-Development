def count_substring(string, sub_string):
    count, i, j = 0, 0, len(sub_string)
    
    while True:
        if string[i : j] == sub_string:
            count = count + 1
        
        i += 1
        j += 1
        
        if j > len(string):
            break

    return count

if __name__ == '__main__':
    string = input().strip()
    sub_string = input().strip()
    
    count = count_substring(string, sub_string)
    print(count)