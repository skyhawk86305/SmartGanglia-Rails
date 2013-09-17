class Node < ActiveRecord::Base
  belogs_to :client, :cluster, :drive
  has_one :CPU, :memory, :system
  has_many :drives
end
