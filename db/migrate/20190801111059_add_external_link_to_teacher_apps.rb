class AddExternalLinkToTeacherApps < ActiveRecord::Migration[5.1]
  def change
    add_column :teacher_apps, :external_link, :string
  end
end
