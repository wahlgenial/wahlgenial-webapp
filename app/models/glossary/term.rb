class Glossary::Term < ApplicationRecord
  validates_presence_of :title
  mount_uploader :image, GlossaryTermImageUploader
end
