class AddSchoolGradeToTeacherApps < ActiveRecord::Migration[5.1]
  def change
    add_column :teacher_apps, :school_grade, :int, array: true, default: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  end
end
