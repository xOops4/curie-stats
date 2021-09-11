const express = require('express')
const app = express()

app.set('view engine' , 'ejs')

app.get('/' , (req, res) => {
    //console.log('first route test')
    //res.json( {message :'curie-stats'})
    res.render('index', 
        {
            title : "Curie Stats", 
            subtitle : "first node app"
        })
})

app.listen(3000)
