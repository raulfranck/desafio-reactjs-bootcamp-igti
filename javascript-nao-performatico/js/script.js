const clickArray = [];

window.addEventListener('load', () => {
  const button = document.querySelector('#clickButton')

  button.addEventListener('click', handleButtonClick);
})


function handleButtonClick() {
  clickArray.push(getNewTimestamp());

  render()
}

function render() {
  const ul = document.querySelector('#data')
  ul.innerHTML = ''; // Faz a <ul> lá no html ficar vazia

  let lis = '';

  clickArray.map((item) => {
    lis += `<li>${item}</li>`
  });

  ul.innerHTML = lis;

  document.title = clickArray.length; // Mostra quantidade de click no título da página.
}
