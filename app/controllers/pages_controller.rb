class PagesController < ApplicationController
  def home
    @tests = filtered_tests
    @current_category = params[:category]
    
    # Turbo Frame 요청인 경우 그리드만 렌더링
    if turbo_frame_request?
      render partial: "test_grid", locals: { tests: @tests }
    end
  end

  private

  def filtered_tests
    tests = Test.published
    
    if params[:category].present?
      tests = tests.where(category: params[:category])
    end
    
    # 성능 최적화: 제한 및 인덱스 활용
    tests.order(:created_at).limit(50)
  end
end