class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.text :text
      t.float :weight
      t.boolean :type

      t.timestamps
    end
  end
end
