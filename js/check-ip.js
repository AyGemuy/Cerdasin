'use strict';
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        let AlamatIP = data.ip
  })
