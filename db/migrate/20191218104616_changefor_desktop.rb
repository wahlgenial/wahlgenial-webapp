class ChangeforDesktop < ActiveRecord::Migration[5.1]
  def change
    rename_column :teacher_apps, :for_Desktop, :for_desktop
  end
end
