from random import randint

min_val = int(input("min number: "))
max_val = int(input("max number: "))

if(max_val < min_val):
    print("Invalid input")
else:
    randomNumber = randint(min_val, max_val)
    print(randomNumber)