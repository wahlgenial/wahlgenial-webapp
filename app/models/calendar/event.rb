class Calendar::Event < ApplicationRecord
  validates :datetime, presence: true
end
