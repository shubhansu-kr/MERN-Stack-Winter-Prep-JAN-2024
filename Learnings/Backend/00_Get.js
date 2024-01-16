const express = require("express");

const portNumber = 5503;
const users = ["John", "Doe"];

let homePage = "Hello World <p> <a href=\"./users\">listuser</a> </p> <p> <a href=\"./addUser\">addUser</a> </p>";

let userForm = `
    <form action="" method="post">
    <label for="inputField">Enter something:</label>
    <input type="text" id="inputField" name="inputField" required>
    <br>
    <input type="submit" value="Submit">
    </form>
`

const app = express();

// route: "/"
app.get('/', (req, res) => {
    res.send(homePage);
});

// route: "/users"
app.get('/users', (req, res) => {
    let userList = "";
    userList = users.reduce((acc, curr) => (acc + curr + " \n"), userList);
    res.send(userList);
});

app.get('/addUser', (req, res) => {
    res.send(userForm);
});

app.post('/addUser', (req, res) => {
    let userData = req.body.firstName;
    console.log(userData);

    res.sendStatus(200);
});

app.get("*", (req, res) => {
    res.send("Looks like you are lost. Go to home. <a href=\"./\">click here</a>");
});

app.listen(portNumber, () => {
    console.log(`Server is listening at port http://localhost:${portNumber}`);
});


/* 

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Portfolio</title>
</head>

<body>

    <div style="font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f9f9f9;">

        <header style="background-color: #333; color: #fff; text-align: center; padding: 20px;">
            <h1 style="margin: 0;">Your Name</h1>
            <p>Web Developer</p>
        </header>

        <section style="margin: 20px;">

            <h2 style="color: #333;">About Me</h2>
            <p>Welcome to my portfolio! I am a passionate web developer with a focus on creating user-friendly and
                responsive websites.</p>
        </section>

        <section style="margin: 20px;">

            <h2 style="color: #333;">Projects</h2>
            <div class="project" style="margin-bottom: 20px;">
                <h3>Project 1</h3>
                <p>Description of Project 1.</p>
            </div>
            <div class="project" style="margin-bottom: 20px;">
                <h3>Project 2</h3>
                <p>Description of Project 2.</p>
            </div>
            <!-- Add more projects as needed -->
        </section>

        <section style="margin: 20px;">

            <h2 style="color: #333;">Contact Me</h2>
            <p>Email: your.email@example.com</p>
            <p>LinkedIn: linkedin.com/in/yourname</p>
            <p>GitHub: github.com/yourusername</p>
        </section>

    </div>

</body>

</html>


*/