// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

YUI().use('node', 'event', function (Y) {

  var calculateButtonListener = function () {
    var calculateButton = Y.one('#calculate');

    calculateButton.on('click', function () {
      calculateButtonEvent();
    })
  }

  var calculateButtonEvent = function () {
    var questionsNode = Y.one('#questions'),
        questions = questionsNode.all('#question'),
        percentageNode = Y.one('#percentage'),
        percentage = 0.10,
        blankQuestion = false,
        alertNode = Y.one('#alert'),
        percentageMarkup;

    questions.each(function (question) {
      var questionWeight = question.one('#question-weight').get('innerHTML'),
          responseWeights = question.all('input[name=response]:checked').get('value'),
          length = responseWeights.length,
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
      alertNode.setStyle('display', 'inherit');
    } else {
      alertNode.setStyle('display', 'none');
      percentageMarkup = (Math.round(percentage * 10000)) / 100 + '%';
      percentageNode.setHTML(percentageMarkup);
    }
  }

  calculateButtonListener();

});