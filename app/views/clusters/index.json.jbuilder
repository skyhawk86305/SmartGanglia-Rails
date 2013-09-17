json.array!(@clusters) do |cluster|
  json.extract! cluster, 
  json.url cluster_url(cluster, format: :json)
end
