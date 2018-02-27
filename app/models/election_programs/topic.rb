class ElectionPrograms::Topic < ApplicationRecord
  has_many :questions
  default_scope { order('ordering ASC') }
end
