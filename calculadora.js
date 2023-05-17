const valueA = document.querySelector("#value-a");
const valueB = document.querySelector("#value-b");
const valueC = document.querySelector("#value-c");

const result = document.querySelector("#calc-result");

const calculoQuadratico = (a, b, c) => {
  const delta = Math.pow(b, 2) - 4 * a * c;
  if (delta < 0) {
    return "Não é possível calcular";
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return `X1 = ${x1} e X2 = ${x2}`;
  }
};

const calcular = () => {
  if (
    valueA.value !== null &&
    valueB.value !== null &&
    valueC.value !== null &&
    result !== null
  ) {
    result.innerHTML = calculoQuadratico(
      valueA.value,
      valueB.value,
      valueC.value
    );
  }
};

console.log(valueA.value);
