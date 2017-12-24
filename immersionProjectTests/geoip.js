axios.get('http://freegeoip.net/json/')
    .then(({ data: geoip }) => 
        axios.post('http://www.operationsspark.org/api/geoips', geoip))