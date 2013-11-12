require 'test_helper'

class CalculateControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
