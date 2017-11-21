class CreateElectionProgramsParties < ActiveRecord::Migration[5.1]
  def change
    create_table :election_programs_parties do |t|
      t.string :name
    end
  end
end
