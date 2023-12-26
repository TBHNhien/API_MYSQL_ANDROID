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


//phần REGISTER
// app.post('/app/register', (req, res) => {
//     const usname = req.body.username;
//     const userPass = req.body.userPassword;

//     // Kiểm tra xem tên người dùng đã tồn tại chưa
//     const checkUserQuery = `SELECT * FROM appuser WHERE username = "${usname}"`;
//     con.query(checkUserQuery, (err, result) => {
//         if (err) throw err;

//         if (result.length > 0) {
//             // Tên người dùng đã tồn tại
//             res.status(400).json({ 'message': 'Username already exists' });
//         } else {
//             // Tên người dùng chưa tồn tại, thêm vào cơ sở dữ liệu
//             const insertUserQuery = `INSERT INTO appuser (username, userPassword) VALUES ("${usname}", "${userPass}")`;
//             con.query(insertUserQuery, (err, result) => {
//                 if (err) throw err;
//                 res.status(201).json({ 'message': 'Registration successful' });
//             });
//         }
//     });
// });

app.post('/app/register', (req, res) => {
    const username = req.body.username;
    const userPassword = req.body.userPassword;
    const fullname = req.body.fullname;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const sex = req.body.sex;
    const userStatus = req.body.userStatus;

    // Kiểm tra xem tên người dùng đã tồn tại chưa
    const checkUserQuery = `SELECT * FROM AppUser WHERE username = "${username}"`;
    
    con.query(checkUserQuery, (err, result) => {
        if (err) throw err;

        if (result.length > 0) {
            // Tên người dùng đã tồn tại
            res.status(400).json({ 'message': 'Username already exists' });
        } else {
            // Tên người dùng chưa tồn tại, thêm vào cơ sở dữ liệu
            const insertUserQuery = `
                INSERT INTO AppUser (username, userPassword, fullname, email, phoneNumber, sex, userStatus)
                VALUES ("${username}", "${userPassword}", "${fullname}", "${email}", "${phoneNumber}", "${sex}", "${userStatus}")
            `;

            con.query(insertUserQuery, (err, result) => {
                if (err) throw err;
                res.status(201).json({ 'message': 'Registration successful' });
            });
        }
    });
});




//Phần Login :


// app.post('/app/checkLogin1', (req, res) => {
//     const username = req.body.name;
//     const password1 = req.body.password; 
//     const sql = `SELECT * FROM student WHERE name = "${username}" AND password = "${password1}"`;
//     con.query(sql, (err, result) => {
//         if (err) throw err;

//         if (result.length > 0) {        
//             res.status(200).json({ 'message': 'Login successful' });
//         } else {
//             res.status(404).json({ 'message': 'Invalid username or password' });
//         }
//     });
// });

app.post('/app/checkLogin', (req, res) => {
    const email = req.body.email;
    const userPass= req.body.userPassword; 
    const sql = `SELECT * FROM appuser WHERE email = "${email}" AND userPassword = "${userPass}"`;
    con.query(sql, (err, result) => {
        if (err) throw err;

        if (result.length > 0) {        
            res.status(200).json({ 'message': 'Login successful' });
        } else {
            res.status(404).json({ 'message': 'Invalid username or password' });
        }
    });
});

//phần Foget pass
// app.post('/app/forgot-password', (req, res) => {
//     const email = req.body.email;

//     // Kiểm tra xem email tồn tại trong cơ sở dữ liệu không
//     const checkEmailQuery = `SELECT * FROM AppUser WHERE email = "${email}"`;
    
//     con.query(checkEmailQuery, (err, result) => {
//         if (err) throw err;

//         if (result.length > 0) {
//             // Cập nhật mật khẩu về mặc định (1) cho người dùng
//             const updatePasswordQuery = `UPDATE AppUser SET userPassword = "1" WHERE email = "${email}"`;

//             con.query(updatePasswordQuery, (updateErr, updateResult) => {
//                 if (updateErr) throw updateErr;

//                 // Gửi email reset mật khẩu tới địa chỉ email đã cung cấp
//                 // Đoạn code gửi email 

//                 // Trả về thông báo thành công
//                 res.status(200).json({ 'message': 'Password reset email sent successfully' });
//             });
//         } else {
//             // Email không tồn tại trong cơ sở dữ liệu
//             res.status(404).json({ 'message': 'Email not found' });
//         }
//     });
// });

const nodemailer = require('nodemailer');
// Định nghĩa transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tbaohaonhien1995@gmail.com',
        pass: 'lfoacrrmwkbgerwb'
    }
});

