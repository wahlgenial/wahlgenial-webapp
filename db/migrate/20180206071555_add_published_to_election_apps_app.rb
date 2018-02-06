class AddPublishedToElectionAppsApp < ActiveRecord::Migration[5.1]
  def change
    add_column :election_apps_apps, :published, :boolean, null: false, default: false
  end
end
