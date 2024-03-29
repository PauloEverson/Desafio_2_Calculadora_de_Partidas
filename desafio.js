//Partidas Ranqueadas

//Quantas Vitorias
let vitorias = 120
//Quantas Derrotas
let derrotas = 5
let rest = vitorias - derrotas
let saldo = rest
let Nivel = ["Ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal"]
if(rest<=10){
    rest =(Nivel[0])
}else if(rest<=20){
    rest = (Nivel[1])
}else if (rest<=50){
    rest = (Nivel[2])
}else if (rest<=80){
    rest = (Nivel[3])
}else if (rest<=90){
    rest = (Nivel[4])
}else if (rest<=100){
    rest = (Nivel[5])
}else if (rest>=101){
    rest = (Nivel[6])
}
switch(rest){
    case(Nivel[0]):
    ranque("Ferro")
    break
    case(Nivel[1]):
    ranque("Bronze")
    break
    case(Nivel[2]):
    ranque("Prata")
    break
    case(Nivel[3]):
    ranque("Ouro")
    break
    case(Nivel[4]):
    ranque("Diamante")
    break
    case(Nivel[5]):
    ranque("Lendário")
    break
    case(Nivel[6]):
    ranque("Imortal")
    break
}
function ranque(Ferro){
    console.log("O heroi tem saldo de " + saldo + " está no nível de "+Ferro)
}
function ranque(Bronze){
    console.log("O heroi tem saldo de " + saldo + " está no nível de "+Bronze)
}
function ranque(Prata){
    console.log("O heroi tem saldo de " + saldo + " está no nível de "+Prata)
}
function ranque(Ouro){
    console.log("O heroi tem saldo de " + saldo + " está no nível de "+Ouro)
}
function ranque(Diamante){
    console.log("O heroi tem saldo de " + saldo + " está no nível de "+Diamante)
}
function ranque(Lendário){
    console.log("O heroi tem saldo de " + saldo + " está no nível de "+Lendário)
}
function ranque(Imortal){
    console.log("O heroi tem saldo de " + saldo + " está no nível de "+Imortal)
}

//fim