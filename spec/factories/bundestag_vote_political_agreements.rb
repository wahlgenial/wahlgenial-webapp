FactoryBot.define do
  factory :bundestag_vote_political_agreement, class: 'BundestagVote::PoliticalAgreement' do
    title "MyString"
    image "MyString"
    votes_total 1
    votes_yes 1
    votes_no 1
    votes_abstentions 1
    votes_unset 1
    votes_unvalid 1
  end
end
