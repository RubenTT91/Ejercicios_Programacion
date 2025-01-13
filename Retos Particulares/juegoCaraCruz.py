import random
def caraCruz():
    if random.random()>=0.7:
        return "Cara"
    else:
        return "Cruz"
resultados =[]

for x in range(10):
    resultados.append(caraCruz())

print(resultados)                    
