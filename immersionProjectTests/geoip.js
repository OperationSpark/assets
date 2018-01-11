axios.get('http://freegeoip.net/json/')
    .then(({ data: geoip }) => 
        axios.post('https://www.operationspark.org/api/geoips', geoip))
            .catch(e => null);
