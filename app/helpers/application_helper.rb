module ApplicationHelper
  def page_title(page_title)
    content_for(:page_title) {page_title}
  end

  def user_details
    { user_ip: request.remote_ip,
      user_agent: request.user_agent }
  end
end
