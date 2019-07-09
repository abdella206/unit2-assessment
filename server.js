const express = require('express');
const methodOverride = require('method-override');
const db = require('./models');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));
app.use(methodOverride('_method'));

// WRITE YOUR ROUTES HERE /////////////////////




app.get('/', function (req, res) {
    db.widget.findAll()
        .then(function (widgets) {
            res.render('index', { widgets })
        })

})



app.post('/', function (req, res) {
    db.widget.create({
        description: req.body.description,
        quantity: req.body.quantity
    }).then(function (post) {
        res.redirect('/')
    })


})







app.delete('/:id', function (req, res) {
    db.widget.destroy({
        where: { id: req.params.id }
    }).then(function (post) {
        res.redirect('/')
    })


})









// YOUR ROUTES ABOVE THIS COMMENT /////////////

app.listen(3000);
