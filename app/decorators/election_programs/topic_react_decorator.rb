class ElectionPrograms::TopicReactDecorator < Draper::Decorator

  def questions
    object.questions
  end

  def to_h
    topic_hash = { title:object.title,  questions: [] }

    object.questions.each do |question|
      question_hash = { title: question.title, text: question.text, opinions: [] }

      question.opinions.each do |opinion|
        opinion_hash = {
          opinion: opinion.opinion,
          party: opinion.party.name,
          statement: opinion.statement
        }
        question_hash[:opinions] << opinion_hash
      end

      topic_hash[:questions] << question_hash
    end

    topic_hash
  end
end
