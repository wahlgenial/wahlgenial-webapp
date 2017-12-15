class CreateBundestagVotePoliticalAgreements < ActiveRecord::Migration[5.1]
  def change
    create_table :bundestag_vote_political_agreements do |t|
      t.string :title
      t.string :image
      t.integer :votes_total
      t.integer :votes_yes
      t.integer :votes_no
      t.integer :votes_abstentions
      t.integer :votes_unset
      t.integer :votes_unvalid

      t.timestamps
    end
  end
end
