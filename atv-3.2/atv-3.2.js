const currentDate = new Date();
const dateTimeString = currentDate.toString();
const compraInternacional = 500.75;

const usdValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
}).format(compraInternacional);

const exchangeRate = 5.5;

const brlValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}).format(compraInternacional * exchangeRate);

const deliveryDate = new Date(currentDate);
deliveryDate.setDate(currentDate.getDate() + 12);

const day = String(deliveryDate.getDate()).padStart(2, '0');
const month = String(deliveryDate.getMonth() + 1).padStart(2, '0');
const year = deliveryDate.getFullYear();
const deliveryDateString = `${day}/${month}/${year}`;

const purchaseDetails = document.getElementById('purchase-details');
purchaseDetails.innerHTML = `
    <div class="info-box">
        <p><span class="label">Data e Hora Atuais:</span><br>${dateTimeString}</p>
    </div>
    
    <div class="currency-box">
        <span class="label">Valor em Dólar (USD):</span>
        <span>${usdValue}</span>
    </div>
    
    <div class="currency-box">
        <span class="label">Valor em Real (BRL):</span>
        <span>${brlValue}</span>
    </div>
    
    <div class="delivery-date">
        <span class="label">Previsão de Entrega:</span> ${deliveryDateString}
    </div>
`;