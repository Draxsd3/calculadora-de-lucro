function calculateProfit() {
    const category = document.getElementById('category').value.split('-');
    const commissionRate = parseFloat(category[0]);
    const minimumCommission = parseFloat(category[1]);

    const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
    const desiredProfitMargin = parseFloat(document.getElementById('desiredProfitMargin').value);

    if (isNaN(purchasePrice) || isNaN(desiredProfitMargin)) {
        alert('Por favor, insira valores válidos para todos os campos.');
        return;
    }

    const commission = Math.max((purchasePrice * commissionRate / 100), minimumCommission);
    const totalCost = purchasePrice + commission;
    const desiredProfit = totalCost * (desiredProfitMargin / 100);
    const requiredSellingPrice = totalCost + desiredProfit;

    document.getElementById('sellingPrice').innerText = requiredSellingPrice.toFixed(2);
}
