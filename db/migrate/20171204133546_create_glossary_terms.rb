class CreateGlossaryTerms < ActiveRecord::Migration[5.1]
  def change
    create_table :glossary_terms do |t|
      t.string :title
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
