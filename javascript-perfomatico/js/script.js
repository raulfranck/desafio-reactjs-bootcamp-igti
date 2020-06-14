const clickArray = [];

window.addEventListener('load', () => {
  const button = document.querySelector('#clickButton')

  button.addEventListener('click', handleButtonClick);
})

const item = getNewTimestamp();

function handleButtonClick() {

  clickArray.push(item);

  render(item);
}

function render() {
  const ul = document.querySelector('#data')

  const li = document.createElement('li');
  li.textContent = item;

  ul.appendChild(li);

  // ul.innerHTML = ''; // Faz a <ul> lá no html ficar vazia

  // let lis = '';

  // clickArray.map((item) => {
  //   lis += `<li>${item}</li>`
  // });

  // ul.innerHTML = lis;

  document.title = clickArray.length; // Mostra quantidade de click no título da página.
}
