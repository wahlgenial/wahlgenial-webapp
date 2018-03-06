class AddVideoToGlossaryTerm < ActiveRecord::Migration[5.1]
  def change
    add_column :glossary_terms, :video, :string
  end
end
