class TeacherApp < ApplicationRecord
  has_many :teacher_app_taggings
  has_many :teacher_app_tags, through: :teacher_app_taggings

  def self.tagged_with(name)
    Tag.find_by!(name: name).teacher_apps
  end

  def self.tag_counts
    Tag.select('teacher_app_tags.*, count(teacher_app_taggings.tag_id) as count').joins(:teacher_app_taggings).group('teacher_app_taggings.tag_id')
  end

  #es fehlt noch und where(published:true)
  def self.search(search)
    if search
      where(["title LIKE ?", "%#{search}%"]).or(where(["description LIKE ?", "%#{search}%"]))
   else
      all
   end
  end

  def tag_list
    self.teacher_app_tags.map(&:name).join(', ')
  end

  def grade_list
    [:for_oberstufe, :for_mittelstufe, :for_unterstufe, :for_grundschule].map do |grade|
      I18n.t("teacher_apps.#{ grade.to_s }") if self[grade]
    end
  end

  def tool_list
    [:for_desktop, :for_smartphone, :for_tablet, :for_whiteboard].map do |tool|
      I18n.t("teacher_apps.#{ tool.to_s }") if self[tool]
    end
  end

  def as_json(options = {})
    super(options).merge({
      'teacher_app_tags' => teacher_app_tags.as_json
    })
  end

end
