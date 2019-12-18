class ChangeforTablet < ActiveRecord::Migration[5.1]
  def change
    rename_column :teacher_apps, :for_Tablet, :for_tablet
  end
end
