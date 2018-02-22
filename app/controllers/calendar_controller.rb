class CalendarController < ApplicationController
  def index
    @calendar_events = Calendar::Event.all
    @comming_event = Calendar::Event.first
  end
end