app.post('/app/forgot-password', (req, res) => {
    const email = req.body.email;
    const randomCode = generateRandomCode(); // Hàm tạo mã xác nhận ngẫu nhiên
    const newPassword = randomCode; // Mật khẩu mới mặc định

    const mailOptions = {
        from: 'tbaohaonhien1995@gmail.com', // Điều này cần phải là địa chỉ email có thể gửi được
        to: email,
        subject: 'Mã xác nhận đặt lại mật khẩu',
        text: `Mã xác nhận của bạn là ${randomCode}.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ 'message': 'Internal Server Error' });
        } else {
            console.log('Email sent: ' + info.response);

            const updatePasswordQuery = `UPDATE AppUser SET userPassword = "${newPassword}" WHERE email = "${email}"`;
            con.query(updatePasswordQuery, (updateError, updateResult) => {
                if (updateError) {
                    console.log(updateError);
                    res.status(500).json({ 'message': 'Internal Server Error' });
                } else {
                    console.log('Password updated successfully');
                    res.status(200).json({ 'message': 'Email sent successfully' });
                }
            });
        }
    });
});

// Hàm tạo mã xác nhận ngẫu nhiên
function generateRandomCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}


//* Phương thức cho BOARD */
// Phương thức thêm mới bảng
app.post('/api/newboard', (req, res) => {
    const { boardName, boardStatus, userID } = req.body;
    const createdDate = new Date(); 
  
    const insertQuery = 'INSERT INTO Board (boardName, boardStatus, createdDate, userID) VALUES (?, ?, ?, ?)';
    const values = [boardName, boardStatus, createdDate, userID];
  
    con.query(insertQuery, values, (err, result) => {
      if (err) {
        console.error('Error inserting new board:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        console.log('New board inserted successfully');
        res.status(200).json({ message: 'New board inserted successfully' });
      }
    });
});

//HÀM DEL
app.delete('/api/deleteboard/:id', (req, res) => {
    const boardID = req.params.id;
  
    const deleteQuery = 'DELETE FROM Board WHERE boardID = ?';
  
    con.query(deleteQuery, [boardID], (err, result) => {
      if (err) {
        console.error('Error deleting board:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        if (result.affectedRows > 0) {
          console.log('Board deleted successfully');
          res.status(200).json({ message: 'Board deleted successfully' });
        } else {
          console.log('Board not found');
          res.status(404).json({ message: 'Board not found' });
        }
      }
    });
});

//Hàm Edit
app.put('/api/updateboard/:id', (req, res) => {
    const boardID = req.params.id;
    const { boardName, boardStatus, createdDate, userID } = req.body;
  
    const updateQuery = 'UPDATE Board SET boardName = ?, boardStatus = ?, createdDate = ?, userID = ? WHERE boardID = ?';
    const values = [boardName, boardStatus, createdDate, userID, boardID];
  
    con.query(updateQuery, values, (err, result) => {
      if (err) {
        console.error('Error updating board:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        if (result.affectedRows > 0) {
          console.log('Board updated successfully');
          res.status(200).json({ message: 'Board updated successfully' });
        } else {
          console.log('Board not found');
          res.status(404).json({ message: 'Board not found' });
        }
      }
    });
});

//hàm GETALL
app.get('/api/board', (req, res) => {
    const selectQuery = 'SELECT * FROM Board';

    con.query(selectQuery, (err, result) => {
        if (err) {
            console.error('Error fetching boards:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            if (result.length > 0) {
                console.log('Boards fetched successfully');
                res.status(200).json(result);
            } else {
                console.log('No boards found');
                res.status(404).json({ message: 'No boards found' });
            }
        }
    });
});


//GET BY ID
app.get('/api/board/:id', (req, res) => {
    const boardID = req.params.id;
    const selectQuery = 'SELECT * FROM Board WHERE boardID = ?';

    con.query(selectQuery, [boardID], (err, result) => {
        if (err) {
            console.error('Error fetching board by ID:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            if (result.length > 0) {
                console.log('Board fetched successfully');
                res.status(200).json(result[0]);
            } else {
                console.log('Board not found');
                res.status(404).json({ message: 'Board not found' });
            }
        }
    });
});


/* list*/
//add
app.post('/api/newlist', (req, res) => {
    const { listName, process, boardID } = req.body;
    const insertQuery = 'INSERT INTO List (listName, process, boardID) VALUES (?, ?, ?)';
    const values = [listName, process, boardID];

    con.query(insertQuery, values, (err, result) => {
        if (err) {
            console.error('Error inserting new list:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            console.log('New list inserted successfully');
            res.status(200).json({ message: 'New list inserted successfully' });
        }
    });
});

//delete
app.delete('/api/deletelist/:id', (req, res) => {
    const listID = req.params.id;

    const deleteQuery = 'DELETE FROM List WHERE listID = ?';
    const values = [listID];

    con.query(deleteQuery, values, (err, result) => {
        if (err) {
            console.error('Error deleting list:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            console.log('List deleted successfully');
            res.status(200).json({ message: 'List deleted successfully' });
        }
    });
});

//EDIT
app.put('/api/updatelist/:id', (req, res) => {
    const listID = req.params.id;
    const { listName, process, boardID } = req.body;

    const updateQuery = 'UPDATE list SET listName = ?, process = ?, boardID = ? WHERE listID = ?';
    const values = [listName, process, boardID, listID];

    con.query(updateQuery, values, (err, result) => {
        if (err) {
            console.error('Error updating list:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            console.log('List updated successfully');
            res.status(200).json({ message: 'List updated successfully' });
        }
    });
});

//GETALL
app.get('/api/list', (req, res) => {
    const selectQuery = 'SELECT * FROM list';

    con.query(selectQuery, (err, result) => {
        if (err) {
            console.error('Error fetching lists:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            console.log('Lists fetched successfully');
            res.status(200).json(result);
        }
    });
});

//GET BY ID
app.get('/api/list/:id', (req, res) => {
    const listID = req.params.id;
    const selectQuery = 'SELECT * FROM list WHERE listID = ?';
    const values = [listID];

    con.query(selectQuery, values, (err, result) => {
        if (err) {
            console.error('Error fetching list by ID:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            if (result.length > 0) {
                console.log('List fetched successfully');
                res.status(200).json(result[0]);
            } else {
                console.log('List not found');
                res.status(404).json({ message: 'List not found' });
            }
        }
    });
});

/* CARD */
//ADD
app.post('/api/newcard', (req, res) => {
    const { cardName, content, cardStatus, listID } = req.body;
  
    const insertQuery = 'INSERT INTO cardoflist (cardName, content, cardStatus, listID) VALUES (?, ?, ?, ?)';
    const values = [cardName, content, cardStatus, listID];
  
    con.query(insertQuery, values, (err, result) => {
        if (err) {
            console.error('Error inserting new card:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            console.log('New card inserted successfully');
            res.status(200).json({ message: 'New card inserted successfully' });
        }
    });
});

//DELETE
app.delete('/api/deletecard/:id', (req, res) => {
    const cardID = req.params.id;

    const deleteQuery = 'DELETE FROM cardoflist WHERE cardID = ?';

    con.query(deleteQuery, [cardID], (err, result) => {
        if (err) {
            console.error('Error deleting card:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            console.log('Card deleted successfully');
            res.status(200).json({ message: 'Card deleted successfully' });
        }
    });
});

//EDIT
app.put('/api/updatecard/:id', (req, res) => {
    const cardID = req.params.id;
    const { cardName, content, cardStatus, listID } = req.body;

    const updateQuery = 'UPDATE cardoflist SET cardName = ?, content = ?, cardStatus = ?, listID = ? WHERE cardID = ?';
    const values = [cardName, content, cardStatus, listID, cardID];

    con.query(updateQuery, values, (err, result) => {
        if (err) {
            console.error('Error updating card:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            console.log('Card updated successfully');
            res.status(200).json({ message: 'Card updated successfully' });
        }
    });
});

//GET ALL
app.get('/api/card', (req, res) => {
    const selectQuery = 'SELECT * FROM cardoflist';

    con.query(selectQuery, (err, result) => {
        if (err) {
            console.error('Error fetching cards:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.status(200).json({ cards: result });
        }
    });
});



//GET BY ID
app.get('/api/card/:id', (req, res) => {
    const cardID = req.params.id;

    const selectQuery = 'SELECT * FROM cardoflist WHERE cardID = ?';
    const values = [cardID];

    con.query(selectQuery, values, (err, result) => {
        if (err) {
            console.error('Error fetching card:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            if (result.length > 0) {
                const card = result[0];
                res.status(200).json({ card });
            } else {
                res.status(404).json({ message: 'Card not found' });
            }
        }
    });
});

//GET DETAIL
app.get('/api/card-detail/:id', (req, res) => {
    const cardID = req.params.id;
    const selectQuery = 'SELECT content FROM cardoflist WHERE cardID = ?';
    
    con.query(selectQuery, [cardID], (err, result) => {
        if (err) {
            console.error('Error fetching card content:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            if (result.length > 0) {
                res.status(200).json({ content: result[0].content });
            } else {
                res.status(404).json({ message: 'Card not found' });
            }
        }
    });
});



/*TEST CARD */

app.get('/api/cardoflist', (req, res) => {
    res.json(cardoflistData);
  });


// Định nghĩa API endpoint để thêm bản ghi mới vào bảng cardoflist
app.post('/app/addCardOfList', function(req, res, next) {
    const { cardName, content, cardStatus, listID } = req.body;
  
    // Kiểm tra xem các trường cần thiết đã được cung cấp chưa
    if (!cardName || !listID) {
      return res.status(400).json({ 'status': 'error', 'message': 'Missing required fields.' });
    }
  
    const sql = `INSERT INTO cardoflist (cardName, content, cardStatus, listID) VALUES (?, ?, ?, ?)`;
    const values = [cardName, content, cardStatus, listID];
  
    con.query(sql, values, function(err, result) {
      if (err) {
        console.error('Error executing MySQL query: ' + err.message);
        return res.status(500).json({ 'status': 'error', 'message': 'Internal Server Error.' });
      }
  
      res.json({ 'status': 'success', 'id': result.insertId });
    });
  });
  

app.listen(3000,() => {
    console.log('Server started on port 3000 ...');
});




