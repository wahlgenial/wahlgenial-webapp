class BundestagVote::PoliticalAgreement < ApplicationRecord
  mount_uploader :image, BundestagVotePoliticalAgreementImageUploader
end
