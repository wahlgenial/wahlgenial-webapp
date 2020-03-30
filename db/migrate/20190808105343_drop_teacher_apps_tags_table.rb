class DropTeacherAppsTagsTable < ActiveRecord::Migration[5.1]
  def up
    drop_table :teacher_apps_tags, if_exists: true
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
