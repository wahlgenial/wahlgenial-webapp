class CreateElectionAppsCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :election_apps_categories do |t|
      t.string :title
      t.text :description
      t.string :icon_name

      t.timestamps
    end
  end
end
