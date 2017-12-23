const axios = require('axios');

axios.get('http://freegeoip.net/json/')
    .then(({ data: geoip }) => 
        axios.post('http://localhost:9000/api/geoips', geoip))