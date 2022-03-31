window.onload = iniciar;

function iniciar() {
  const redNeuronal = new brain.NeuralNetwork();

  const datos = [
    {
      input: { R: 0.78, G: 0.9, B: 1 }, //CELESTE CLARO
      output: { claro: 1 },
    },
    {
      input: { R: 0, G: 0.11, B: 0.2 }, //AZUL OSCURO
      output: { oscuro: 1 },
    },
    {
      input: { R: 0.1, G: 0.2, B: 0.3 }, //AZUL OSCURO
      output: { oscuro: 1 },
    },
    {
      input: { R: 0.74, G: 0.78, B: 0.86 }, //AZUL OSCURO
      output: { claro: 1 },
    },
  ];

  redNeuronal.train(datos);

  let result = brain.likely({ R: 0.56, G: 0.98, B: 0.61 }, redNeuronal);
  alert(result);
}
