const stockPriceElement = document.getElementById('cardano-price');
let lastPrice = null;
  
async function fetchStockPrice() {    
  try {
    const response = await fetch('https://api.coincap.io/v2/assets/cardano');
    const data = await response.json();
    const price = parseFloat(data.data.priceUsd).toFixed(2);
    stockPriceElement.innerText = `${price} $`;
    stockPriceElement.style.color = lastPrice === null || lastPrice === price ? 'white' : price > lastPrice ? 'lightgreen' : 'red';
    lastPrice = price;
  } catch (error) {
    stockPriceElement.innerText = 'Error fetching price.';
  }
}
  
fetchStockPrice();
setInterval(fetchStockPrice, 10000);
  