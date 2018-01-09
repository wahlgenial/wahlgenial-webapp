module CarrierWave
  module MiniMagick
    def quality(percentage)
      manipulate! do |img|
        img.quality(percentage)
        img = yield(img) if block_given?
        img
      end
    end
  end
end

CarrierWave.configure do |configure|

  if Rails.env.development? || Rails.env.test?
    CarrierWave.configure do |config|
      config.storage = :file
    end
  end

  if Rails.env.production?
    configure.fog_credentials = {
      :provider               => 'AWS',
      :aws_access_key_id      => ENV['AWS_ACCESS_KEY_ID'],
      :aws_secret_access_key  => ENV['AWS_SSECRET_ACCESS_KEY'],
      :region                 => 'eu-central-1'
    }
    configure.fog_directory  = ENV['AWS_BUCKET_NAME']
    configure.fog_attributes = {'Cache-Control'=>'max-age=315576000'}
    CarrierWave.configure do |config|
      config.storage = :fog
    end
  end
end
