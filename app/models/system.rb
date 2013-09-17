class System < ActiveRecord::Base
  belogs_to :node, :system_summary
end
