FactoryBot.define do
  factory :opinion, class: ElectionPrograms::Opinion do
    association :party
    association :question
  end
end
