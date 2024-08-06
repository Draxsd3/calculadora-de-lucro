function showError(message) {
    document.getElementById('errorMessage').innerText = message;
    $('#errorModal').modal('show');
}

function calculateProfit() {
    if (document.getElementById('amazon-fields').style.display === 'block') {
        calculateAmazonProfit();
    } else if (document.getElementById('mercado-livre-fields').style.display === 'block') {
        calculateMercadoLivreProfit();
    }
}

function calculateAmazonProfit() {
    const category = document.getElementById('category').value.split('-');
    const commissionRate = parseFloat(category[0]);
    const minimumCommission = parseFloat(category[1]);

    const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
    const desiredProfitMargin = parseFloat(document.getElementById('desiredProfitMargin').value);

    if (isNaN(purchasePrice) || isNaN(desiredProfitMargin)) {
        showError('Por favor, insira valores válidos para todos os campos.');
        return;
    }

    const commission = Math.max((purchasePrice * commissionRate / 100), minimumCommission);
    const totalCost = purchasePrice + commission;
    const desiredProfit = totalCost * (desiredProfitMargin / 100);
    const requiredSellingPrice = totalCost + desiredProfit;

    document.getElementById('sellingPrice').value = requiredSellingPrice.toFixed(2);
}

function calculateMercadoLivreProfit() {
    const tarifa = parseFloat(document.getElementById('mercadoLivreTarifa').value);
    const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
    const desiredProfitMargin = parseFloat(document.getElementById('desiredProfitMargin').value);

    if (isNaN(purchasePrice) || isNaN(desiredProfitMargin) || isNaN(tarifa)) {
        showError('Por favor, insira valores válidos para todos os campos.');
        return;
    }

    if (tarifa < 10 || tarifa > 19) {
        showError('A tarifa deve estar entre 10% e 19%.');
        return;
    }

    const commission = purchasePrice * (tarifa / 100);
    const totalCost = purchasePrice + commission;
    const desiredProfit = totalCost * (desiredProfitMargin / 100);
    const requiredSellingPrice = totalCost + desiredProfit;

    document.getElementById('sellingPrice').value = requiredSellingPrice.toFixed(2);
}

function showForm(marketplace) {
    if (marketplace === 'amazon') {
        document.getElementById('amazon-fields').style.display = 'block';
        document.getElementById('mercado-livre-fields').style.display = 'none';
    } else if (marketplace === 'mercado-livre') {
        document.getElementById('amazon-fields').style.display = 'none';
        document.getElementById('mercado-livre-fields').style.display = 'block';
    }
    document.getElementById('calculator-form').style.display = 'block';
}

function resetForm() {
    document.getElementById('calculator-form').style.display = 'none';
    document.getElementById('amazon-fields').style.display = 'none';
    document.getElementById('mercado-livre-fields').style.display = 'none';
    document.getElementById('sellingPrice').value = '0.00';
}
function calculateProfit() {
    if (document.getElementById('amazon-fields').style.display === 'block') {
        calculateAmazonProfit();
    } else if (document.getElementById('mercado-livre-fields').style.display === 'block') {
        calculateMercadoLivreProfit();
    }
}

function calculateAmazonProfit() {
    const category = document.getElementById('category').value.split('-');
    const commissionRate = parseFloat(category[0]);
    const minimumCommission = parseFloat(category[1]);

    const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
    const desiredProfitMargin = parseFloat(document.getElementById('desiredProfitMargin').value);

    if (isNaN(purchasePrice) || isNaN(desiredProfitMargin)) {
        showError('Por favor, insira valores válidos para todos os campos.');
        return;
    }

    const commission = Math.max((purchasePrice * commissionRate / 100), minimumCommission);
    const totalCost = purchasePrice + commission;
    const desiredProfit = totalCost * (desiredProfitMargin / 100);
    const requiredSellingPrice = totalCost + desiredProfit;

    document.getElementById('sellingPrice').value = `R$ ${requiredSellingPrice.toFixed(2).replace('.', ',')}`;
}

function calculateMercadoLivreProfit() {
    const tarifa = parseFloat(document.getElementById('mercadoLivreTarifa').value);
    const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
    const desiredProfitMargin = parseFloat(document.getElementById('desiredProfitMargin').value);

    if (isNaN(purchasePrice) || isNaN(desiredProfitMargin) || isNaN(tarifa)) {
        showError('Por favor, insira valores válidos para todos os campos.');
        return;
    }

    if (tarifa < 10 || tarifa > 19) {
        showError('A tarifa deve estar entre 10% e 19%.');
        return;
    }

    const commission = purchasePrice * (tarifa / 100);
    const totalCost = purchasePrice + commission;
    const desiredProfit = totalCost * (desiredProfitMargin / 100);
    const requiredSellingPrice = totalCost + desiredProfit;

    
    document.getElementById('sellingPrice').value = `R$ ${requiredSellingPrice.toFixed(2).replace('.', ',')}`;
}


