FactoryBot.define do
  factory :question, class: ElectionPrograms::Question do
    sequence(:title) { |n| "Question ##{n}" }
    sequence(:text) { |n| "Question ##{n} going like this ... ?" }
    association :topic
  end
end
