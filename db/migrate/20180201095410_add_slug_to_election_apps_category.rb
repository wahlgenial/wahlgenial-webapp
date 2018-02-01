class AddSlugToElectionAppsCategory < ActiveRecord::Migration[5.1]
  def change
    add_column :election_apps_categories, :slug, :string
    add_index :election_apps_categories, :slug, unique: true
  end
end
