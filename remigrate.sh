#!/bin/bash
set -x
rake db:drop && rake db:create && rake db:migrate && rake db:schema:dump
