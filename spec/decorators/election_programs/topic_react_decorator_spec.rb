require 'rails_helper'

RSpec.describe ElectionPrograms::TopicReactDecorator do
  describe 'election programs react decorator' do
    let(:output) do
      [{
        title: 'topic',
        questions: [
          { title: 'question',
            text: 'the question text',
            opinions: [
              { opinion: 'positive', party: 'party1' },
              { opinion: 'positive', party: 'party2' }
            ]
          }
        ]
      }]
    end

    it 'returns the correct data tree' do
      party_1 = create(:party, name: 'party1')
      party_2 = create(:party, name: 'party2')
      topic = create(:topic, title: 'topic', details: 'The topic details')
      question = create(:question, title: 'question', text: 'the question text', topic: topic)
      create(:opinion, opinion: 'positive', party: party_1, question: question)
      create(:opinion, opinion: 'positive', party: party_2, question: question)
      # array of hashes
      election_programs = ElectionPrograms::TopicReactDecorator.decorate_collection(
        ElectionPrograms::Topic.includes(:questions) )
      election_programs_collection = election_programs.map(&:to_h)

      expect(election_programs_collection).to eql(output)

    end
  end
end
