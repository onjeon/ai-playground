# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2025_01_23_000001) do
  create_table "tests", force: :cascade do |t|
    t.string "title", limit: 100, null: false
    t.string "slug", limit: 50, null: false
    t.string "category", limit: 20, null: false
    t.integer "participants_count", default: 0, null: false
    t.string "thumbnail_url", null: false
    t.boolean "is_published", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category"], name: "index_tests_on_category"
    t.index ["is_published", "category"], name: "index_tests_on_is_published_and_category"
    t.index ["is_published"], name: "index_tests_on_is_published"
    t.index ["slug"], name: "index_tests_on_slug", unique: true
  end
end