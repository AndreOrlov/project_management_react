class Project < ApplicationRecord

  [:name, :description, :project_cost].each { |attr| validates attr, presence: true }
  validates :project_cost, numericality: true

end

# == Schema Information
#
# Table name: projects
#
#  id           :integer          not null, primary key
#  name         :string
#  description  :text
#  project_cost :decimal(8, 2)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
