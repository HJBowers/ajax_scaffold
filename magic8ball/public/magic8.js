// write ajax code here

// "answer" is the id for an empty div in the html
const answer = document.getElementById('answer')

// question-form 
document.getElementById('question-form')
  .addEventListener('submit', (event) => {
    event.preventDefault()
    fetch('/magic8response')
    .then( response => {
      console.log("response ===> :", response)
      const responseText = response.text()
      console.log("responseText ===> :", responseText)
      return responseText
    })
    .then(prediction => {
      // Look up how "innerHTML" works2
      answer.innerHTML = prediction
      console.log("Prediction ===> ", prediction);
    })
  })
