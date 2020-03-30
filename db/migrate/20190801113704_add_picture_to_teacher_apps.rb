class AddPictureToTeacherApps < ActiveRecord::Migration[5.1]
  def change
    add_column :teacher_apps, :picture, :string
  end
end
