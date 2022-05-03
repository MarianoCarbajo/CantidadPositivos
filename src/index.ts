let valor: number;
let contador: number = 0;
let positivos: number = 0;
valor = Number(prompt("Ingrese un valor"));
let maximo: number = valor;

while (valor != 0) {
  contador = contador + 1;
  if (valor > 0) {
    positivos = positivos + 1;
  }
  valor = Number(prompt("Ingrese otro valor"));
}
console.log(
  positivos + " positivos," + (positivos * 100) / contador + "% del total"
);
