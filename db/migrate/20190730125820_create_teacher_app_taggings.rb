class CreateTeacherAppTaggings < ActiveRecord::Migration[5.1]
  def change
    create_table :teacher_app_taggings do |t|
      t.belongs_to :teacher_app_tag, foreign_key: true
      t.belongs_to :teacher_app, foreign_key: true

      t.timestamps
    end
  end
end
