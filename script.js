//2
function verificaFibonacci(num) {
  let a = 0,
    b = 1,
    c = 0;

  while (c < num) {
    c = a + b;
    a = b;
    b = c;
  }

  if (c === num) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
  }
}
verificaFibonacci(4181);

//3
function calcularFaturamento(vetorFaturamento) {
  let menorValor = vetorFaturamento[0];

  let maiorValor = vetorFaturamento[0];

  let somaFaturamento = vetorFaturamento[0];
  let diasAcimaMedia = 0;

  for (let i = 1; i < vetorFaturamento.length; i++) {
    const faturamento = vetorFaturamento[i];

    if (faturamento < menorValor) {
      menorValor = faturamento;
    }
    if (faturamento > maiorValor) {
      maiorValor = faturamento;
    }

    somaFaturamento += faturamento;
  }

  const mediaFaturamento = somaFaturamento / vetorFaturamento.length;

  for (const faturamento of vetorFaturamento) {
    if (faturamento > mediaFaturamento) {
      diasAcimaMedia++;
    }
  }

  return {
    menorValor: menorValor,
    maiorValor: maiorValor,
    diasAcimaMedia: diasAcimaMedia,
  };
}

const faturamentoDiario = [
  1000, 1200, 800, 1500, 900, 1100, 1300, 1400, 1000, 1200, 800, 1500, 900,
  1100, 1300, 1400, 1000, 1200, 800, 1500, 900, 1100, 1300, 1400, 1000, 1200,
  800, 1500, 900, 1100, 1300,
];
const resultado = calcularFaturamento(faturamentoDiario);
console.log("Menor valor de faturamento:", resultado.menorValor);
console.log("Maior valor de faturamento:", resultado.maiorValor);
console.log("Dias com faturamento acima da média:", resultado.diasAcimaMedia);

//4
const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const totalFaturamento = Object.values(faturamento).reduce(
  (total, valor) => total + valor,
  0
);

const representacao = {};
for (let estado in faturamento) {
  representacao[estado] = (faturamento[estado] / totalFaturamento) * 100;
}

for (let estado in representacao) {
  console.log(`${estado}: ${representacao[estado].toFixed(2)}%`);
}

//5
const str = "Hello, world!";

let strInvertida = "";
for (let i = str.length - 1; i >= 0; i--) {
  strInvertida += str[i];
}

console.log(strInvertida);
