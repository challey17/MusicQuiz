"use strict";
//load quiz when user clicks start btn
function testFunction() {
  console.log("hello world");
}
testFunction();
function startQuiz() {
  console.log("`startQuiz` ran");
}
startQuiz();
//display current question and options
$("main").html(getCurrentQandA());
let currentIndex = 0;
function getCurrentQandA() {
  let nextQuestion = `
  <form class ="quiz-form>
            <fieldset>
                <legend class="question">${questionArray[currentIndex].question}</legend>
            
                <input type="radio" name="options"id="option1" >
                <label for="option1">${questionArray[currentIndex].options[0]}</label><br/>

                <input type="radio" name="options"id="option2" >
                <label for="option2">${questionArray[currentIndex].options[1]}</label><br/>

                <input type="radio" name="options"id="option3" >
                <label for="option3">${questionArray[currentIndex].options[2]}</label><br/>

                <input type="radio" name="options"id="option4" >
                <label for="option4">${questionArray[currentIndex].options[3]}</label><br/>
                
             </fieldset>
    </form>`;

  return nextQuestion;
}
function doQuiz() {
  startQuiz();
  getCurrentQandA();
}

$(doQuiz);
