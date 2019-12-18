class AddForGrundschuleToTeacherApps < ActiveRecord::Migration[5.1]
  def change
    add_column :teacher_apps, :for_grundschule, :boolean
  end
end
