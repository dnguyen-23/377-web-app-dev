
cur = 600851475143
factor = 2
while factor < cur:
    while cur % factor == 0:
        cur /= factor
    factor += 1
    
print(cur)


