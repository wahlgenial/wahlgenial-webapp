if Rails.env.development?

# ElectionPrograms
  parties = [ {id: 1, name: 'Party#1'}, {id: 2, name: 'Party#2'}, {id: 3, name: 'Party#3'} ]
  begin
    ElectionPrograms::Party.create(parties)
  rescue
    puts 'ElectionPrograms::Party already seeded!'
  end


  topics = [
    { id: 1, title: 'Topic#1', details: 'The Topic#1 details' },
    { id: 2, title: 'Topic#2', details: 'The Topic#2 details' } ]
  begin
    ElectionPrograms::Topic.create(topics)
  rescue
    puts 'ElectionPrograms::Topic already seeded!'
  end


  questions = [
    { id: 1, title: 'Question#1', text: 'What is the question here ?', topic_id: 1 },
    { id: 2, title: 'Question#2', text: 'Where is the question here ?', topic_id: 1 } ]
  begin
    ElectionPrograms::Question.create(questions)
  rescue
    puts 'ElectionPrograms::Question already seeded!'
  end


  opinions = [
    { id: 1, opinion: 'positive', party_id: 1, question_id: 1},
    { id: 2, opinion: 'negative', party_id: 1, question_id: 2},
    { id: 3, opinion: 'neutral', party_id: 2, question_id: 1},
    { id: 4, opinion: 'positive', party_id: 2, question_id: 2} ]
    begin
      ElectionPrograms::Opinion.create(opinions)
    rescue
      puts 'ElectionPrograms::Opinion already seeded!'
    end

  election_apps_categories = [
    { id: 1, title: 'Apps Category 1', description: 'Here is description for Category 1' },
    { id: 2, title: 'Apps Category 2', description: 'Here is description for Category 2' },
  ]
  begin
    ElectionApps::Category.create(election_apps_categories)
  rescue
    puts 'ElectionApps::Category already seeded!'
  end

  election_apps_apps = [
       { id: 1, name: 'App 1', description: 'Here is description for App 1', image: '', category_id: 1, logo: '', link: '#' },
       { id: 2, name: 'App 2', description: 'Here is description for App 2', image: '', category_id: 1, logo: '', link: '#' },
       { id: 3, name: 'App 3', description: 'Here is description for App 3', image: '', category_id: 1, logo: '', link: '#' },
       { id: 4, name: 'App 4', description: 'Here is description for App 4', image: '', category_id: 2, logo: '', link: '#' } ]
  begin
    ElectionApps::App.create(election_apps_apps)
  rescue
    puts 'ElectionApps::App already seeded!'
  end

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
    begin
      BundestagVote::PoliticalAgreement.create(political_agreements)
    rescue
      puts 'BundestagVote::PoliticalAgreement already seeded!'
    end

end
