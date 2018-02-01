class AddSlugToElectionAppsApp < ActiveRecord::Migration[5.1]
  def change
    add_column :election_apps_apps, :slug, :string
    add_index :election_apps_apps, :slug, unique: true
  end
end
