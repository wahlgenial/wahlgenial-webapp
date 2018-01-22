class ElectionApps::Category < ApplicationRecord
  has_many :apps
  default_scope { order(ordering: :desc) }
end
