const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);
// look up keywords to learn more :)
const prompts = () => {
    
    return inquirer.prompt([

        {  
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },

        {
            type: 'input',
            name: 'location',
            message: 'Where are you from?',
        },

        {
            type: 'input',
            name: 'gitHub',
            message: 'What is your GitHub user name?',
        },

        {
            type: 'input',
            name: 'linkedIn',
            message: 'What is your LinkedIn URL?',
        },

    ]);
};

const createHTML = (data) => 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1 class="display-4">Hi! My name is ${data.name}</h1>
        <p class="lead">I am from ${data.location}.</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
            <li class="list-group-item">My GitHub username is ${data.gitHub}.</li>
            <li class="list-group-item">LinkedIn: ${data.linkedIn}</li>
        </ul>
    </div>
</div>
</body>
</html>`;

const init = async () => {
    console.log('hi');
    try {
        const data = await prompts();

        const html = createHTML(data);

        await writeFileAsync('index.html', html);

        console.log('Successfully wrote to index.html');
    } catch (err) {
        console.log(err);
    }
};

init();

// console.log(prompts);
// console.log(html);

// prompts()
//     .then((data) => { writeFileAsync("index.html", html(data))

//     .then
    
    // console.log(data);