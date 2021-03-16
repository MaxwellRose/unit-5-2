document.getElementById('button1').addEventListener("click", myFunction)

function myFunction () {
  document.getElementById('button1').innerHTML = 'Good Job'
} /*this makes the text change*/

document.getElementById('button2').addEventListener('click', myFunction1)

function myFunction1 () {
  document.getElementById('button2').style.visibility = 'hidden'
} /*this makes the button disappear*/

document.getElementById('button3').addEventListener('click', myFunction2)

function myFunction2 () {
  document.getElementById('button3').style.background = 'red'
}
