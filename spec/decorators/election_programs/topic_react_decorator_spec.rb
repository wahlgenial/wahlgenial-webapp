require 'rails_helper'

RSpec.describe ElectionPrograms::TopicReactDecorator do
  describe 'election programs react decorator' do
    let(:output) do
      [{
        title: 'topic1',
        questions: []
      },
      {
        title: 'topic2',
        questions: [
          { title: 'question',
            text: 'the question text',
            opinions: [
              { opinion: 'positive', party: 'party2', statement: 'Part2 statement' },
              { opinion: 'positive', party: 'party1', statement: 'Part1 statement' }
            ]
          }
        ]
      }]
    end

    it 'returns the correct data tree' do
      party_1 = create(:party, name: 'party1', ordering: 2)
      party_2 = create(:party, name: 'party2', ordering: 1)
      topic = create(:topic, title: 'topic2', ordering: 2, details: 'The topic details 2')
      create(:topic, title: 'topic1', ordering: 1, details: 'The topic details 1')
      question = create(:question, title: 'question', text: 'the question text', topic: topic)
      create(:opinion, opinion: 'positive', party: party_1, statement: 'Part1 statement', question: question)
      create(:opinion, opinion: 'positive', party: party_2, statement: 'Part2 statement',question: question)
      # array of hashes
      election_programs = ElectionPrograms::TopicReactDecorator.decorate_collection(
        ElectionPrograms::Topic.includes(:questions) )
      election_programs_collection = election_programs.map(&:to_h)

      expect(election_programs_collection).to eql(output)

    end
  end
end
