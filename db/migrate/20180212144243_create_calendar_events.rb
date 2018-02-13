class CreateCalendarEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :calendar_events do |t|
      t.string :year
      t.string :date
      t.string :federal_state
      t.string :organization
      t.string :period

      t.timestamps
    end
  end
end
