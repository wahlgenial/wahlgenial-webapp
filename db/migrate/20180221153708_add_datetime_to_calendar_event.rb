class AddDatetimeToCalendarEvent < ActiveRecord::Migration[5.1]
  def change
    add_column :calendar_events, :datetime, :datetime
  end
end
