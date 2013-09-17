class CreateGrids < ActiveRecord::Migration
  def change
    create_table :grids do |t|

      t.timestamps
    end
  end
end
