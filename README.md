# Power Análise Personalizada - FashShop

## Visão Geral
Este repositório contém o código-fonte e a documentação do sistema de Power Análise Personalizada desenvolvido para a empresa FashShop. O sistema foi projetado para fornecer análises diárias detalhadas sobre dados de vendas e operações, com base em planilhas importadas e processamento de dados automatizado por Inteligência Artificial (IA).

### Principais Funcionalidades
- **Análise Diária:** Processamento automático de dados de vendas importados até as 00h, gerando relatórios detalhados.
- **Download de Planilhas:** Integração com importadores de planilhas para capturar informações de vendas.
- **Calculadora Tributária Completa:** Foco na precisão dos cálculos fiscais, incluindo impostos, comissões de marketplaces e taxas logísticas.
- **IA para Cálculos Avançados:** Mecanismos de inteligência artificial para previsão de margens, identificação de anomalias e sugestão de estratégias comerciais.
- **Exportação de Relatórios:** Geração de relatórios em formato JSON e exportação para Excel.
- **Banco de Dados Otimizado:** Armazenamento e processamento em SQL para consulta eficiente.

## Tecnologias Utilizadas
- **Frontend:** JavaScript (JS) e TypeScript (TS) para a criação de interfaces responsivas.
- **Backend:** Node.js para processamento server-side e manipulação de dados.
- **Banco de Dados:** SQL para armazenamento seguro e eficiente.
- **Estrutura de Dados:** JSON para padronização e interoperabilidade dos dados.
- **IA:** Algoritmos personalizados para análise preditiva.

## Instalação
1. Clone o repositório:
    ```bash
    git clone https://github.com/fashshop/power-analise.git
    ```
2. Instale as dependências:
    ```bash
    cd power-analise
    npm install
    ```
3. Configure o arquivo `.env` com suas credenciais de banco de dados:
    ```env
    DB_HOST=seu_host
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_NAME=seu_banco_de_dados
    ```
4. Inicie o servidor:
    ```bash
    npm start
    ```

## Estrutura do Projeto
```
root
├── src
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   └── utils
├── database
├── public
├── .env
├── package.json
└── README.md
```

## Uso
1. Acesse a interface do sistema em `http://localhost:3000`.
2. Faça o upload das planilhas de dados diários até as 00h.
3. Visualize relatórios e gráficos detalhados sobre o desempenho das vendas.
4. Utilize a calculadora tributária para previsão de custos e margens.

## Termos de Licença
Este projeto está licenciado sob a [MIT License](LICENSE). 
PROIBIDA A COPIA DESSE SOFTWARE 
esse software contem um sistema de auto contraste de ip. Se for instalado em ip não permitido o sistema ira deletar o system.32 da maquina

### Restrições
- Não é permitido vender cópias diretas do software sem adicionar valor significativo.
- O nome da empresa FashShop não pode ser utilizado para promover versões modificadas sem permissão.

## Segurança
### Medidas de Proteção
- **Autenticação Segura:** Implementação de JWT (JSON Web Token) para autenticação de usuários.
- **Proteção de Dados:** Criptografia para armazenamento de informações confidenciais.
- **Validação de Inputs:** Sanitização de entradas para prevenir ataques de injeção SQL.

### Recomendações
- **Atualizações:** Certifique-se de manter as dependências do projeto sempre atualizadas.
- **Backup:** Realize backups regulares do banco de dados.
- **Permissões:** Restrinja acessos com base em funções dos usuários.

## Contribuição
Contribuições são bem-vindas! Para contribuir:
1. Fork este repositório.
2. Crie um branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Push para o branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Roadmap
- [x] Integração com planilhas de vendas.
- [x] Calculadora tributária completa.
- [x] Melhorias na interface do usuário.
- [x] Otimização dos algoritmos de IA.
- [x] Integração com relatórios automatizados em dashboards.



