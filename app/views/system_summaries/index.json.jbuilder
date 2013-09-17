json.array!(@system_summaries) do |system_summary|
  json.extract! system_summary, 
  json.url system_summary_url(system_summary, format: :json)
end
