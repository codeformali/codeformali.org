require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  def setup 
    @base_title = "Code For Mali"
  end
    
  test "should get about" do
    get :about
    assert_response :success
    assert_select   "title", "À propos | #{@base_title}" 
  end

end
