# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

Rails.application.load_tasks

if %w[development test].include? Rails.env
  require 'bundler/audit/task'
  require 'rspec/core/rake_task'

  # setup task bundle:audit
  Bundler::Audit::Task.new

  # setup task rspec
  RSpec::Core::RakeTask.new(:rspec) do |t|
    # t.exclude_pattern = "**/{system}/**/*_spec.rb" # example, here how to skip integration specs
  end

  desc 'Run the specs and bundle:audit'
  task ci: %w[rspec bundle:audit]
end
