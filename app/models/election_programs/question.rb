class ElectionPrograms::Question < ApplicationRecord
  belongs_to :topic
  has_many :opinions
end
