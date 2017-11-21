class CreateElectionProgramsOpinions < ActiveRecord::Migration[5.1]
  def change
    create_table :election_programs_opinions do |t|
      t.integer :question_id
      t.integer :party_id
      t.integer :opinion
    end
  end
end
