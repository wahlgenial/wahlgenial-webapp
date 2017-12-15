if Rails.env.development?

# ElectionPrograms
  parties = [ {id: 1, name: 'Party#1'}, {id: 2, name: 'Party#2'}, {id: 3, name: 'Party#3'} ]
  ElectionPrograms::Party.create(parties)

  topics = [
    { id: 1, title: 'Topic#1', details: 'The Topic#1 details' },
    { id: 2, title: 'Topic#2', details: 'The Topic#2 details' } ]
  ElectionPrograms::Topic.create(topics)

  questions = [
    { id: 1, title: 'Question#1', text: 'What is the question here ?', topic_id: 1 },
    { id: 2, title: 'Question#2', text: 'Where is the question here ?', topic_id: 1 } ]
  ElectionPrograms::Question.create(questions)

  opinions = [
    { id: 1, opinion: 'positive', party_id: 1, question_id: 1},
    { id: 2, opinion: 'negative', party_id: 1, question_id: 2},
    { id: 3, opinion: 'neutral', party_id: 2, question_id: 1},
    { id: 4, opinion: 'positive', party_id: 2, question_id: 2} ]
  ElectionPrograms::Opinion.create(opinions)

  political_agreements = [

    { id: 1,
      title:'Endgültiges Ergebnis der Namentlichen Abstimmung Nr. 1' ,
      image: '',
      votes_total: 664, votes_yes: 504, votes_no: 152, votes_abstentions: 8, votes_unset: 45, votes_unvalid: 0 },

    { id: 2,
      title:'Endgültiges Ergebnis der Namentlichen Abstimmung Nr. 2' ,
      image: '',
      votes_total: 664, votes_yes: 504, votes_no: 152, votes_abstentions: 8, votes_unset: 45, votes_unvalid: 0 },

    { id: 3,
      title:'Endgültiges Ergebnis der Namentlichen Abstimmung Nr. 3' ,
      image: '',
      votes_total: 664, votes_yes: 504, votes_no: 152, votes_abstentions: 8, votes_unset: 45, votes_unvalid: 0 } ]
    BundestagVote::PoliticalAgreement.create(political_agreements)

end
