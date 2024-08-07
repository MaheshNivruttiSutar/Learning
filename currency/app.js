async function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;

  if (isNaN(amount) || amount <= 0) {
      document.getElementById('convertedAmount').textContent = 'Please enter a valid amount.';
      return;
  }

  if (fromCurrency === toCurrency) {
      document.getElementById('convertedAmount').textContent = `Amount: ${amount} ${toCurrency}`;
      return;
  }

  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
  const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

  try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data && data.rates && data.rates[toCurrency]) {
          const rate = data.rates[toCurrency];
          const convertedAmount = (amount * rate).toFixed(2);
          document.getElementById('convertedAmount').textContent = `Converted Amount: ${convertedAmount} ${toCurrency}`;
      } else {
          document.getElementById('convertedAmount').textContent = 'Currency conversion rate not available.';
      }
  } catch (error) {
      document.getElementById('convertedAmount').textContent = 'Error fetching conversion rate.';
  }
}