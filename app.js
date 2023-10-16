var currentQuestions = 0
var questions;
// var questions = [
//     {
//         title: 'What is HTML',
//         options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
//         correctAnswer: 'Markup Language'
//     },
//     {
//         title: 'What is CSS',
//         options: ['Styling Language', 'Gora Language', 'Kala Language', 'None of the above'],
//         correctAnswer: 'Styling Language'
//     },
//     {
//         title: 'What is JS',
//         options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
//         correctAnswer: 'Programming Language'
//     },
//     {
//         title: 'What is React',
//         options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
//         correctAnswer: 'Programming Language'
//     }
// ]
var parent = document.getElementById('parent-div')
parent.className = 'hide'
getApi()

function getApi(){
    fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
    .then(res => res.json())
    .then(res => {
        questions = res.results
        
        var loader = document.getElementById('loader')
        loader.className = 'hide'
        parent.className = ''

        })
}

var score = 0
var percentage ;

function start() {
    console.log(questions)
    var btn = document.getElementById('start')
    var container = document.getElementById('container')
    container.className = ""
    btn.className = "hide"
   
   
   renderQ()
   timer()

}


function next() {

//     var nameElements = document.getElementsByName('radio')
//     for(var i = 0; i < nameElements.length; i++){
//      if (nameElements[i].checked){
//        var selectedoption = nameElements[i].value
//     if(selectedoption == questions[currentQuestions].correctAnswer){
//         score +=20
        
//      }
//  }
//  }
sec = 30
checkedScore()
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
        percentage = score / questions.length * 100 
        var result = document.getElementById('result')
        var restartBtn = document.getElementById('restart')
        restartBtn.className = ''
        var timer = document.getElementById('timer')
        timer.innerHTML = ''
        timer.className = ''
        clearInterval(interval)
        if(percentage > 70){
            result.innerHTML = 'Congratulations Your Are Passed ' + percentage + '%'
           
        }
        else{
            result.innerHTML = 'Sorry You Are Fail ' + percentage + '%'
            
        }
    }
}

function checkedScore(){
     var inputElements = document.getElementsByTagName('input')

     for(var i = 0; i < inputElements.length; i++){
        var selectedoption;
        if(inputElements[i].checked){
            selectedoption = inputElements[i].value
            if(selectedoption == questions[currentQuestions].correct_answer){
                score ++
            }
        }
     }
}

function restart() {
    currentQuestions = 0
    score = 0
    sec = 30
    var optionsElement = document.getElementById('options')
    optionsElement.innerHTML = ''
    var result = document.getElementById('result')
    result.innerHTML = ''
    var restartBtn = document.getElementById('restart')
    restartBtn.className = 'hide'
    start()
}

function renderQ(){
    console.log(questions[currentQuestions])
    var title = document.getElementById('title')
    title.innerHTML = questions[currentQuestions].question
    var optionsElement = document.getElementById('options')
    var options = questions[currentQuestions].incorrect_answers
    options.push(questions[currentQuestions].correct_answer)
    options = shuffle(options)
    for(var i = 0; i < options.length; i++){
        var lineBreak = document.createElement('br')
        var inputElement = document.createElement('input')
        inputElement.type = 'radio'
        inputElement.name = 'radio'
        inputElement.value = options[i]
        optionsElement.append(inputElement)
        optionsElement.append(options[i])
        optionsElement.append(lineBreak)

    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
var min = 0
var sec = 30
var interval;


function timer(){
   
var timer = document.getElementById('timer')
      
       interval = setInterval(function(){
        timer.innerHTML = min + ' : ' + sec
        sec--
        if(sec < 0){
            next()            
            sec = 30
        }
      } , 1000)
    }














