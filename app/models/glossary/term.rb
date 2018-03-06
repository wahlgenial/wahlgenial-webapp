class Glossary::Term < ApplicationRecord
  validates :title, uniqueness: true
  before_save :handle_slug
  validates_presence_of :title
  mount_uploader :image, GlossaryTermImageUploader

  scope :order_by_title, -> { order(title: :asc) }

  protected
  def handle_slug
    self.slug = title.parameterize
  end
end
