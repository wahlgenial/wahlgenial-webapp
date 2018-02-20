class AddFeaturedToElectionAppsApp < ActiveRecord::Migration[5.1]
  def change
    add_column :election_apps_apps, :featured, :boolean, default: false
  end
end
