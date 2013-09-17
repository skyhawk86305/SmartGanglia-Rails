class Drive < ActiveRecord::Base
  belongs_to :node, :drive_summary
end
