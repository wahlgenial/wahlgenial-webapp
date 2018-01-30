class PagesController < ApplicationController
  def home
    @election_programs = election_programs
    @political_agreements = BundestagVote::PoliticalAgreement.all.limit(3)
  end

  def glossary
    terms = Glossary::Term.order_by_title
    @terms = Glossary::TermReactDecorator.decorate terms
  end

  def imprint
  end

  private

  def election_programs
    ElectionPrograms::TopicReactDecorator.decorate_collection(ElectionPrograms::Topic.includes(questions: {opinions: :party}))
  end

end
