class ChangeTypeFormat < ActiveRecord::Migration
  def change
    change_column :questions, :type, :text
  end
end
