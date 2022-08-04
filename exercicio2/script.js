/* Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade. */

const idade = 18
const terminouEnsinoMedio = true
const cursaFaculdade = true


/* Crie um `if` para cada variável, checando as seguintes afirmacões:
- Se a pessoa tem 18 anos ou mais;
- Se a pessoa terminou o ensino médio;
- Se a pessoa NÃO está cursando alguma faculdade; */

if(idade >= 18){
    console.log("Vc é maior de idade");
}
if(terminouEnsinoMedio === true){
	console.log("Vc terminou o ensino medio");
}
if(cursaFaculdade === !true){
    console.log("Vc não está cursando faculdade");
}

/* Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira. */

if(cursaFaculdade === true){
    console.log("Vc está cursando faculdade");

}else{
    console.log("vc não está cursando faculdade");
}

/* Caso a primeira pessoa tenha idade >=18:

<b>"A pessoa é maior de idade"</b> */
/* e caso não seja:

<b>"A pessoa é menor de idade"</b> */

if(idade >= 18){
    console.log("a pessoa é maior de idade");

}else{
    console.log("a pessoa não é maior de idade");
}