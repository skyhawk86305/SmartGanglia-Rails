json.array!(@drive_summaries) do |drive_summary|
  json.extract! drive_summary, 
  json.url drive_summary_url(drive_summary, format: :json)
end
