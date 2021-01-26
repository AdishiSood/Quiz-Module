var questions=[{
    "question":" A complete graph can have",
    "option1":"n^2 spanning trees",
    "option2":"n^(n-2) spanning trees",
    "option3":"n^(n+1) spanning trees",
    "option4":"n^n spanning trees",
    "answer":"2"
},
    {
        "question":"What is the full form of CSS?",
        "option1":"HTML",
        "option2":"Javascript",
        "option3":"Java",
        "option4":"None of these",
        "answer":"4"
    },
    {
        "question":"How to include Javascript in HTML documents ?",
        "option1":"meta",
        "option2":"script",
        "option3":"head",
        "option4":"src",
        "answer":"2"
    },
    {
        "question":"How to declare variable in Javascript?",
        "option1":"integer n;",
        "option2":"Integer n;",
        "option3":"int n;",
        "option4":"var n;",
        "answer":"4"
    },
    {
        "question":"What => means in javascript?",
        "option1":"Equal to",
        "option2":"Arrow function",
        "option3":"Function",
        "option4":"None of these",
        "answer":"2"
    },
    {
        "question":" Which of the following is not a javascript framework ?",
        "option1":"Jquery",
        "option2":"Polymer",
        "option3":"Django",
        "option4":"Meteor",
        "answer":"3"
    },
    {
        "question":"How do you define objects in Javascript?",
        "option1":"()",
        "option2":"{}",
        "option3":"[]",
        "option4":".",
        "answer":"2"
    },
    {
        "question":" What is the output of '2'+ 2 ? ",
        "option1":"0",
        "option2":"-2",
        "option3":"22",
        "option4":"4",
        "answer":"3"
    },
    {
        "question":"What is the output of '2'-1 ?",
        "option1":"21",
        "option2":"1",
        "option3":"-1",
        "option4":"12",
        "answer":"2"
    },
    {
        "question":"What is these is not a valid Javascript version?",
        "option1":"ES5",
        "option2":"ES6",
        "option3":"ES1",
        "option4":"EX19",
        "answer":"4"
    }
]
var currentQuestion=0;
var totalQues=questions.length;
var submitButton= document.getElementById("next-btn")
var score=0;
var container=document.getElementById("question-container");
var ques=document.getElementById("question");
var opt1=document.getElementById("op1");
var opt2=document.getElementById("op2");
var opt3=document.getElementById("op3");
var opt4=document.getElementById("op4");
function startGame()
{
    var submitButton= document.getElementById("next-btn")
    var startButton = document.getElementById("start-btn")
    var questionContainerElement = document.getElementById("question-container")
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    submitButton.classList.remove('hide');
    loadQuestion(currentQuestion);

}
function loadQuestion(questionIndex)
{
    var ques=document.getElementById("question");
    var opt1=document.getElementById("op1");
    var opt2=document.getElementById("op2");
    var opt3=document.getElementById("op3");
    var opt4=document.getElementById("op4");
    var q=questions[questionIndex];
    ques.innerHTML=(questionIndex+1)+"."+q.question;
    opt1.textContent=q.option1;
    opt2.textContent=q.option2;
    opt3.textContent=q.option3;
    opt4.textContent=q.option4;


}
function loadNextQuestion()
{
    var submitButton= document.getElementById("next-btn");
    submitButton.style.display='block';
    var nextButton= document.getElementById("next");
    nextButton.style.display='none';
    var cBtn=document.getElementById("correctOrNot");
    cBtn.style.display='none';
    var selectOpt=document.querySelector('input[type=radio]:checked')
    selectOpt.checked=false;
    ++currentQuestion;
    if(currentQuestion==totalQues-1)
    {
        nextButton.innerHTML='Finish';
    }
    if(currentQuestion==totalQues)
    {

        showScore();
        return;
    }
    loadQuestion(currentQuestion);
}


function showCorrect()
{
    var submitButton= document.getElementById("next-btn");
    var selectOpt=document.querySelector('input[type=radio]:checked')
    if(!selectOpt)
    {
        alert("Please select your answer!")
        return;
    }
    var ans=selectOpt.value;
    submitButton.style.display='none';
    var nextButton= document.getElementById("next");
    nextButton.style.display='block';
    var cBtn=document.getElementById("correctOrNot");
    cBtn.innerHTML="Correct";
    if(questions[currentQuestion].answer===ans)
    {
        score+=1;
        var cBtn=document.getElementById("correctOrNot");
        cBtn.style.backgroundColor='rgb(173, 255, 47)';
        cBtn.style.color='rgb(0,0,0)';
        cBtn.style.display='block';
        nextButton.addEventListener('click',loadNextQuestion);
    }
    else
    {
        showInCorrect();
        nextButton.addEventListener('click',loadNextQuestion);
    }


}
function showInCorrect()
{
    var cBtn=document.getElementById("correctOrNot");
    cBtn.innerHTML="Incorrect";
    cBtn.style.backgroundColor='rgb(255, 77, 77)';
    cBtn.style.color='rgb(153, 0, 0)';
    cBtn.style.display='block';
}
function showScore()
{
    var container=document.getElementById("question-container");
    container.innerHTML='';
    var heading=document.getElementById("head");
    var resultContainer=document.getElementById("result");
    var next=document.getElementById("next-btn");
    next.style.display='none';
    container.style.display='none';
    heading.innerHTML="QUIZ RESULTS";
    resultContainer.style.display='block';
    resultContainer.innerHTML="<b>Your Score "+score+"<br><br></b>"+
        "1) A complete graph can have : n^(n-2) spanning trees"+"<br><br>"+
        "2) What is the full form of CSS? : none of these"+"<br><br>"+
        "3) How to include Javascript in HTML documents ? : script"+"<br><br>"+
        "4) How to declare variable in Javascript?: var n;"+"<br><br>"+
        "5) What => means in javascript? : Arrow function"+"<br><br>"+
        "6) Which of the following is not a javascript framework ? : Django"+"<br><br>"+
        "7) How do you define objects in Javascript? :  {}"+"<br><br>"+
        "8) What is the output of '2'+ 2 ? : 22"+"<br><br>"+
        "9) What is the output of '2'- 1 ? : 1"+"<br><br>"+
        "10) What is these is not a valid Javascript version? : EX19";
    var re=document.getElementById("re-btn");
    re.style.display='block';
    re.addEventListener('click',function(){
        window.location.reload();
    })

}
