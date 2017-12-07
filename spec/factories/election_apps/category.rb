FactoryBot.define do
  factory :category, class: ElectionApps::Category do
    title 'Category Title'
    description 'Category Description'
    icon_name 'category-icon-name'
  end
end
