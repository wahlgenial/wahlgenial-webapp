class TeacherAppTag < ApplicationRecord
  has_many :teacher_app_taggings
  has_many :teacher_app, through: :teacher_app_taggings
end
