let currentIndex = 0;
let currentScore = 0;
let questionTracker = 0;
//this will switch over from main html to quiz html
function startQuiz() {
  $(".start-button").on("click", function(event) {
    $("main").html(getCurrentQandA());
    bindButtons();
  });
}

function bindButtons() {
  $("#button-submit-answer").on("click", function(event) {
    event.preventDefault();
    submitAnswer();
  });
  $("#button-next-question").on("click", function(event) {
    event.preventDefault();
    currentIndex++;
    $("main").html(getCurrentQandA());
    bindButtons();
  });
}

//display current question and options
function getCurrentQandA() {
  let nextQuestion = `
  <form class ="quiz-form" id="qform">
            <fieldset>
                <legend class="question">${questionArray[currentIndex].question}</legend><br/>
            
                <input type="radio" name="options" class="radio-b" id="option1" value="${questionArray[currentIndex].options[0]}" >
                <label for="option1">${questionArray[currentIndex].options[0]}</label><br/>

                <input type="radio" name="options" class="radio-b" id="option2" value="${questionArray[currentIndex].options[1]}" >
                <label for="option2">${questionArray[currentIndex].options[1]}</label><br/>

                <input type="radio" name="options" class="radio-b" id="option3" value="${questionArray[currentIndex].options[2]}">
                <label for="option3">${questionArray[currentIndex].options[2]}</label><br/>

                <input type="radio" name="options" class="radio-b" id="option4" value="${questionArray[currentIndex].options[3]}" >
                <label for="option4">${questionArray[currentIndex].options[3]}</label><br/>
                
             </fieldset>
  
    <section class="control-buttons">
                <button type="submit" id="button-submit-answer">Submit</button>
                <button type="submit" id="button-next-question">Next Question</button>
           </section>
           <section class="feedback-correct ">correct</section>
           <section class="feedback-incorrect ">incorrect</section>
           
           <section class="score-display">question ${questionTracker} | score ${currentScore}</section>
           </form>`;
  return nextQuestion;
}

function submitAnswer() {
  // use event.which and then val for radio options?
  let selectedAnswer = $("input[name=options]:checked").val();
  checkUserAnswer(selectedAnswer);
  updateStats();
  giveFeedback();
}
// selectedAnswer value is a string, look at boolean stuff and if statements
function checkUserAnswer(selectedAnswer) {
  if (selectedAnswer == questionArray[currentIndex].answer) {
    $(".feedback-correct").show();
  } else {
    $(".feedback-incorrect").show();
  }
}

//when or if user submits a right answer
function userSelectsRightAnswer() {
  //console.log("`userSelectsRightAnswer` ran");
}
userSelectsRightAnswer();

//when user submits wrong answer
function userSelectsWrongAnswer() {}

//tells user whether right or wrong
function giveFeedback() {}

//update score info and question number
function updateStats() {}

//load summary page
function getSummaryPage() {}

//returns to start page with blank stats
function reloadStartPage() {}

function doQuiz() {
  startQuiz();
  //submitAnswer();
}

$(doQuiz);
