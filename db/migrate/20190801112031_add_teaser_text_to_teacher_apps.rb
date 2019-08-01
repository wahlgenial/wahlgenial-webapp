class AddTeaserTextToTeacherApps < ActiveRecord::Migration[5.1]
  def change
    add_column :teacher_apps, :teaser_text, :text
  end
end
