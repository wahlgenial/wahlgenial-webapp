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
    teacher_app_tags.map(&:name).join(', ')
  end

  def tag_list=(names)
    self.teacher_app_tags = names.split(',').map do |n|
      Tag.where(name: n.strip).first_or_create!
    end
  end

end
