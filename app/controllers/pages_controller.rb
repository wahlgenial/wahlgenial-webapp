class PagesController < ApplicationController

	def home
		@election_programs = election_programs
	end

	def glossary
		@terms = glossary_terms
	end

	def election_apps
		@apps_categories = election_apps_apps
	end

	private

	def election_programs
		ElectionPrograms::TopicReactDecorator.decorate_collection(ElectionPrograms::Topic.includes(questions: {opinions: :party}))
	end

	def glossary_terms
		Glossary::TermReactDecorator.decorate(Glossary::Term.all.order('title ASC').group_by{ |t| t.title[0] })
	end

	def election_apps_apps
		ElectionApps::CategoryReactDecorator.decorate(ElectionApps::Category.includes(:apps))
	end
end
