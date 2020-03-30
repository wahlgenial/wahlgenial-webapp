class ChangeforSmartphone < ActiveRecord::Migration[5.1]
  def change
    rename_column :teacher_apps, :for_Smartphone, :for_smartphone
  end
end
