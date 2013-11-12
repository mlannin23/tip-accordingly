class Question < ActiveRecord::Base
  validates :text, presence: true
  validates :weight, :numericality => true
  validates :format, presence: true
end
