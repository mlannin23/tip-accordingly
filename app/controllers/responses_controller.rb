class ResponsesController < ApplicationController

  def create
    @question = Question.find(params[:question_id])
    @response = @question.responses.create(params[:response].permit(:text, :weight))
    redirect_to question_path(@question)
  end
  
end
