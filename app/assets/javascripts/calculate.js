// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var calculateButtonListener = function () {
  var calculateButton = $('#calculate');

  calculateButton.on('click', function () {
    calculateButtonEvent();
  })
}

var calculateButtonEvent = function () {
  var questionsNode = $('#questions'),
      questions = questionsNode.children(),
      percentageNode = $('#percentage'),
      percentage = 0.10,
      blankQuestion = false,
      alertNode = $('#alert'),
      percentageMarkup;

  questions.each(function (index, questionForm) {
    var question = $(questionForm),
        questionWeight = question.children('#question-weight').html();
        responseWeights = [];
    
    question.find('input[name=response]:checked').each(function() {
      responseWeights.push($(this).val());
    });

    var length = responseWeights.length,
        i;   

    if (responseWeights.length == 0 && questionWeight != 1.0) {
      blankQuestion = true;
    } else {
      for (i = 0; i < length; i++) {
        percentage += (questionWeight * responseWeights[i]);
      }
    }
  })

  if (blankQuestion) {
    alertNode.css('display', 'inherit');
  } else {
    alertNode.css('display', 'none');
    percentageMarkup = (Math.round(percentage * 10000)) / 100 + '%';
    percentageNode.html(percentageMarkup);
  }
}

calculateButtonListener();