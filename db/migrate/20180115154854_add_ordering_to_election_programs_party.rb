class AddOrderingToElectionProgramsParty < ActiveRecord::Migration[5.1]
  def change
    add_column :election_programs_parties, :ordering, :integer
  end
end
