// Javascript that will make this quiz functional will be stored here.//


var intro = document.getElementById("intro-page")
var quizContent = document.getElementById("quiz-div")
var quizQuestions = document.getElementById("quiz-questions")
var quizAnswers = document.getElementById("quiz-answers")
var startButton = document.getElementById("start-button")
var checker = document.getElementById("checker")

var questions = [{q:"What is George's biggest insecurity?" , a:["money","baldness","Eyesight","Weight"], c:"baldness"},
                { q: "What is Elaine's last name?" , a:["Bennis","Benes","Dennis", "Seinfeld"], c:"Benes" },
                {q:"What word does every episode title of Seinfeld begin with", a: "what, who, the, that", c: "the"},
                {q:"What law did the group get arrested for breaking during the final episodes?",a:["Good Person Law", "Good Samaritan Act","Help Act", " Care Law"], c: "Good Samaritan Act"},
                {q:"What profession does George wish he was" , a:["Baseball coach", "Civil Engineer","Marine Biologist","Architect"],c: "Architect"}  ,                                                                         
            ]
 var score = 0   

 startButton.addEventListener  ("click", beginQuiz )
 
    function beginQuiz() {
     intro.textContent = "";
     for (var i =0; i < questions[i].a.length ; i++){

     
        
         
    
        
       var firstQuestion = questions[0].q
       var firstAnswers = questions[0].a[i]
       console.log(firstAnswers)
    //    firstQuestion.firstAnswers.forEach(function(choice,i) {
           
           quizQuestions.textContent = firstQuestion
           
           var list = document.createElement("li")
           var answerButtons =document.createElement("button")
           answerButtons.textContent = firstAnswers;
           answerButtons.setAttribute("data-choice", firstAnswers)
           quizAnswers.appendChild(list)
           list.appendChild(answerButtons)
           
           answerButtons.addEventListener ("click",nextQuestion )
        } 
    }
   
        
           
  function nextQuestion(){
    quizAnswers.textContent = ""
    for (var j =0; j < questions[j].a.length ; j++){
                    var secondQuestion = questions[1].q
                    var secondAnswers = questions[1].a[j]
                    quizQuestions.textContent = secondQuestion;
                    
                    var list = document.createElement("li")
                    var answerButtons =document.createElement("button")
                    answerButtons.textContent = secondAnswers ;
                    answerButtons.setAttribute("key", secondAnswers)
                    list.appendChild(answerButtons)
                    console.log(answerButtons)
                    quizAnswers.appendChild(list)
        //    var answerButtons =document.createElement("button")
        //    answerButtons.textContent = secondAnswers;
        //    answerButtons.setAttribute("data-choice", secondAnswers)
        //    quizAnswers.appendChild(list)
           
                  }  
                 }  
     
     
     
                
        
      
        
        
        




 
 



