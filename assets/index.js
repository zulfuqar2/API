


const leftButtons = document.querySelector(".btn-left").children;
const rightButtons = document.querySelector(".btn-right").children;


function buttonChanger(btns) {
  for (let btn of btns) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      for (let btn of btns) {
        btn.classList.remove("active-button");
      }

      e.target.classList.add("active-button");

      
      fetchExchangeRate();
    });
  }
}

buttonChanger(leftButtons);
buttonChanger(rightButtons);

function fetchExchangeRate() {
  const fromCurrency = document.querySelector(".btn-left .active-button").textContent;
  const toCurrency = document.querySelector(".btn-right .active-button").textContent;

  fetch(`https://api.exchangerate.host/latest?base=${fromCurrency}&symbols=${toCurrency}`)
    .then(response => response.json())
    .then(data => {
      const exchangeRate = data.rates[toCurrency];
      const leftInput = document.querySelector(".left input");
      const rightInput = document.querySelector(".right input");

      
      const leftText = `1 ${fromCurrency} = ${exchangeRate} ${toCurrency}`;
      const leftParagraph = document.querySelector(".l_input");
      leftParagraph.textContent = leftText;

     
      const leftInputValue = leftInput.value;
      const rightInputValue = (leftInputValue * exchangeRate).toFixed(2);
      rightInput.value = rightInputValue;
      const rightText = `1 ${toCurrency} = ${(1 / exchangeRate).toFixed(4)} ${fromCurrency}`;
      const rightParagraph = document.querySelector(".r_input");
      rightParagraph.textContent = rightText;
    });
}

window.onload = () => {
  buttonChanger(leftButtons);
  buttonChanger(rightButtons);
  fetchExchangeRate();
};
