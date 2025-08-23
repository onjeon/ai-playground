class CreateTests < ActiveRecord::Migration[7.1]
  def change
    create_table :tests do |t|
      t.string :title, null: false, limit: 100
      t.string :slug, null: false, limit: 50
      t.string :category, null: false, limit: 20
      t.integer :participants_count, null: false, default: 0
      t.string :thumbnail_url, null: false
      t.boolean :is_published, null: false, default: false

      t.timestamps
    end

    add_index :tests, :slug, unique: true
    add_index :tests, :category
    add_index :tests, :is_published
    add_index :tests, [:is_published, :category]
  end
end