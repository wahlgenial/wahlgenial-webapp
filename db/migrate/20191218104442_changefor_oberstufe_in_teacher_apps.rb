class ChangeforOberstufeInTeacherApps < ActiveRecord::Migration[5.1]
  def change
    rename_column :teacher_apps, :for_Oberstufe, :for_oberstufe
  end
end
