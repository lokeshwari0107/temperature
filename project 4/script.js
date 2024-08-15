const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

const convert = () => {
  const celsiusValue = parseFloat(celsiusInput.value);
  const fahrenheitValue = parseFloat(fahrenheitInput.value);
  const kelvinValue = parseFloat(kelvinInput.value);

  if (!isNaN(celsiusValue)) {
    fahrenheitInput.value = (celsiusValue * 9/5) + 32;
    kelvinInput.value = celsiusValue + 273.15;
  } else if (!isNaN(fahrenheitValue)) {
    celsiusInput.value = (fahrenheitValue - 32) * 5/9;
    kelvinInput.value = (fahrenheitValue - 32) * 5/9 + 273.15;
  } else if (!isNaN(kelvinValue)) {
    celsiusInput.value = kelvinValue - 273.15;
    fahrenheitInput.value = (kelvinValue - 273.15) * 9/5 + 32;
  }
};

celsiusInput.addEventListener('input', convert);
fahrenheitInput.addEventListener('input', convert);
kelvinInput.addEventListener('input', convert);
