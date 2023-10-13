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

var score = 0
var percentage ;

function start() {

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
            if(selectedoption == questions[currentQuestions].correctAnswer){
                score ++
            }
        }
     }
}

function restart() {
    currentQuestions = 0
    score = 0
    var optionsElement = document.getElementById('options')
    optionsElement.innerHTML = ''
    var result = document.getElementById('result')
    result.innerHTML = ''
    var restartBtn = document.getElementById('restart')
    restartBtn.className = 'hide'
    sec = 30
    start()
}

function renderQ(){

    var title = document.getElementById('title')
    var optionsElement = document.getElementById('options')
    var options = questions[currentQuestions].options
    
    title.innerHTML = questions[currentQuestions].title
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
var min = 0
var sec = 30
function timer(){
   
      var timer = document.getElementById('timer')
      var interval = setInterval(function(){
        timer.innerHTML = min + ' : ' + sec
        sec--
        if(sec < 0){
            next()            
            sec = 30
        }
      } , 1000)
    }














