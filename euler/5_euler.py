# print(2 * 3 * 4 * 5 * 42 * 72 * 110 * 12 * 13 * 14 * 15 * 16 * 17 * 18 * 19 * 20)
finished = False
curNum = 20
while not finished:
    badNum = False

    for i in range(2, 20):
        if curNum % i != 0:
            badNum = True
    print(curNum, " ", badNum)

    if badNum:
        curNum += 20
    elif not badNum:
        print(curNum)
        finished = True
