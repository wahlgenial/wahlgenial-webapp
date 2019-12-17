# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20191217123142) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bundestag_vote_political_agreements", force: :cascade do |t|
    t.string "title"
    t.string "image"
    t.integer "votes_total"
    t.integer "votes_yes"
    t.integer "votes_no"
    t.integer "votes_abstentions"
    t.integer "votes_unset"
    t.integer "votes_unvalid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "external_link"
  end

  create_table "calendar_events", force: :cascade do |t|
    t.string "year"
    t.string "date"
    t.string "federal_state"
    t.string "organization"
    t.string "period"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "datetime"
  end

  create_table "election_apps_apps", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "screenshot"
    t.integer "category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "logo"
    t.string "link"
    t.string "slug"
    t.boolean "published", default: false, null: false
    t.boolean "featured", default: false
    t.index ["slug"], name: "index_election_apps_apps_on_slug", unique: true
  end

  create_table "election_apps_categories", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.string "icon_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "ordering", default: 0
    t.string "slug"
    t.index ["slug"], name: "index_election_apps_categories_on_slug", unique: true
  end

  create_table "election_programs_opinions", force: :cascade do |t|
    t.integer "question_id"
    t.integer "party_id"
    t.integer "opinion"
    t.text "statement"
  end

  create_table "election_programs_parties", force: :cascade do |t|
    t.string "name"
    t.integer "ordering", default: 0
  end

  create_table "election_programs_questions", force: :cascade do |t|
    t.string "title"
    t.text "text"
    t.integer "topic_id"
  end

  create_table "election_programs_topics", force: :cascade do |t|
    t.string "title"
    t.text "details"
    t.integer "ordering", default: 0
  end

  create_table "glossary_terms", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "slug"
    t.string "video"
    t.index ["slug"], name: "index_glossary_terms_on_slug", unique: true
  end

  create_table "teacher_app_taggings", force: :cascade do |t|
    t.bigint "teacher_app_tag_id"
    t.bigint "teacher_app_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["teacher_app_id"], name: "index_teacher_app_taggings_on_teacher_app_id"
    t.index ["teacher_app_tag_id"], name: "index_teacher_app_taggings_on_teacher_app_tag_id"
  end

  create_table "teacher_app_tags", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teacher_apps", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "published", default: false, null: false
    t.string "picture"
    t.text "teaser_text"
    t.string "external_link"
    t.integer "school_grade", default: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], array: true
    t.string "slug"
    t.boolean "for_Desktop"
    t.boolean "for_Tablet"
    t.boolean "for_Smartphone"
    t.boolean "for_Whiteboard"
  end

  add_foreign_key "teacher_app_taggings", "teacher_app_tags"
  add_foreign_key "teacher_app_taggings", "teacher_apps"
end
