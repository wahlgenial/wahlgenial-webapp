class ElectionApps::App < ApplicationRecord
  belongs_to :category
  before_validation :slug_generator, on: :create

  mount_uploader :screenshot, ElectionAppsAppScreenshotUploader
  mount_uploader :logo, ElectionAppsAppLogoUploader

  validates :slug, uniqueness: true

  private
  def slug_generator
    slug_string = name.parameterize
    if ElectionApps::App.exists?(slug: slug_string)
      self.slug = "#{slug_string}-#{SecureRandom.random_number(999)}"
    else
      self.slug = slug_string
    end
  end
end
