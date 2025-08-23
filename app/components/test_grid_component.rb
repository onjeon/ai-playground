class TestGridComponent < ViewComponent::Base
  def initialize(tests:)
    @tests = tests
  end

  private

  attr_reader :tests

  def has_tests?
    tests.any?
  end

  def tests_count
    tests.count
  end
end