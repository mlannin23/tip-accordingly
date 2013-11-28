class CalculateController < ApplicationController
  def index
    @questions = Question.all
  end
end
