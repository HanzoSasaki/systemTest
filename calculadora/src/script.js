function calcularValorFinal() {
  const custo = parseFloat(document.getElementById('custo').value);
  const icms = parseFloat(document.getElementById('icms').value);
  const ipi = parseFloat(document.getElementById('ipi').value);
  const tipoNota = document.getElementById('tipoNota').value;

  if (isNaN(custo) || isNaN(icms) || isNaN(ipi)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  let valorFinal;
  if (icms === 18 && ipi === 0) {
    valorFinal = custo;
  } else if (icms === 18) {
    valorFinal = custo + (custo * ipi / 100);
  } else {
    const diferencaICMS = 18 - icms;
    valorFinal = custo + (custo * diferencaICMS / 100) + (custo * ipi / 100);
  }

  // Condições baseadas no tipo da nota
  if (tipoNota === 'meiaNota') {
    valorFinal += custo;
  } else if (tipoNota === 'nota3') {
    valorFinal += custo * 2;  // Soma o valor do custo duas vezes
  }

  document.getElementById('resultado').style.display = 'block';
  document.getElementById('resultado').textContent = `Valor Final: R$ ${valorFinal.toFixed(2)}`;
}


// Quando a página carregar, esconder o loader após 2-3 segundos
window.addEventListener('load', function() {
  setTimeout(function() {
      document.body.classList.add('loaded'); // Adiciona a classe 'loaded' para esconder o loader
  }, 2000); // Tempo do carregamento (em milissegundos), ajustável para 2000 ou 3000
});