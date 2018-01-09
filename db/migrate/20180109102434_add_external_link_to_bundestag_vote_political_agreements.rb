class AddExternalLinkToBundestagVotePoliticalAgreements < ActiveRecord::Migration[5.1]
  def change
    add_column :bundestag_vote_political_agreements, :external_link, :string
  end
end
