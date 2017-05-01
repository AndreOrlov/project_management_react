class AddNetCostToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :project_net_cost, :decimal, precision: 8, scale: 2
  end
end
