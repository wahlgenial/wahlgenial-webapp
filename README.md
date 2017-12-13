# WAHLDATENHELFER :ballot_box_with_check:
[![Build Status](https://www.travis-ci.com/railslove/wahldatenhelfer.svg?token=rLsyzRs4bH4dqZXw5Aq9&branch=master)](https://www.travis-ci.com/railslove/wahldatenhelfer)
## Getting Started

### Requirements:
- Ruby 2.4.2

### Installation:
- copy `config/database.yml.example` into `config/database.yml`
- `$ bundle install`
- `$ rails db:setup`
- `$ yarn`

Wahldatenhelfer uses `postgresql` in production, `sqlite` for both test and development environment.


## Development

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
