class Calendar::Event < ApplicationRecord
  default_scope {order(:datetime, :id)}
  validates :datetime, presence: true
end
