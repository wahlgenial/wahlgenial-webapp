class AddOrderingToElectionAppsCategory < ActiveRecord::Migration[5.1]
  def change
    add_column :election_apps_categories, :ordering, :integer, default: 0
  end
end
