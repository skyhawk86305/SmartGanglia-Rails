class Grid < ActiveRecord::Base
  has_many :clusters
  belongs_to :clients
end
