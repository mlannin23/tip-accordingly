class Question < ActiveRecord::Base
  has_many :responses
  
  validates :text, presence: true
  validates :weight, :numericality => true
  validates :format, presence: true
end
