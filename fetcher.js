const fs = require('fs')
const axios = require('axios').default
const firstArgument = process.argv[2]
const secondArgument = process.argv[3]

axios.get(firstArgument)
    .then(function (response) {
        let content = response.data
        fs.writeFile(secondArgument, content, err => {
            if (err) {
                console.log(err)
                return
            }
            console.log(`Downloaded and saved ${content.length} bytes to ./index.hmtl`)
        })
    })
    .catch(function (error) {
        console.log(error)
    })
