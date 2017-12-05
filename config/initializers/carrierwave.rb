CarrierWave.configure do |configure|
  configure.fog_credentials = {
    :provider               => 'AWS',                             # required
    :aws_access_key_id      => ENV['AWS_ACCESS_KEY_ID'],          # required
    :aws_secret_access_key  => ENV['AWS_SSECRET_ACCESS_KEY'],     # required
    :region                 => 'eu-west-1'                        # optional, defaults to 'us-east-1'
  }
  configure.fog_directory  = ENV['AWS_BUCKET_NAME']               # required
  #config.fog_host       = 'https://assets.example.com'           # optional, defaults to nil
  #config.fog_public     = false                                  # optional, defaults to true
  configure.fog_attributes = {'Cache-Control'=>'max-age=315576000'}  # optional, defaults to {}
  
  if Rails.env.development? || Rails.env.test?
    CarrierWave.configure do |config|
      config.storage = :file
    end
  end

  if Rails.env.production?
    CarrierWave.configure do |config|
      config.storage = :fog
    end
  end
end
