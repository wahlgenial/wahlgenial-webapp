class AddPublishedToTeacherApps < ActiveRecord::Migration[5.1]
  def change
    add_column :teacher_apps, :published, :boolean, null: false, default: false
  end
end
