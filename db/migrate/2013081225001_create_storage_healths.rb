class CreateStorageHealths < ActiveRecord::Migration
  def self.up
    create_table :storagehealths do |t|
     	t.column :description, :text
     	t.column :created_at, :timestamp
    end	
 end
   
   def self_down
     drop_table :storagehealths
   end
   
end
