 function showForm(marketplace) {
        document.getElementById('calculator-form').style.display = 'block';

        // Esconde todos os campos de mercado inicialmente
        document.getElementById('amazon-fields').style.display = 'none';
        document.getElementById('mercado-livre-fields').style.display = 'none';

        // Mostra apenas os campos relevantes ao marketplace selecionado
        if (marketplace === 'amazon') {
            document.getElementById('amazon-fields').style.display = 'block';
        } else if (marketplace === 'mercado-livre') {
            document.getElementById('mercado-livre-fields').style.display = 'block';
        }
    }

    function calculateProfit() {
        // Obtém o valor do preço de venda e custo do produto
        const productPrice = parseFloat(document.getElementById('productPrice').value);
        const costPrice = parseFloat(document.getElementById('costPrice').value);
        let profit = 0;

        // Calcula o lucro com base no marketplace selecionado
        if (document.getElementById('amazon-fields').style.display === 'block') {
            const category = document.getElementById('category').value.split('-');
            const amazonCommission = parseFloat(category[1]);
            profit = productPrice - costPrice - amazonCommission;
        } else if (document.getElementById('mercado-livre-fields').style.display === 'block') {
            const mercadoLivreTarifa = parseFloat(document.getElementById('mercadoLivreTarifa').value) / 100;
            profit = productPrice - costPrice - (productPrice * mercadoLivreTarifa);
        }

        // Formata o lucro para a moeda brasileira
        const formattedProfit = formatCurrency(profit);

        // Exibe o resultado do lucro
        const profitResult = document.getElementById('profit-result');
        profitResult.style.display = 'block';
        profitResult.innerHTML = `Lucro: <strong>${formattedProfit}</strong>`;
    }

    function formatCurrency(value) {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }