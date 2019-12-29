let currentIndex = 0;
let currentScore = 0;
let questionTracker = 1;
//this will switch over from main html to quiz html
function startQuiz() {
  $(".start-button").on("click", function(event) {
    $("main").html(getCurrentQandA());
    bindButtons();
    $("#button-next-question").hide();
    $("#button-finish").hide();
  });
}

function bindButtons() {
  $("#button-submit-answer").on("click", function(event) {
    event.preventDefault();
    submitAnswer();
    endquiz();
  });
  $("#button-next-question").on("click", function(event) {
    event.preventDefault();
    currentIndex++;
    $("main").html(getCurrentQandA());
    bindButtons();
    $("#button-next-question").hide();
    $("#button-finish").hide();
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
                <button type="submit" id="button-finish">Finish</button>
           </section>
           <section class="feedback-correct ">correct!</section>
           <section class="feedback-incorrect ">oops! the answer is ${questionArray[currentIndex].answer}</section>
           
           <section class="score-display">question ${questionTracker} of 6 | score: ${currentScore} correct answers </section>
           </form>`;
  return nextQuestion;
}

function submitAnswer() {
  let selectedAnswer = $("input[name=options]:checked").val();

  updateStats();
  $("#button-next-question").show();

  checkUserAnswer(selectedAnswer);
}

function checkUserAnswer(selectedAnswer) {
  if (selectedAnswer == questionArray[currentIndex].answer) {
    $(".feedback-correct").show();
    currentScore++;
  } else {
    $(".feedback-incorrect").show();
  }
}

//update score info and question number
function updateStats() {
  questionTracker++;
}

//load summary page
function getSummaryPage() {
  let endPage = `<section class="end-page">
  <p>You did great! Press Reset button to try again.</p>
  <section class="score-display"> ${currentScore}/6 correct!</section>

  <button type="submit" class="button-reset-quiz">Reset</button>
</section>
`;
  return endPage;
}

function endquiz() {
  if (questionArray == questionArray.length) {
    $("#button-submit-answer").on("click", function(event) {
      event.preventDefault();
      submitAnswer();
      //endquiz();
      $("#button-next-question").hide();
      $("#button-finish").show();
    });
  }
}
endquiz();
//returns to start page with blank stats
function reloadStartPage() {}

function doQuiz() {
  startQuiz();
  //endquiz();
}

$(doQuiz);
