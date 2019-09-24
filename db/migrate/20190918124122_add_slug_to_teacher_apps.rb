class AddSlugToTeacherApps < ActiveRecord::Migration[5.1]
  def change
    add_column :teacher_apps, :slug, :string
  end
end
