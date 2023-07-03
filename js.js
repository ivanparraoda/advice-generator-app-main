const data = document.getElementById('result');
const btn1 = document.getElementById('getData');
const num = document.getElementById('num');

btn1.addEventListener('click', () => {
  ad();
});

window.onload = () => {
  ad();
};

function ad() {
  fetch(' https://api.adviceslip.com/advice')
    .then((response) => {
      return response.json();
    })
    .then((dataAd) => {
      const obj = dataAd.slip;
      data.innerHTML = `<p>"${obj.advice}"</p>`;
      num.innerHTML = `<p>#ADVICE ${obj.id}</p>`;
    })
    .catch((error) => {
      console.log(error);
    });
}
