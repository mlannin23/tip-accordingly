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
        percentage = 0.10,
        blankQuestion = false,
        toDisplay;

    questions.each(function (question) {
      var questionWeight = question.one('#question-weight').get('innerHTML'),
          responseWeights = question.all('input[name=response]:checked').get('value'),
          length = responseWeights.length,
          i;

      if (responseWeights.length == 0 && questionWeight != 1.0) {
        toDisplay = 'A question was not answered';
        blankQuestion = true;
      } else {
        for (i = 0; i < length; i++) {
          percentage += (questionWeight * responseWeights[i]);
        }
      }
    })

    if (!blankQuestion) {
      toDisplay = percentage;
    }
  }

  calculateButtonListener();

});