const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
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

app.listen(PORT)

