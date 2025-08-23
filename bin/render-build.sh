#!/usr/bin/env bash
# exit on error
set -o errexit

# Install dependencies
bundle install

# Precompile assets
bundle exec rails assets:precompile

# Clean up
bundle exec rails assets:clean

# Run database migrations
bundle exec rails db:migrate

# Seed database if needed
bundle exec rails db:seed