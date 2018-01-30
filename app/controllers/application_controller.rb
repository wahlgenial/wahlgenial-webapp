class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :http_authenticate

  protected
  def http_authenticate
    # This authentication is only for staging server and should be removed in production
    # TODO rails-admin is not protected yet

    return if Rails.env.development? || Rails.env.test?
    authenticate_or_request_with_http_basic('Administration') do |username, password|
      username == 'wahl' && password == 'helfer'
    end
  end
end
