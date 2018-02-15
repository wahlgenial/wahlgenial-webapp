class GlossaryController < ApplicationController

  def index
    terms = Glossary::Term.order_by_title
    @terms = Glossary::TermReactDecorator.decorate terms
  end
end
