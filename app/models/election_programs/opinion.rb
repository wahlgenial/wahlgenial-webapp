class ElectionPrograms::Opinion < ApplicationRecord
  enum opinion: [:positive, :neutral, :negative]
  belongs_to :question
  belongs_to :party
end
