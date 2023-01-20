//CALCULO DOBRO DE UM NUMERO:
function dobro() {
	alert("DOBRO DE UM NÚMERO")
		let numerico = Number(prompt("Digite um número para saber seu dobro"))
		let dobro= numerico*2
			alert(`O dobro de ${numerico} é ${dobro}`)
}
//CALCULO DE IMC:
function imc(){
	alert("CALCULO DE IMC:")
	let peso=Number(prompt("Digite seu peso em quilogramas: "))
	let altura=Number(prompt('Digite sua altura em metros: '));
	let imc1=peso/(altura*altura);
		if(imc1>=18.5 && imc1<24.9){
			alert(`Seu IMC é ${imc1.toFixed(1)}, peso normal.`)
		}else if(imc1>=25 && imc1<29.9){
			alert(`Seu IMC é ${imc1.toFixed(1)}, sobrepeso.`)
		}else if(imc1>=30 && imc1<34.9){
			alert(`Seu IMC é ${imc1.toFixed(1)}, obesidade grau 1.`) 
		}else if(imc1>=35 && imc1<39.9){
			alert(`Seu IMC é ${imc1.toFixed(1)}, obesidade grau 2.`)
		}else if(imc1>=40){
			alert(`Seu IMC é ${imc1.toFixed(1)}, obesidade grau 3.`)
		}		
}
//CALCULE A MÉDIA APÓS SOLICITAR TRÊS NOTAS PARA O USUÁRIO:
function media(){
	alert("MÉDIA DE NOTAS DO PAS-UNB")
		let nota1=Number(prompt("Digite a nota do PAS 1: "))
		let nota2=Number(prompt("Digite a nota do PAS 2: "))
		let nota3=Number(prompt("Digite a nota do PAS 3: "))
		let med=(nota1+nota2+nota3)/3
			if(med>=90 && med<100){
				alert(`Com média de ${med.toFixed()} pontos, você passou em Medicina na UNB`)
			}else if(med>=75 && med<90){
				alert(`Com média de ${med.toFixed()} pontos, você passou em Ciência da Computação na UNB`)
			}else if(med>=50 && med<75){
				alert(`Com média de ${med.toFixed()} pontos, você passou em Educação Física na UNB`)
			}else if(med>=40 && med<50){
				alert(`Com média de ${med.toFixed()} pontos, você passou em Fisioterapia na UNB`)
			}else if(med>=20 && med<40){
				alert(`Com média de ${med.toFixed()} pontos, você passou em Filosofia na UNB`)
			}else if(med<20){
				alert(`Com média de ${med.toFixed()} pontos, você não passou em nenhum curso na UNB`)
			}
}
//CALCULE QUANTAS HORAS VOCÊ JÁ VIVEU:
function vidaHoras(){
	alert("CALCULO DE QUANTAS HORAS VOCÊ JÁ VIVEU:")
	let idade= Number(prompt("Digite sua idade: "));
	let horas= 365*24*idade;
		alert(`Você tem ${horas} horas de vida.`);
}
//CALCULE A QUANTIDADE DE HORAS EM UMA VIAGEM EM DIAS:
function viagem(){
	alert("QUANTIDADE DE HORAS DE UMA VIAGEM EM DIAS:")
	let viagem = Number(prompt("Digite quantos dias de viagem: "));
	let dia= 24;
	let calc= viagem*24;
		alert(`Seu tempo de viagem é de ${calc} horas`);
}
//CALCULE O VALOR DA CONTA DE UM RESTAURANTE RECEBENDO O VALOR PRINCIPAL E CALCULADNO 10% DO GARÇOM:
function restaurante(){
	alert("VALOR DA CONTA DE UM RESTAURANTE + 10% DO GARÇOM:")
	let conta= Number(prompt("Digite o valor da conta:"));
	let valorFinal= conta+(conta*10/100)
		alert(`O valor final foi ${valorFinal}.`);
}
//LER UM N E VERIFICAR SE É IMPAR OU PAR
function parImpar(){
	alert("CALCULO PARA VER SE O NUMERO É PAR OU ÍMPAR:")
	let num=Number(prompt("Digite um número: "))
		if(num%2==0){
			alert(`${num} é um número par.`)      
		}else{
			alert(`${num} é um número ímpar.`)
		}
}
/*Escreva um algoritmo para ler as dimensões de um retângulo, quadrado, triangulo e calcular e escrever
a área*/
function area(){
	alert("CALCULO GEOMÉTRICO DE ÁREAS E PERÍMETROS:")
	let formaGeo=prompt('Digite [1] para quadrado, [2] para retângulo e [3] para triângulo')
		switch(formaGeo){
		case '1': 
			let lado=Number(prompt("Digite o valor do lado do quadrado:"))
			let area1=lado*lado
			let perimetro1=lado*4
				alert(`Com ${lado}m de lado, a área do quadrado é ${area1}`)
				alert(`Seu perímetro é de ${perimetro1} metros.`)
				break;
   		
	   	case '2':
	   		let altura=Number(prompt("Digite o valor da altura do retângulo:"))
	   		let largura=Number(prompt("Digite o valor da largura do retângulo:"))
			let area2=altura*largura
			let perimetro2=(altura*2) + (largura*2)
				alert(`Com ${altura}m de altura e ${largura}m de largura, a área do retângulo é de ${area2}m² .`)
				alert(`Seu perímetro é de ${perimetro2} metros.`)
				break;

		case'3':
			let h=Number(prompt("Digite o valor da altura do triângulo:"))
			let base=Number(prompt("Digite o valor da base do triângulo:"))
			let lado3=Number(prompt("Digite o valor do lado do triângulo:"))
			let area3=(h*base)/2
			let perimetro3=lado3*3
				alert(`com ${h}m de altura e ${base}m de base, a área do triângulo é de ${area3}m² .`)
				alert(`Com lado de ${lado3}m, seu perímetro é de ${perimetro3} metros.`)
   	}
}
/* Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao
total de eleitores.*/
function eleicao(){
		alert("CALCULO DO PERCENTUAL DE VOTOS NULOS, BRANCOS E VÁLIDOS:")
	let eleitores = Number(prompt("Digite o número total de eleitores"));
	let voto_branco = Number(prompt("Digite o número de votos brancos"));
	let voto_valido = Number(prompt("Digite o número de votos válidos"));
	let voto_nulo = Number(prompt("Digite o número de votos nulos"));
	let porc_branco = (100*voto_branco)/eleitores;
	let porc_valido = (100*voto_valido)/eleitores;
	let porc_nulo = (100*voto_nulo)/eleitores;
		alert(`${porc_valido.toFixed()}% votos válidos, ${porc_nulo.toFixed()}% votos nulos e  ${porc_branco.toFixed()}% votos brancos.`);
}
/*Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
Calcular e escrever o valor do novo salário.*/
function salario(){
		alert("CALCULO DO SALÁRIO MENSAL ATUAL DE UM FUNCIONÁRIO E O PERCENTUAL DE REAJUSTE:")
	const reajuste = 120
	let salario_mes = Number(prompt("Digite seu salário mensal atual: "));
	let salario_novo = salario_mes*reajuste/100;
		alert(`Seu novo salário é de ${salario_novo},00 reais com o reajuste de 20%.`);
}
/*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do
distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica
de um carro, calcular e escrever o custo final ao consumidor.*/
function carro(){
		alert("CALCULO DO CUSTO FINAL DE UM CARRO")
	const impostos = 45/100
	const distribuidor = 28/100
	let custFabrica = Number(prompt("Digite o valor do custo de fábrica do carro: "));
	let fabrica = (custFabrica*distribuidor)+custFabrica;
	let imposto = (custFabrica*impostos)+custFabrica;
	let total = imposto + fabrica;
		alert(`Com custos de 28% de fábrica e 45% de impostos o valor final do carro é ${total},00 reais.`);
}
/*//7.Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais 
uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas.Escrever 
um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas,o salário 
fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.*/
function vendedor(){
		alert("CALCULO DO SALÁRIO FINAL DE UM VENDEDOR DE CARROS")
	const salarioFix = Number(prompt("Digite seu salário fixo"));
	const comissaoFix = Number(prompt("Digite sua comissão fixa"));
	let nVendas = Number(prompt("Digite o número de carros vendidos"));
	let vendasEfet = comissaoFix*nVendas;
	let cincoP = 5/100*vendasEfet;
	let salfinal = salarioFix+vendasEfet+cincoP;
		alert(`Seu salário final ficou ${salfinal},00 reais.`);
}
//tabuada
function tabuada(){
	let valor=Number(prompt("Digite um numero para saber sua tabuada: "))
		for(let i=1; i<=10;i++){
			alert(`${valor} x ${i} = ${valor*i}`)
	}   
}
//ANTECESSOR
function antecessor(){
	alert("ANTECESSOR DE UM NÚMERO")
		let valorAnt = Number(prompt("Insira um número para saber seu antecessor:"))
		let antec = valorAnt - 1
			alert(`o antecessor de ${valorAnt} é ${antec}.`)
		}
//SUCESSOR
function sucessor(){
	alert("SUCESSOR DE UM NÚMERO")
		let valorSuc = Number(prompt("Insira um número para saber seu sucessor:"))
		let suces = valorSuc + 1
			alert(`O sucessor de ${valorSuc} é ${suces}.`)
		}