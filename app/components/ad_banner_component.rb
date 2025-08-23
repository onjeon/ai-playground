class AdBannerComponent < ViewComponent::Base
  def initialize(ad_slot: nil, ad_format: "auto", full_width_responsive: true)
    @ad_slot = ad_slot
    @ad_format = ad_format
    @full_width_responsive = full_width_responsive
  end

  private

  attr_reader :ad_slot, :ad_format, :full_width_responsive

  def ad_client
    # 실제 구글 애드센스 클라이언트 ID로 교체 필요
    "ca-pub-0000000000000000"
  end

  def should_show_ad?
    # 개발 환경에서는 플레이스홀더 표시, 프로덕션에서는 실제 광고
    Rails.env.production? || Rails.env.development?
  end
end