class AddSlugToGlossaryTerm < ActiveRecord::Migration[5.1]
  def change
    add_column :glossary_terms, :slug, :string
    add_index :glossary_terms, :slug, unique: true
  end
end
