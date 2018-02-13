FactoryBot.define do
  factory :calendar_event, class: 'Calendar::Event' do
    year "MyString"
    date "MyString"
    federal_state "MyString"
    organization "MyString"
    period "MyString"
  end
end
