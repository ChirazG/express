const express = require('express');
const app = express();
//use te9bel ey methode
app.use(express.static(__dirname + '/public'));

//Middleware: fction bsh tji ba3d request eli bsh yb3athha luser w 9bal response eli enti bsh tab3thha
//expl: user y7eb y3ml login, t9oulou user heka mawjoud 3andi fi database wale ken mawjoud 3adih
//Middleware 3andha acces l3 7ajet :1)request mta3 luser 2)mta3 responce 3)fction next()
//next ki enti tnedeha bsh t3adik mel fct melweb lel callback fction eli ba3dha bedhabt
//Middleware tnajem tnedeha b2 7ajet ye b app.use() bsh temshilek 3al route lkoul waella tnedeha fi koul route

//lenna bsh na3mel condition mta3 lwa9t
const t = new Date(Date.now());
console.log(t)
const authMidelware = (req, res, next) => {
const day = t.getDay();
const hour = t.getHours() - 1;
console.log(day);
console.log(hour);
    if ((day>0)&&(day<7)&&(hour>=9)&&(hour<=17)){
        console.log('user authorized')
        next()
    }
    else {
        res.send('user is not authorized')
    }; 
};
//ki n7eb authMidelware temshi 3ala route home expl app.get('/', authMidelware,(req,res)=>{}...)
//ki n7eb authMidelware temshi 3alroute lkol na3ml app.use() 
app.use(authMidelware);

//ken jetek path '/view' t3adeli leroute hedha eli 7ashti bih './routes/view.js'
//houwa besh yekhou eroute '/view' w besh yet3ada lel les route eli ghadi '/', '/contact', '/services'
app.use('/view', require('./routes/view.js'));


app.listen(5000, (err) => {
    if (err) console.log(err);
    else console.log('server is running on port 5000');
})