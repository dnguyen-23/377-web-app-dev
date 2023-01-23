maxPali = 0
finished = False
for i in range(999, 100, -1):
    for j in range(999, 100,-1):
        prod = str(i * j)
        print(prod)
        for x in range(len(prod) / 2):
            if prod[x] != prod[len(prod) - 1 - x]:
                break #meaning that this is not a palindrome
                
            if prod[x] == prod[len(prod) - 1 - x] and x == len(prod) / 2 - 1:
                if maxPali < int(prod):
                    maxPali = int(prod)
print(maxPali)         
                
        


