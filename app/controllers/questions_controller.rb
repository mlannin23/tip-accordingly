class QuestionsController < ApplicationController
  
  http_basic_authenticate_with name: ENV['NAME'], password: ENV['PASSWORD']

  def index
    @questions = Question.all
  end

  def create
    parameters = question_params
    parameters[:weight] = parameters[:weight].to_f

    @question = Question.new(parameters)
    if @question.save
      redirect_to @question
    else
      render 'new'
    end
  end

  def new
    @question = Question.new
  end

  def edit
    @question = Question.find(params[:id])
  end

  def show
    @question = Question.find(params[:id])
  end

  def update
    @question = Question.find(params[:id])

    if @question.update(params[:question].permit(:text, :weight, :format))
      redirect_to @question
    else
      render 'edit'
    end
  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy

    redirect_to questions_path
  end
  
  private
    def question_params
      params.require(:question).permit(:text, :weight, :format)
    end
end
