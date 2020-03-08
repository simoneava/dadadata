//this is now irrelevant 

const Datastore = require ("nedb");

const db = new Datastore({filename: "dada.db", autoload: true});

const daddies = {name: "Duchamp"};

db.insert(daddies, (err, newDoc) => {
    if (err) {
        console.log(err);
    }

    console.log(newDoc);
});



