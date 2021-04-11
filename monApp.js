const express =require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/images', express.static('images'));
app.use('/public', express.static('public'));


app.get('/', (req, res)=> {
    res.render('accueil.ejs');
});

app.get('/depannage', (req, res)=> {
    res.render('depannage.ejs');
});


app.listen(3822, ()=> {
    console.log("j'écoute le port 3822 !!!")
});