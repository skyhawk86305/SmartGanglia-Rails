json.array!(@nodes) do |node|
  json.extract! node, 
  json.url node_url(node, format: :json)
end
