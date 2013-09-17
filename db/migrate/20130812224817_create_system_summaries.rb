class CreateSystemSummaries < ActiveRecord::Migration
  def change
    create_table :system_summaries do |t|

      t.timestamps
    end
  end
end
