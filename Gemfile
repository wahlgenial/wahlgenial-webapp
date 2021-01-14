source 'https://rubygems.org'

ruby '2.7.0'

gem 'rails', '~> 5.1.4'
gem 'pg'
gem 'rails_admin', '~> 1.4'
gem 'rails-i18n', '~> 5.1'

gem 'webpacker'
gem 'react-rails'
gem 'draper'
gem 'puma'

gem 'carrierwave'
gem 'mini_magick'

gem 'rack-tracker'

gem 'redcarpet'

group :development, :test do
  gem 'rspec-rails', '~> 3.6'
  gem 'factory_bot_rails'
  gem 'guard-rails', require: false
  gem "guard-rspec"
  gem "guard"
  gem 'byebug'
end

group :production do
  gem 'fog'
  gem "sentry-raven"
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'letter_opener'
end
