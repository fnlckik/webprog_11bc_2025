from os import listdir

# nev = "black-amber.jpg"
def elem(nev):
    szilvanev = nev.split(".")[0] # black-amber
    title = szilvanev.replace("-", " ").capitalize() #Black amber
    return f"""
        <div class="col">
            <img src="images/gallery/{nev}" alt="{szilvanev}" class="img-thumbnail" title="{title}">
            <p class="rounded">{title}</p>
        </div>
     """

# fr = open("nevek.txt", "r")
# nevek = []
# sor = fr.readline().strip()
# while sor != "":
#     nevek.append(sor)
#     sor = fr.readline().strip()
nevek = listdir("./images/gallery/")

fw = open("elemek.txt", "w")
for nev in nevek:
    if nev != "Thumbs.db":
        fw.write(elem(nev))