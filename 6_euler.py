import time
start = time.time()
def func():
    sum_squares = 0
    square_sum = 0
    for i in range(1, 101):
        sum_squares += i**2
        square_sum += i
    return abs(sum_squares - square_sum**2)

print(func())
print(time.time() - start)
    