# WAHLDATENHELFER :ballot_box_with_check:

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
We use rspec for tests. use `$ rspec` to run tests.

### React
#### Storybook
Run `$ yarn stroybook` for storybook. Stories are located in `/app/javascript/stories/`

### Webpacker
Webpacker is used as a pipeline for JavaScript, to run the development server, run `$ webpack-dev-server`
