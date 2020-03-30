class RemoveSchoolClassFromTeacherApps < ActiveRecord::Migration[5.1]
  def change
    remove_column :teacher_apps, :school_class, :integer
  end
end
