class RemoveTeacherAppsIdFromTeacherApps < ActiveRecord::Migration[5.1]
  def change
    remove_column :teacher_apps, :teacher_apps_id, :integer
  end
end
