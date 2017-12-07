class AddLogoAndLinkToElectionAppsApps < ActiveRecord::Migration[5.1]
  def change
    add_column :election_apps_apps, :logo, :string
    add_column :election_apps_apps, :link, :string
  end
end
