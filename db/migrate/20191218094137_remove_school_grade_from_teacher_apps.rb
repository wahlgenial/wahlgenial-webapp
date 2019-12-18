class RemoveSchoolGradeFromTeacherApps < ActiveRecord::Migration[5.1]
  def change
    remove_column :teacher_apps, :school_grade, :integer 
  end
end
