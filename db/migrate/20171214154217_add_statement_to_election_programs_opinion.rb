class AddStatementToElectionProgramsOpinion < ActiveRecord::Migration[5.1]
  def change
    add_column :election_programs_opinions, :statement, :text
  end
end
