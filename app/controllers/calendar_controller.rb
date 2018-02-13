class CalendarController < ApplicationController
  def index
    @calendar_events = Calendar::Event.all
  end
end
