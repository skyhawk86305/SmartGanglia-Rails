json.array!(@cpus) do |cpu|
  json.extract! cpu, 
  json.url cpu_url(cpu, format: :json)
end
