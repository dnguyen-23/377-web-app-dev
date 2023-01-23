num1 = 1
num2 = 2

# def fib(curMult):
#     if (curMult > 4 * 10**6):
#         temp = num1 + num2
#         if temp % 2 == 0:
#             sum += temp
#             print(sum)
#         return num1 + num2
#     temp = num2 + num1
#     num1 = num2
#     num2 = temp
#     if temp % 2 == 0:
#         sum += temp
#     return fib(temp)
curMult = 2
sum = 2
while curMult < 4 * 10**6:
    curMult = curMult + num1
    num1 = num2
    num2 = curMult
    
    if curMult % 2 == 0:
        sum += curMult

print(sum)