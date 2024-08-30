// save html elemnts
const inputAmount = document.querySelector("#inputAmount");
const btnSwich = document.querySelector("#btnSwich");
const btnConvert = document.querySelector("#btnConvert");
const result = document.querySelector("#result");

// swich the countries
btnSwich.addEventListener("click", () => {
  let temp = inputFrom.value;
  inputFrom.value = inputTo.value;
  inputTo.value = temp;
});

// when i click the result will be shown
btnConvert.addEventListener("click", () => {
  let from = inputFrom.value;
  let to = inputTo.value;
  let amount = inputAmount.value;

  if (!isNaN(amount)) {
    amount == "" && (amount = 1);

    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
      .then((res) => res.json())
      .then((data) => {
        let rate = data.rates[to];
        result.innerText = `${amount} ${from} = ${amount * rate} ${to}`;
      });
  }else {
    result.innerText = "Please Enter Valid Amount";
  }
});
