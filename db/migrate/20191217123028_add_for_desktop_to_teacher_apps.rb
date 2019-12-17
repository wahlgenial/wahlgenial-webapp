class AddForDesktopToTeacherApps < ActiveRecord::Migration[5.1]
  def change
    add_column :teacher_apps, :for_Desktop, :boolean
  end
end
