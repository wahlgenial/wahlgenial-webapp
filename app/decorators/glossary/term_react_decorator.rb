class Glossary::TermReactDecorator < Draper::Decorator

  def to_h
    collections = []
    ('A'..'Z').to_a.push('Ä', 'Ö', 'Ü').each do |letter|
      letter_hash = {}
      letter_records = object["#{letter}"]
      letter_hash['letter'] = letter
      letter_hash['count'] = letter_records.nil? ? 0 : letter_records.count

      terms = []
      unless letter_records.nil?
        letter_records.each do |record|
          term_record = {}
          term_record[:title] = record['title']
          term_record[:description] = record['description']
          term_record[:image] = record.image_url
          term_record[:image_thumb] = record.image_url(:thumb)
          terms.push(term_record)
        end
      end

      letter_hash['terms'] = terms
      collections.push(letter_hash)
    end
    collections
  end
end
