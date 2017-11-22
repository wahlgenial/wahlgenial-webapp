class PagesController < ApplicationController

	def home
		@election_programs = election_programs
	end

	private
	def election_programs
		ElectionPrograms::TopicReactDecorator.decorate_collection(ElectionPrograms::Topic.includes(questions: {opinions: :party}))
	end
end
