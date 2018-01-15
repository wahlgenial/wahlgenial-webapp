class ElectionPrograms::Party < ApplicationRecord
  default_scope { order('ordering ASC') }
end
