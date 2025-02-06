let resultados = [];
let dadosFixos = []; // Armazena os dados da planilha





function openModal(modalId) {
  document.getElementById('modal' + modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById('modal' + modalId).style.display = "none";
}

// Fechar o modal clicando fora da área do conteúdo
window.onclick = function(event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
}

// Função para carregar a planilha fixa
function carregarPlanilha() {
  fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSTFtzGJoM_SkG8ZobHrFdil3nZyZI9zKrPi6-5wDV27-wfly_oAgAcCSq1ylGg55giINmCpCMrMvQC/pub?gid=0&single=true&output=csv')
    .then(response => response.text())
    .then(data => {
      Papa.parse(data, {
        complete: function (result) {
          resultados = result.data;
          resultados = resultados.slice(1).filter(row => row.length > 1);
          dadosFixos = resultados.map(row => [...row]);

          calcularMargens(resultados);
          exibirResultados(resultados);
          calcularMargemTotalEMedia(resultados);
        },
        header: false,
        skipEmptyLines: true
      });
    })
    .catch(error => console.error("Erro ao carregar a planilha:", error));
}

function calcularMargens(resultados) {
  resultados.forEach(item => {
    let custo = parseFloat(item[3].replace('R$', '').replace(',', '.')) || 0;
    let precoVenda = parseFloat(item[4].replace('R$', '').replace(',', '.')) || 0;
    const imposto = parseFloat(item[5].replace('%', '').replace(',', '.')) / 100 || 0;
    const comissao = parseFloat(item[6].replace('%', '').replace(',', '.')) / 100 || 0;
    let taxaPedidos = parseFloat(item[7].replace('R$', '').replace(',', '.')) || 0;

    const impostoValor = imposto * precoVenda;
    const comissaoValor = comissao * precoVenda;
    const totalDespesas = impostoValor + comissaoValor + taxaPedidos;

    const margemLiquida = precoVenda - custo - totalDespesas;
    const margemPercentual = (margemLiquida / precoVenda) * 100;

    item.margemLiquida = isNaN(margemLiquida) ? 0 : margemLiquida;
    item.margemPercentual = isNaN(margemPercentual) ? 0 : margemPercentual;
  });
}

function calcularMargemTotalEMedia(resultados) {
  const margensLiquidas = resultados.map(item => item.margemLiquida);
  const margemLiquidaTotal = margensLiquidas.reduce((total, margem) => total + margem, 0);
  const mediaMargemTotal = margemLiquidaTotal / margensLiquidas.length;

  // Definindo a cor para a margem líquida total
  const classeMargemLiquidaTotal = margemLiquidaTotal < 0 ? 'negativo' : 'positivo';
  const classeMediaMargemTotal = mediaMargemTotal < 0 ? 'negativo' : 'positivo';

  // Exibindo a margem líquida total com a formatação
  document.getElementById('margemLiquidaTotal').innerHTML = `<strong class="${classeMargemLiquidaTotal}">Margem Líquida Total: R$ ${margemLiquidaTotal.toFixed(2)}</strong>`;
  // Exibindo a média da margem total com a formatação
  document.getElementById('mediaMargemTotal').innerHTML = `<strong class="${classeMediaMargemTotal}">Média da Margem Total: ${(mediaMargemTotal * 100).toFixed(2)}%</strong>`;
}

function exibirResultados(resultados) {
  const tbody = document.querySelector('#resultTable tbody');
  tbody.innerHTML = '';

  resultados.forEach(item => {
    // Definindo a classe de cor para margem líquida e margem percentual de cada item
    const classeMargemLiquida = item.margemLiquida < 0 ? 'negativo' : 'positivo';
    const classeMargemPercentual = item.margemPercentual < 0 ? 'negativo' : 'positivo';

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item[0]}</td>
      <td>${item[1]}</td>
      <td>${item[2]}</td>
      <td>${item[8]}</td>
      <td>${item[3]}</td>
      <td>${item[4]}</td>
      <td>${item[5]}</td>
      <td>${item[6]}</td>
      <td>${item[7]}</td>
      <td><strong class="${classeMargemLiquida}">R$ ${item.margemLiquida.toFixed(2)}</strong></td>
      <td><strong class="${classeMargemPercentual}">${item.margemPercentual.toFixed(2)}%</strong></td>
      <td>${item[11]}</td>
    `;
    tbody.appendChild(row);
  });
}


// Função para filtrar dados
function filtrarDados(filtro) {
  const resultadosFiltrados = dadosFixos.filter(item => {
    return item.some(valor => valor.toString().toLowerCase().includes(filtro.toLowerCase()));
  });
  exibirResultados(resultadosFiltrados);
}

function filtrar() {
  const filtro = document.getElementById('busca').value;
  filtrarDados(filtro);
}

carregarPlanilha();



// Quando a página carregar, esconder o loader após 2-3 segundos
window.addEventListener('load', function() {
  setTimeout(function() {
      document.body.classList.add('loaded'); // Adiciona a classe 'loaded' para esconder o loader
  }, 2000); // Tempo do carregamento (em milissegundos), ajustável para 2000 ou 3000
});



