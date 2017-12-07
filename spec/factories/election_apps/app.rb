FactoryBot.define do
  factory :app, class: ElectionApps::App do
    name 'App Name'
    description 'Description'
    association :category
  end
end
