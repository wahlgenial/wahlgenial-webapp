class Glossary::TermReactDecorator < Draper::Decorator
  def to_h
    collections = []
    grouped_objects = grouped_by_title

    ('A'..'Z').to_a.each do |letter|
      letter_hash = {}
      letter_records = grouped_objects[letter]
      letter_hash['letter'] = letter
      letter_hash['count'] = letter_records.nil? ? 0 : letter_records.count

      terms = []
      if letter_records.present?
        letter_records.each do |record|

          term_record = {}
          term_record[:slug] = record['slug']
          term_record[:title] = record['title']
          term_record[:description] = Redcarpet::Markdown.new(Redcarpet::Render::HTML,
            no_intra_emphasis: true,
            fenced_code_blocks: true,
            disable_indented_code_blocks: true,
            autolink: true,
            tables: true,
            underline: true,
            highlight: true
          ).render(record['description']).html_safe
          term_record[:image] = record.image_url
          term_record[:image_thumb] = record.image_url(:thumb)
          term_record[:video] = record.video
          terms.push(term_record)
        end
      end

      letter_hash['terms'] = terms
      collections.push(letter_hash)
    end
    collections
  end

  private

  def grouped_by_title
    object.group_by { |o| o.title[0].capitalize }
  end
end
