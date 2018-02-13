require "rails_helper"

RSpec.describe ElectionAppsMailer, type: :mailer do
  it 'sends an email' do
    expect { ElectionAppsMailer.new_app_registered(
      ElectionApps::App.new,
      'http://url.ext',
      {user_ip: '127.0.0.1', user_agent: 'Somthing :/'}
    ).deliver }
      .to change { ActionMailer::Base.deliveries.count }.by(1)
  end
end
