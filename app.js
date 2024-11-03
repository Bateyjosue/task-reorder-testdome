const buttons = document.querySelectorAll("button");
const buttonsLength = buttons.length;
const btnArray = Array.from(buttons);

const screen = document.querySelector('#screen')

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
      if (e.target.getAttribute('class') === 'upButton') {
        const currentText = e.target.parentElement.firstElementChild.innerText
        const prevText = e.target.parentElement.previousElementSibling.firstElementChild.innerText

        e.target.parentElement.firstElementChild.innerText = prevText
        e.target.parentElement.previousElementSibling.firstElementChild.innerText = currentText
      }
      if (e.target.getAttribute('class') === 'downButton') {
        const currentText = e.target.parentElement.firstElementChild.innerText
        const nextText = e.target.parentElement.nextElementSibling.firstElementChild.innerText

        e.target.previousElementSibling.innerText = nextText
        e.target.parentElement.nextElementSibling.firstElementChild.innerText = currentText;
      }

  });
});

