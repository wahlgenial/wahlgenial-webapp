class ElectionApps::CategoryReactDecorator < Draper::Decorator

  def to_h
    collections = []
    object.each do |category_record|
      category = {
        slug: category_record.slug,
        title: category_record.title,
        description: category_record.description,
        icon_name: category_record.icon_name,
        apps: []
      }
      if category_record.apps.any?
        category_record.apps.each do |record_app|
          app = {
            slug: record_app.slug,
            name: record_app.name,
            description: record_app.description,
            link: record_app.link,
            image: record_app.image_url,
            image_thumb: record_app.image_url(:thumb),
            logo: record_app.logo_url,
            logo_thumb: record_app.logo_url(:small),
          }
          category[:apps].push(app)
        end
      end
      collections.push(category)
    end
    collections
  end
end
