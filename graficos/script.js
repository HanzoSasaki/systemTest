// scripts.js
// Quando a página carregar, esconder o loader após 2-3 segundos
window.addEventListener("load", () => {
  setTimeout(() => {
      document.body.classList.add('loaded');
  }, 1000); // 2000ms = 2 segundos
});
// Exemplo de como adicionar gráficos dinamicamente
const container = document.querySelector('.container');

// Função para adicionar um gráfico
function addChart(url, title) {
  const chartBox = document.createElement('div');
  chartBox.classList.add('chart-box');
  
  const h2 = document.createElement('h2');
  h2.textContent = title;
  chartBox.appendChild(h2);
  
  const iframe = document.createElement('iframe');
  iframe.classList.add('chart-frame');
  iframe.src = url;
  chartBox.appendChild(iframe);
  
  container.appendChild(chartBox);
}

