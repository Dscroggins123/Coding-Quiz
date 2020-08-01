// Javascript that will make this quiz functional will be stored here.//


var intro = document.getElementById("intro-page")
var quizContent = document.getElementById("quiz-div")
var quizQuestions = document.getElementById("quiz-questions")
var quizAnswers = document.getElementById("quiz-answers")
var startButton = document.getElementById("start-button")

var questions = [{q:"What is George's biggest insecurity?" , a:["money","baldness","his eyesight"]},
                { q: "What is Elaine's last name?" , a:["Bennis","Benes","Dennis", "Seinfeld"] },
                {q:"What word does every episode title of Seinfeld begin with", a: "what, who, the, that"},
                {q:"What law did the group get arrested for breaking during the final episodes?",a:["Good Person Law", "Good Samaritan Act","Help Act", " Care Law"]},
                {q:"What profession does George wish he was" , a:["Baseball coach", "Civil Engineer","Marine Biologist","Architect"]}  ,                                                                         
            ]
 var score = 0   

 startButton.addEventListener  ("click", function(event) {
     intro.textContent = "";
     

     for (var i =0; i < questions[0].a.length ; i++){
        //  for(var j = 0; j< questions[i].a.length; j++){
        //     console.log(questions[0])
        
        //  }
    
        
       var firstQuestion = questions[0].q
       var firstAnswers = questions[0].a[i]
       
       quizQuestions.textContent = firstQuestion
       
       var firstList = document.createElement("li")
       var answerButtons =document.createElement("button")
       answerButtons.textContent = firstAnswers
       answerButtons.setAttribute("data-choice", firstAnswers)
       quizAnswers.appendChild(firstList)
       firstList.appendChild(answerButtons)
            }
           
        
}) 
       
        
        
        
        
        




 
 



