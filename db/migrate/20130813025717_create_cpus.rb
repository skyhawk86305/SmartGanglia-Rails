class CreateCpus < ActiveRecord::Migration
  def self.up
    create_table :cpus do |t|
        t.column :load_one, :float
	t.column :load_five, :float
	t.column :load_fifteen, :float
	t.column :description, :text
     	t.column :created_at, :timestamp
    end	
 end
   
   def self_down
     drop_table :cpus
   end
   
end
