var currentQuestions = 0

var questions = [
    {
        title: 'What is HTML',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Markup Language'
    },
    {
        title: 'What is CSS',
        options: ['Styling Language', 'Gora Language', 'Kala Language', 'None of the above'],
        correctAnswer: 'Styling Language'
    },
    {
        title: 'What is JS',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Programming Language'
    },
    {
        title: 'What is React',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Programming Language'
    }
]
var selectedoption ;
var score = 0
var percentage ;

function start(e) {

    var btn = e.target
    var container = document.getElementById('container')
    container.className = ""
    btn.className = "hide"
   
   renderQ()

}


function next() {

    var nameElements = document.getElementsByName('radio')
    for(var i = 0; i < nameElements.length; i++){
     if (nameElements[i].checked){
         selectedoption = nameElements[i].value
        
     }
 }
 if(selectedoption == questions[currentQuestions].correctAnswer){
    score +=20
 }
    currentQuestions++
    var container = document.getElementById('container')
    container.className = ""
    var title = document.getElementById('title')
    var optionsElement = document.getElementById('options')
    optionsElement.innerHTML = ''

    if (currentQuestions < questions.length) {
    renderQ()
    }
    else {
        container.className = 'hide'
        percentage = score * 100 / 80 
        var result = document.getElementById('result')
        result.innerHTML = 'Your Score = ' + percentage + '%'
    }
}

function restart() {
    currentQuestions = 0
    var container = document.getElementById('container')
    container.className = ""
    var title = document.getElementById('title')
    var btn = document.getElementById('start')
    btn.className = 'hide'

    title.innerHTML = questions[currentQuestions].title
}

function renderQ(){

    var title = document.getElementById('title')
    var optionsElement = document.getElementById('options')
    
    var options = questions[currentQuestions].options

    title.innerHTML = questions[currentQuestions].title
    for(var i = 0; i < options.length; i++){
        var inputElement = document.createElement('input')
        inputElement.type = 'radio'
        inputElement.name = 'radio'
        inputElement.value = options[i]
        optionsElement.append(inputElement)
        optionsElement.append(options[i])
    }
}














