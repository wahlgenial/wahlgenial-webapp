class AddOrderingToElectionProgramsParty < ActiveRecord::Migration[5.1]
  def change
    add_column :election_programs_parties, :ordering, :integer, default: 0
  end
end
