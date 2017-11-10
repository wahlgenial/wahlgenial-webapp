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
### React
#### Standard JS
We use [JavaScript Standard Style ](https://standardjs.com/) which is JavaScript style guide. You can use [eslint](https://eslint.org/) plugin for your editor.
#### Storybook
Run `$ yarn stroybook` for storybook. Stories are located in `/app/javascript/stories/`
