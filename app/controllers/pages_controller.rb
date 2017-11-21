class PagesController < ApplicationController

	def home
		@election_programs = ElectionPrograms::Topic.includes(questions: {opinions: :party})
	end
end
