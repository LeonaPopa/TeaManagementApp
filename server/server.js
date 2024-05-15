import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

app.get('/', (req, res) =>{
    const sql = "SELECT * FROM tea";
    db.query(sql, (err, result)=>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.get('/view/:id', (req, res) =>{
    const sql = "SELECT * FROM tea WHERE id = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, result)=>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })

})


app.post('/tea', (req, res)=>{
    const sql = "INSERT INTO tea (`name`, `level`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.level
    ]
    db.query(sql, [values], (err, result) =>{
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.put('/edit/:id', (req, res)=>{
    const sql = "UPDATE tea SET `name`=?, `level`=? WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [req.body.name, req.body.level, id], (err, result) =>{
        if(err) return res.json({Message:"Error inside server"});
        return res.json(result);
    })
})

app.delete('/delete/:id', (req, res) =>{
    const sql = "DELETE FROM tea WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result)=>{
        if(err) return res.json({Message:"Error on server side"});
        return res.json(result);
    })
})
//reviews

app.delete('/reviews/delete/:id', (req, res) =>{
    const sql = "DELETE FROM review WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result)=>{
        if(err) return res.json({Message:"Error on server side"});
        return res.json(result);
    })
})

app.get('/reviews', (req, res) => {
    const sql = "SELECT * FROM review";
    db.query(sql, (err, result) => {
        if (err) return res.json({ Message: "Error inside server" });
        return res.json(result);
    });
});
app.get('/reviews/:tea_id', (req, res) => {
    const sql = "SELECT * FROM review WHERE tea_id = ?";
    const tea_id = req.params.tea_id;
    db.query(sql, [tea_id], (err, result) => {
        if (err) return res.json({ Message: "Error inside server" });
        return res.json(result);
    });
});

app.post('/reviews/review', (req, res) => {
    const sql = "INSERT INTO review (`person`, `description`, `tea_id`) VALUES (?)";
    const values = [
        req.body.person,
        req.body.description,
        req.body.tea_id];
    db.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});
app.post('/tea', (req, res)=>{
    const sql = "INSERT INTO tea (`name`, `level`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.level
    ]
    db.query(sql, [values], (err, result) =>{
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.put('/reviews/:id', (req, res) => {
    const sql = "UPDATE review SET person = ?, description = ? WHERE id = ?";
    const values = [req.body.person, req.body.description, req.params.id];
    db.query(sql, values, (err, result) => {
        if (err) return res.json({ Message: "Error inside server" });
        return res.json(result);
    });
});

app.delete('/reviews/:id', (req, res) => {
    const sql = "DELETE FROM review WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ Message: "Error on server side" });
        return res.json(result);
    });
});

app.listen(8081, ()=>{
    console.log("listening");
})

export default app;
