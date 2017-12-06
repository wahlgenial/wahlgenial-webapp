class Glossary::Term < ApplicationRecord
  validates_presence_of :title
  mount_uploader :image, GlossaryTermImageUploader

  scope :order_by_title, -> { order(title: :asc) }
end
