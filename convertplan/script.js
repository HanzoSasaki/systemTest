document.getElementById('processButton').addEventListener('click', async () => {
  const jsonFile = document.getElementById('jsonFile').files[0];
  const productNamesInput = document.getElementById('productNames').value.trim();

  if (!jsonFile || !productNamesInput) {
    alert('Please upload a JSON file and enter product names.');
    return;
  }

  try {
    const fileText = await jsonFile.text();
    const jsonData = JSON.parse(fileText);

    const productNames = productNamesInput.split('\n').map(name => name.trim());
    const results = [];

    // Usando for loop para melhor performance
    for (let i = 0; i < productNames.length; i++) {
      const name = productNames[i];
      const product = jsonData.find(item => item["Descrição"]?.toLowerCase() === name.toLowerCase());
      if (product) {
        results.push({ name: product["Descrição"], cost: product["Vlr. Custo"] });
      } else {
        results.push({ name, cost: 'Not Found' });
      }
    }

    const resultTable = document.getElementById('resultTable');
    resultTable.innerHTML = '';

    results.forEach(({ name, cost }) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${name}</td>
        <td>${cost}</td>
      `;
      resultTable.appendChild(row);
    });

    // Habilitar botão de download
    document.getElementById('downloadButton').classList.remove('hidden');

    // Armazenar os resultados para download
    window.resultsForDownload = results;
  } catch (error) {
    alert('Erro ao processar o arquivo JSON. Verifique se o formato está correto.');
  }
});

document.getElementById('downloadButton').addEventListener('click', () => {
  const results = window.resultsForDownload;
  const csvRows = [];

  // Cabeçalhos CSV
  csvRows.push(['Product Name', 'Cost Price']);

  // Adicionar dados dos resultados ao CSV
  results.forEach(({ name, cost }) => {
    // Cada linha com nome do produto na primeira célula e custo na segunda
    csvRows.push([name, cost]);
  });

  // Converter para string CSV
  const csvString = csvRows.map(row => row.join(',')).join('\n');

  // Criar um blob com os dados CSV
  const blob = new Blob([csvString], { type: 'text/csv' });

  // Criar link para download
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'product_costs.csv';
  
  // Iniciar o download
  link.click();
});
