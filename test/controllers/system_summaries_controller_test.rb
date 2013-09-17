require 'test_helper'

class SystemSummariesControllerTest < ActionController::TestCase
  setup do
    @system_summary = system_summaries(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:system_summaries)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create system_summary" do
    assert_difference('SystemSummary.count') do
      post :create, system_summary: {  }
    end

    assert_redirected_to system_summary_path(assigns(:system_summary))
  end

  test "should show system_summary" do
    get :show, id: @system_summary
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @system_summary
    assert_response :success
  end

  test "should update system_summary" do
    patch :update, id: @system_summary, system_summary: {  }
    assert_redirected_to system_summary_path(assigns(:system_summary))
  end

  test "should destroy system_summary" do
    assert_difference('SystemSummary.count', -1) do
      delete :destroy, id: @system_summary
    end

    assert_redirected_to system_summaries_path
  end
end
