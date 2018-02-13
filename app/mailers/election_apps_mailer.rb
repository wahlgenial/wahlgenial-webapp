class ElectionAppsMailer < ApplicationMailer
  default from: I18n.t('mailers.new_app_registered.from')

  def new_app_registered(app, url, user_details)
    @app_name = app.name
    @link = url
    @user_ip = user_details[:user_ip]
    @user_agent = user_details[:user_agent]
    mail(
      to: I18n.t('mailers.new_app_registered.to'),
      subject: I18n.t('mailers.new_app_registered.subject',
        app_name: app.name,
        category_title: (app.category ? app.category.title : 'wahldatenhelfer')
      )
    )
  end
end
