class CreateElectionProgramsQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :election_programs_questions do |t|
      t.text :text
      t.integer :topic_id

      t.timestamps
    end
  end
end
