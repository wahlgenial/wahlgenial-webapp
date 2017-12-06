class ElectionApps::App < ApplicationRecord
  belongs_to :category
  mount_uploader :image, ElectionAppsAppImageUploader
end
