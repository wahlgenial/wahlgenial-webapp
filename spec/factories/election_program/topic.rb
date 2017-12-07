FactoryBot.define do
  factory :topic, class: ElectionPrograms::Topic do
    sequence(:title) { |n| "Title ##{n}" }
    sequence(:details) { |n| "Here is details for Title ##{n}" }
  end
end
