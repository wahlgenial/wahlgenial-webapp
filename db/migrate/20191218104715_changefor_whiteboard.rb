class ChangeforWhiteboard < ActiveRecord::Migration[5.1]
  def change
    rename_column :teacher_apps, :for_Whiteboard, :for_whiteboard
  end
end
