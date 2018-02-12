class ChangeImageNameInElectionAppsApp < ActiveRecord::Migration[5.1]
  def change
    rename_column :election_apps_apps, :image, :screenshot
  end
end
