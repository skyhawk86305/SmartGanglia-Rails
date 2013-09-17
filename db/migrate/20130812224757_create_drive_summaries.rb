class CreateDriveSummaries < ActiveRecord::Migration
  def change
    create_table :drive_summaries do |t|

      t.timestamps
    end
  end
end
