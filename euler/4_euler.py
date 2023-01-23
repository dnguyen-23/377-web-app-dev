
finished = False
for i in range(999, 101, -1):
    for j in range(999, 101,-1):
        prod = str(i * j)
        # print(prod)
        for x in range(len(prod) / 2):
            if prod[x] != prod[len(prod) - 1 - x]:
                break #meaning that this is not a palindrome
                
            if prod[x] == prod[len(prod) - 1 - x] and x == len(prod) / 2 - 1:
                print(prod)
                finished = True
                break
                
        if finished:
            break
    if finished:
        break