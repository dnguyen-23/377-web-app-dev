import time
num_parts = ["73167176531330624919225119674426574742355349194934",
    "96983520312774506326239578318016984801869478851843",
    "85861560789112949495459501737958331952853208805511",
    "12540698747158523863050715693290963295227443043557"
    "66896648950445244523161731856403098711121722383113",
    "62229893423380308135336276614282806444486645238749",
    "30358907296290491560440772390713810515859307960866",
    "70172427121883998797908792274921901699720888093776",
    "65727333001053367881220235421809751254540594752243",
    "52584907711670556013604839586446706324415722155397",
    "53697817977846174064955149290862569321978468622482",
    "83972241375657056057490261407972968652414535100474",
    "82166370484403199890008895243450658541227588666881",
    "16427171479924442928230863465674813919123162824586",
    "17866458359124566529476545682848912883142607690042",
    "24219022671055626321111109370544217506941658960408",
    "07198403850962455444362981230987879927244284909188",
    "84580156166097919133875499200524063689912560717606",
    "05886116467109405077541002256983155200055935729725",
    "71636269561882670428252483600823257530420752963450"]

num = ""
for part in num_parts:
    num += part
start = time.time()
def func(l):
    start_str = num[0:l]
    max_prod = 1
    for digit in start_str:
        max_prod *= int(digit)
    
    cur_prod = max_prod
    idx = l
    while idx < len(num):
        print(max_prod, cur_prod, start_str, num[idx])
        # test_prod = 1
        # for digit in start_str:
        #     test_prod *= int(digit)
        # print(cur_prod == test_prod, len(start_str))
        # if int(start_str[0]) != 0:
        #     cur_prod /= int(start_str[0])
        if int(num[idx]) == 0 :
            start_str = start_str[1:] + "0"
        
            idx += 1
            cur_prod = 1
            while(start_str.find("0") >= 0):
                zero = start_str.find("0") 
                start_str = start_str[zero + 1: len(start_str)] 
                extra = l - len(start_str)
                 
                
                start_str = start_str + num[idx: idx + extra]
                print(start_str)
                idx += extra
                if idx >= len(num):
                    break
            for digit in start_str:
                cur_prod *= int(digit)
        else:
            cur_prod /= int(start_str[0])
            cur_prod *= int(num[idx])
            start_str = start_str[1:]
            start_str = start_str + num[idx]
            idx += 1
        if cur_prod > max_prod:
            max_prod = cur_prod
    return max_prod
print(func(13))
duration = time.time() - start
print(duration)