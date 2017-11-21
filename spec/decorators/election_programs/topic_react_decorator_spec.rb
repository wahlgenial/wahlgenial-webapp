require 'rails_helper'

RSpec.describe ElectionPrograms::TopicReactDecorator do
  describe 'election programs react decorator' do
    let(:output ) {
      [
        {},
        {}
      ]
    }



    it 'returns the correct data tree' do

      parties = create_list(:party, 2)

      topics = create_list(:topic, 2)

      topic_1_questions = create_list(:question, 2, topic: topics[0])
      topic_2_questions = create_list(:question, 3, topic: topics[1])

      topic_1_question_1_opinions = create_list(:opinion, 3, opinion: 'positive', party: parties[0], question: topic_1_questions[0])
      topic_1_question_2_opinions = create_list(:opinion, 3, opinion: 'negative', party: parties[1], question: topic_2_questions[1])

      # array of hashes
      election_programs = ElectionPrograms::TopicReactDecorator.decorate_collection(
        ElectionPrograms::Topic.includes(:questions) )
      election_programs_collection = election_programs.map(&:to_h)
      byebug
      expect(election_programs_collection.count).to eql(2)

      # Topic 1
      expect(election_programs_collection[0][:title]).to eql(topics[0].title)
      expect(election_programs_collection[0][:questions].count).to eql(2)

      expect(election_programs_collection[0][:questions][0][:title]).to eql(topic_1_questions[0][:title])
      expect(election_programs_collection[0][:questions][1][:title]).to eql(topic_1_questions[1][:title])

      expect(election_programs_collection[0][:questions][0][:opinions].count).to eql(3)
      expect(
        election_programs_collection[0][:questions][0][:opinions][0][:opinion]
      ).to eql(topic_1_question_1_opinions[0][:opinion])

      expect(
        election_programs_collection[0][:questions][0][:opinions][1][:opinion]
      ).to eql(topic_1_question_1_opinions[1][:opinion])


      # Topic 2
      expect(election_programs_collection[1][:title]).to eql(topics[1].title)
      expect(election_programs_collection[1][:questions].count).to eql(3)


    end
  end
end
