fr = open("nevek.txt", "r")
nevek = []
sor = fr.readline().strip()
while sor != "":
    nevek.append(sor)
    sor = fr.readline().strip()

print(nevek)