import math
import time
start = time.time()
# done = False
def func():
    for i in range(500, 1, -1):
        c = i
        for j in range(1, ((1000 - i) / 2)):
            a = j
            # b_squared = c**2 - a**2
            # if b_squared < 0:
            #     break
            b = 1000 - a - c
            # print(b_squared)
            # b = math.sqrt(b_squared)
            
            if a**2 + b**2 == c**2:
                print(a, b, c)
                done = True
                return (a * b * c)
       

# if (1.0000 == 1):
#     print(True)
print(func())
print(time.time() - start)
