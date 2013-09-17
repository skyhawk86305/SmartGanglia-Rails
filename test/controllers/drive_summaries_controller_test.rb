require 'test_helper'

class DriveSummariesControllerTest < ActionController::TestCase
  setup do
    @drive_summary = drive_summaries(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:drive_summaries)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create drive_summary" do
    assert_difference('DriveSummary.count') do
      post :create, drive_summary: {  }
    end

    assert_redirected_to drive_summary_path(assigns(:drive_summary))
  end

  test "should show drive_summary" do
    get :show, id: @drive_summary
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @drive_summary
    assert_response :success
  end

  test "should update drive_summary" do
    patch :update, id: @drive_summary, drive_summary: {  }
    assert_redirected_to drive_summary_path(assigns(:drive_summary))
  end

  test "should destroy drive_summary" do
    assert_difference('DriveSummary.count', -1) do
      delete :destroy, id: @drive_summary
    end

    assert_redirected_to drive_summaries_path
  end
end
