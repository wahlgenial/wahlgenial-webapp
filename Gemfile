source 'https://rubygems.org'

ruby '2.7.5'

gem 'rails', '~> 5.2.7'

gem 'bootsnap', '>= 1.1.0', require: false
gem 'carrierwave', '~> 1.2'
gem 'draper', '~> 3.0'
gem 'mini_magick', '~> 4.8'
gem 'pg', '~> 0.21'
gem 'puma', '~> 5.6'
gem 'rack-tracker', '~> 1.5'
gem 'rails-i18n', '~> 5.1'
gem 'rails_admin', '~> 1.4'
gem 'react-rails', '~> 2.4'
gem 'redcarpet', '~> 3.4'
gem 'webpacker', '~> 3.0'

group :development do
  gem 'letter_opener', '~> 1.6'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring', '~> 2.0'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

group :development, :test do
  gem 'bundler-audit', '~> 0.7'
  gem 'byebug', '~> 9.1'
  gem 'factory_bot_rails', '~> 4.8'
  gem 'guard', '~> 2.14'
  gem 'guard-rails', '~> 0.8', require: false
  gem 'guard-rspec', '~> 4.7'
  gem 'rspec-rails', '~> 3.6'
end

group :production do
  gem 'fog', '~> 2.2' # I doubt this app needs all of 'fog' - select only the used dependencies!
  gem 'sentry-raven', '~> 2.7'
end
