const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const mysql = require('mysql');



const con = mysql.createConnection(
{
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nhien',
}

);

con.connect(function(err)
{
    if(err) throw err;
    console.log("Connected");
});

/*
var sql = "create table student (id int AUTO_INCREMENT PRIMARY KEY , name varchar(200), password varchar(25))";
con.query(sql,function(err,result)
{
    if(err) throw err;
    console.log("table created");
}
);
*/





// var sql = "CREATE TABLE AppUser (userID INT AUTO_INCREMENT PRIMARY KEY,fullname NVARCHAR(100),email VARCHAR(100),phoneNumber VARCHAR(11),sex NVARCHAR(5) CHECK (sex IN ('Nam', 'Nữ')),username VARCHAR(50),userPassword VARCHAR(30),userStatus INT)";
// con.query(sql,function(err,result)
// {
//     if(err) throw err;
//     console.log("table created");
// }
// );


// var sql = "CREATE TABLE Board (" +
//           "boardID INT AUTO_INCREMENT PRIMARY KEY," +
//           "boardName NVARCHAR(100)," +
//           "boardStatus INT," +
//           "createdDate DATETIME" +
//           ")";
// con.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log("table created Board");
// });

// var sql = "ALTER TABLE Board ADD COLUMN userID INT";

// con.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log("Column userID added to Board table");
// });



// var sql = "CREATE TABLE List (" +
//           "listID INT AUTO_INCREMENT PRIMARY KEY," +
//           "listName NVARCHAR(100)," +
//           "process FLOAT" +
//           ")";

// con.query(sql, function(err, result) {
//    if (err) throw err;
//    console.log("Table created TABLE List");
// });

// var sql = "ALTER TABLE List ADD COLUMN boardID INT";

// con.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log("Column boardID added to List table");
// });



// var sql = "CREATE TABLE CardOfList (" +
//           "cardID INT AUTO_INCREMENT PRIMARY KEY," +
//           "cardName NVARCHAR(100)," +
//           "content TEXT," +
//           "cardStatus INT" +
//           ")";

// con.query(sql, function(err, result) {
//    if (err) throw err;
//    console.log("Table created CardOfList");
// });

// var sql = "ALTER TABLE CardOfList ADD COLUMN listID INT";

// con.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log("Column listID added to CardOfList table");
// });


// var sql = "CREATE TABLE Reminder (" +
//           "reminderID INT AUTO_INCREMENT PRIMARY KEY," +
//           "reminderName NVARCHAR(100)," +
//           "reminderContent TEXT," +
//           "dueDate DATETIME," +
//           "repeatCount INT," +
//           "reminderStatus INT" +
//           ")";

// con.query(sql, function(err, result) {
//    if (err) throw err;
//    console.log("Table created Reminder");
// });

// var sql = "ALTER TABLE Reminder ADD COLUMN cardID INT";

// con.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log("Column cardID added to Reminder table");
// });


// con.connect(function(err) {
//     if (err) throw err;
//     console.log('Connected to MySQL database');
  
//     // Thêm dữ liệu vào bảng AppUser
//     insertAppUser('Thien', 'conggthien17@gmail.com', '0916027170', 'Nam', 'congthien123', 'thienvip123', 1);
//     insertAppUser('Tuan', 'conggthien17@gmail.com', '0916027170', 'Nam', 'huynhanhtuan', 'tuanga123', 1);
  
//     // Thêm dữ liệu vào bảng Board
//     insertBoard('Công việc trong ngày', 1, 1, '2023-09-22');

//     insertBoard('Công việc trong tuần', 1, '1', '2023-09-22');
//     insertBoard('Dự án cá nhân', 1, '2', '2023-09-22');
  
//     // Thêm dữ liệu vào bảng List
//     insertList('List name', 0.4, '1');
//     insertList('List name', 0.5, '1');
//     insertList('List name', 0.7, '2');
//     insertList('List name', 0.3, '2');
//     insertList('List name', 1.0, '3');
  
//     // Thêm dữ liệu vào bảng CardOfList
//     insertCardOfList('Card name', 'Ghi chú', 1, '1');
//     insertCardOfList('Card name', 'Ghi chú 2', 0, '1');
//     insertCardOfList('Card name', 'Ghi chú', 0, '2');
//     insertCardOfList('Card name', 'Ghi chú', 1, '3');
//     insertCardOfList('Card name', 'Ghi chú', 0, '4');
//     insertCardOfList('Card name', 'Ghi chú', 1, '5');
//     insertCardOfList('Card name', 'Ghi chú', 1, '5');
  
