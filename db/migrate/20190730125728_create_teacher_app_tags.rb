class CreateTeacherAppTags < ActiveRecord::Migration[5.1]
  def change
    create_table :teacher_app_tags do |t|
      t.string :name

      t.timestamps
    end
  end
end
