FactoryBot.define do
  factory :party, class: ElectionPrograms::Party do
    sequence(:name) { |n| "Party ##{n}" }
  end
end
