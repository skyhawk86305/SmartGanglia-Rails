class Cluster < ActiveRecord::Base
  belongs_to :grid
  has_many :nodes
end
