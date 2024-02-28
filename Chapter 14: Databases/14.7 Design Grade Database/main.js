const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./grade.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
    }
);

db.run("create table student (id int primary key, name text);", []);

db.run("create table class (id int primary key, name text);", [])

db.run("create table enrollement (id int primary key, student_id int, class_id int, grade float, foreign key (student_id) references student(id), foreign key (class_id) references class(id));", [])


var id = 1;
db.each("SELECT * FROM student", function(err, row) {
    console.log(row);
    for (var i = 1; i <=4; i ++){
        db.run("insert into enrollement (id, student_id, class_id, grade) values (?,?,?,?)", [id, row.id, i, Math.floor(Math.random() * 100) + 1]);
        id++;
    }
});