//     // Thêm dữ liệu vào bảng Reminder
//     insertReminder('Ghi chú trong này', '------------', '2023-02-12', 2, 1, '1');
//     insertReminder('Ghi chú trong này', '------------', '2023-02-12', 3, 0, '2');
//     insertReminder('Ghi chú trong này', '------------', '2023-02-12', 1, 1, '3');
//     insertReminder('Ghi chú trong này', '------------', '2023-02-12', 5, 1, '4');
//     insertReminder('Ghi chú trong này', '------------', '2023-02-12', 5, 0, '5');
  

  
//     // Đóng kết nối sau khi thêm dữ liệu
//     con.end();
//   });
  
//   function insertAppUser(fullname, email, phoneNumber, sex, username, userPassword, userStatus) {
//     const sql = "INSERT INTO AppUser (fullname, email, phoneNumber, sex, username, userPassword, userStatus) VALUES (?, ?, ?, ?, ?, ?, ?)";
//     const values = [fullname, email, phoneNumber, sex, username, userPassword, userStatus];
  
//     con.query(sql, values, function(err, result) {
//       if (err) throw err;
//       console.log(`Inserted a new row into AppUser with ID: ${result.insertId}`);
//     });
//   }
  

//   function insertBoard(boardName, userID, boardStatus, createdDate) {
//     const sql = "INSERT INTO Board (boardName, userID, boardStatus, createdDate) VALUES (?, ?, ?, ?)";
//     const values = [boardName, userID, boardStatus, createdDate];
  
//     con.query(sql, values, function(err, result) {
//       if (err) throw err;
//       console.log(`Inserted a new row into Board with ID: ${result.insertId}`);
//     });
//   }
  
  
//   function insertList(listName, process, boardID) {
//     const sql = "INSERT INTO List (listName, process, boardID) VALUES (?, ?, ?)";
//     const values = [listName, process, boardID];
  
//     con.query(sql, values, function(err, result) {
//       if (err) throw err;
//       console.log(`Inserted a new row into List with ID: ${result.insertId}`);
//     });
//   }
  
//   function insertCardOfList(cardName, content, cardStatus, listID) {
//     const sql = "INSERT INTO CardOfList (cardName, content, cardStatus, listID) VALUES (?, ?, ?, ?)";
//     const values = [cardName, content, cardStatus, listID];
  
//     con.query(sql, values, function(err, result) {
//       if (err) throw err;
//       console.log(`Inserted a new row into CardOfList with ID: ${result.insertId}`);
//     });
//   }
  
//   function insertReminder(reminderName, reminderContent, dueDate, repeatCount, reminderStatus) {
//     const sql = "INSERT INTO Reminder (reminderName, reminderContent, dueDate, repeatCount, reminderStatus) VALUES (?, ?, ?, ?, ?)";
//     const values = [reminderName, reminderContent, dueDate, repeatCount, reminderStatus];
  
//     con.query(sql, values, function(err, result) {
//       if (err) throw err;
//       console.log(`Inserted a new row into Reminder with ID: ${result.insertId}`);
//     });
//   }
  



app.use(bodyparser.json());

app.use(bodyparser.urlencoded({
    extended: true
}));

app.get('/app/studentlist',(req,res)=> {

    let sql ="select * from student";
    let query = con.query(sql,(err,result)=>
    {
        if (err)throw err;
        res.send(JSON.stringify({ "status":200,"error":null,"response":result}));
    }
    )

});

app.post('/app/addStudent',function(req,res,next)
{
    var name = req.body.name;
    var password = req.body.password;

    var sql = `insert into student(name,password) values("${name}","${password}")`;
    con.query(sql,function(err,result)
    {
        if(err) throw err;

        res.json({'status':'successs',id:result.insertId})
    }
    
    );


}

);






    // const username = ("Nhien2");
    // const password1 = ("2"); 

app.get('/app/checkLogin', (req, res) => {
    const username = req.query.name;
    const password1 = req.query.password; 
    const sql = `SELECT * FROM student WHERE name = "${username}" AND password = "${password1}"`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {        
            res.status(200).json({ 'message': 'Login successful' });
        } else {
            res.status(404).json({ 'message': 'Invalid username or password' });
        }        
    });
});

app.post('/app/checkLogin', (req, res) => {
    const username = req.body.name;
    const password1 = req.body.password; 
    const sql = `SELECT * FROM student WHERE name = "${username}" AND password = "${password1}"`;
    con.query(sql, (err, result) => {
        if (err) throw err;

        if (result.length > 0) {        
            res.status(200).json({ 'message': 'Login successful' });
        } else {
            res.status(404).json({ 'message': 'Invalid username or password' });
        }
    });
});


app.listen(3000,() => {
    console.log('Server started on port 3000 ...');
});




