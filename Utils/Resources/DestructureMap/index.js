function getDataFromMap (map) {
  // console.log(map.Data)
  return new Proxy(map, {
    get (obj, prop) {
      return obj.get(prop)
    }
  })
  
}

module.exports = {
  getDataFromMap
}