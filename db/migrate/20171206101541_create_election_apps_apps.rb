class CreateElectionAppsApps < ActiveRecord::Migration[5.1]
  def change
    create_table :election_apps_apps do |t|
      t.string :name
      t.text :description
      t.string :image
      t.integer :category_id

      t.timestamps
    end
  end
end
