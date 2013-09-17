json.array!(@systems) do |system|
  json.extract! system, 
  json.url system_url(system, format: :json)
end
