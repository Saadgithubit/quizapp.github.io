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

function start(e){

    var btn = e.target
    var container = document.getElementById('container')
    container.className = ""
    btn.className = "hide"
    var title = document.getElementById('title')

    title.innerHTML = questions[currentQuestions].title 

    }

function next(){
    currentQuestions++
    var container = document.getElementById('container')
    container.className = ""
    var title = document.getElementById('title')

    title.innerHTML = questions[currentQuestions].title 
}












