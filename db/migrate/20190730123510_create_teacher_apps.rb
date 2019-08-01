class CreateTeacherApps < ActiveRecord::Migration[5.1]
  def change
    create_table :teacher_apps do |t|
      t.string :title
      t.text :description
      t.integer :schoolclass
      t.string :tool

      t.timestamps
    end
  end
end
