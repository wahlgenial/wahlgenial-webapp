# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path("../config/application", __FILE__)

Rails.application.load_tasks

if %w[development test].include? Rails.env
  require "bundler/audit/task"
  require "rspec/core/rake_task"

  # setup task bundle:audit
  Bundler::Audit::Task.new

  # setup task rspec
  RSpec::Core::RakeTask.new(:rspec) do |t|
    # t.exclude_pattern = "**/{system}/**/*_spec.rb" # example, here how to skip integration specs
  end

  # setup task factory_bot:lint
  namespace :factory_bot do
    desc "Verify that all FactoryBot factories are valid"
    task lint: :environment do
      puts "Building all factories and traits to ensure they are valid"
      FactoryBot.lint traits: true, strategy: :build, verbose: true
    end
  end

  # setup task yarn:audit
  namespace :yarn do
    desc "Verify that all FactoryBot factories are valid"
    task audit: :environment do
      puts "Checking the nodejs packages for known vulnerabilities (CVEs)"
      success = system("yarn audit --level moderate")
      break unless success
    end
  end

  desc "Run the specs, audits Ruby and NodeJS dependencies and lints the factories"
  task ci: %w[rspec bundle:audit yarn:audit factory_bot:lint]
end
