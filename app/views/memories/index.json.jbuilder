json.array!(@memories) do |memory|
  json.extract! memory, 
  json.url memory_url(memory, format: :json)
end
