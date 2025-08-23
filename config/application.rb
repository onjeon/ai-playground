require_relative "boot"

require "rails/all"

Bundler.require(*Rails.groups)

module AiPlayground
  class Application < Rails::Application
    config.load_defaults 7.1

    # ViewComponent configuration
    config.view_component.preview_paths << "#{Rails.root}/spec/components/previews"
    config.view_component.default_preview_layout = "component_preview"
    config.view_component.show_previews_source = true

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end