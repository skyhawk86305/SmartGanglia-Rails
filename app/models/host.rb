class Host < ActiveRecord::Base
  belogs_to :cluster
end
