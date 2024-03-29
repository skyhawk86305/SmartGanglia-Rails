# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20130813025717) do

  create_table "clients", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "clusters", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "cpus", force: true do |t|
    t.float    "load_one"
    t.float    "load_five"
    t.float    "load_fifteen"
    t.text     "description"
    t.datetime "created_at"
  end

  create_table "drive_summaries", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "drives", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "grids", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "hosts", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "memories", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "nodes", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "storagehealths", force: true do |t|
    t.text     "description"
    t.datetime "created_at"
  end

  create_table "system_summaries", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "systems", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
