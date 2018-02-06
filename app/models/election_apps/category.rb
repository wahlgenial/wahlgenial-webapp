class ElectionApps::Category < ApplicationRecord
  has_many :apps
  default_scope { order(ordering: :asc) }

  before_validation :slug_generator, on: :create

  validates :slug, uniqueness: true

  private

  def slug_generator
    slug_string = title.parameterize
    if ElectionApps::Category.exists?(slug: slug_string)
      self.slug = "#{slug_string}-#{SecureRandom.random_number(999)}"
    else
      self.slug = slug_string
    end
  end

end
