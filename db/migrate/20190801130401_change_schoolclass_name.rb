class ChangeSchoolclassName < ActiveRecord::Migration[5.1]
  def change
    rename_column :teacher_apps, :schoolclass, :school_class
  end
end
