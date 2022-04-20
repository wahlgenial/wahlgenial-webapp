# WAHLDATENHELFER :ballot_box_with_check:
[![Build Status](https://www.travis-ci.com/railslove/wahldatenhelfer.svg?token=rLsyzRs4bH4dqZXw5Aq9&branch=master)](https://www.travis-ci.com/railslove/wahldatenhelfer)
The oroginal name was Wahldatenhelfer, later has been changed to Wahlgenial.  
You may find in codebase `wahldatenhelfer`, `Wahlgenial` is for public.
## Getting Started

### Requirements:
- Ruby 2.4.2
- PostgreSQL 9.6 or later.

### Installation:
- copy `config/database.yml.example` into `config/database.yml` like this `cp config/database.yml.example config/database.yml`
- `$ bundle install`
- `$ rails db:setup`
- `$ yarn`

### Start App:
- `$ ./bin/webpack-dev-server`
- in different terminal `$ rails s` 
- and then go to `http://localhost:3000`

## Deploy
WAHLDATENHELFER uses many services:
- [Mailgun](https://www.mailgun.com/) email service to send notifications.
- [RailsAdmin](https://github.com/sferik/rails_admin) rails content management  
- [Google analytics](https://analytics.google.com) web analytics service
- [Amazon Web Services](https://aws.amazon.com/) cloud services platform for files storage.

That :point_up: leads to configure the following :point_down: env variables:

- RailsAdmin authentication:
  - `ENV["ADMIN_USER"]`
  - `ENV["ADMIN_PASS"]`
- MAILGUN
  - `ENV['MAILGUN_SMTP_PORT']`
  - `ENV['MAILGUN_SMTP_SERVER']`
  - `ENV['MAILGUN_SMTP_LOGIN']`
  - `ENV['MAILGUN_SMTP_PASSWORD']`
- Google analytics tracker
  - `ENV['GOOGLE_TRACKER_ID']`
- AWS:
  - `ENV['AWS_ACCESS_KEY_ID'],`
  - `ENV['AWS_SSECRET_ACCESS_KEY'],`
  - `ENV['AWS_BUCKET_NAME']`

## Development

## Deployment
Master branch is pushed automatically

### Dummy content
Through installation, after running `$ rails db:setup`, the records should be created on development environment automatically, otherwise you can run `$ rails db:seed` to add pre-created content (which is only for development).

### Standard JS
We use [JavaScript Standard Style ](https://standardjs.com/) which is JavaScript style guide. You can use [eslint](https://eslint.org/) plugin for your editor.  
To check code validation run: `$ yarn lint` or for auto fixing `$ yarn lint-fix`

### Tests
We use [rspec](https://github.com/rspec/rspec-rails), [factory_bot](https://github.com/thoughtbot/factory_bot_rails) and   [guard-rspec](https://github.com/guard/guard-rspec) for tests.  
Run `$ rspec` for running tests. To work in file-change-watch mode, run `$ guard`

### React
#### Storybook
Run `$ yarn stroybook` for storybook. Stories are located in `/app/javascript/stories/`

### Webpacker
Webpacker is used as a pipeline for JavaScript, to run the development server, run `$ webpack-dev-server`


## Available Assets
### ElectionApps Category Icons
Currently the only icons available for `icon_name` field are:
- decisions
- infos
- questions
- unknown

## Hacks

### Sass for WEBPACKER & STORYBOOK
In `Sass` files, relative paths should be used to point to image assets Ex. `background: url('../javascript/images/arc.png')` instead of `background: url('images/arc.png')`  
(path is relative to application.sass)


 since both `storybook` and `webpacker gem` using same entry point `application.sass`, using absolute path Ex. `images/arc.png` is only possible for `webpacker`, it wasn't successful to setup `~/wahldatenhelfer/app/javaScript` as resolve path for storybook `webpack.config` which
 tells webpack what directories should be searched when resolving modules. [webpack#resolve-modules](https://webpack.js.org/configuration/resolve/#resolve-modules)
=======
