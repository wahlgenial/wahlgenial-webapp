class RemoveToolFromTeacherApps < ActiveRecord::Migration[5.1]
  def change
    remove_column :teacher_apps, :tool, :string
  end
end
