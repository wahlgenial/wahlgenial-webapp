class CreateElectionProgramsTopics < ActiveRecord::Migration[5.1]
  def change
    create_table :election_programs_topics do |t|
      t.string :title
      t.text :details
      t.integer :part_id

      t.timestamps
    end
  end
end
