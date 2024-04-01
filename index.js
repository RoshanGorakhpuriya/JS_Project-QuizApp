let readlineSync = require("readline-sync");
let userName = readlineSync.question("Enter the name of participants\n");
let score = 0;

const dataBase = {
        data : [
            {
                question : `How can we declare variable in javascript?`,
                option : {
                a : "var",
                b : "const",
                c : "let",
                d : "All the above",
                },
                correctAnswer : "d",
            },
            {
                question : `How can be iterate in object?`,
                option : {
                a : "for-in",
                b : "for-of",
                c : "for",
                d : "while"
                },
                correctAnswer : "a",
            },
            {
                question : `How many types of execution context?`,
                option : {
                    a : "Two",
                    b : "Three",
                },
                correctAnswer : "a"
            },
        ]
}

const leaderBoard = {
    data : [
        {
            name : "Anuj",
            score : 3,
        },
        {
            name : "Ashish",
            score : 2,
        },
        {
            name : "Akshay",
            score : 1,
        }
    ]
}

function checkLeaderBoard(leaderBoard)
{
    leaderBoard.data.push({name : userName , score : score});
    let sortedLeader = leaderBoard.data.sort((a , b) =>b.score - a.score);
    for(let leader of sortedLeader)
    {
        console.log(`${leader.name} - Score : ${leader.score}`);
    }
}

function checkAnswer(userAnswer , correctAnswer)
{
    if(userAnswer === correctAnswer)
    {
        console.log("Yes , It is right\n");
        score++;
    }
    else
    {
       console.log("Incorrect ans\n");
       console.log(`Right answer is ${correctAnswer}\n`);
    }
}

function showQuestionAnswer(dataBase)
{
    for(let i=0 ; i<dataBase.data.length ; i++)
    {
        console.log(`Q.${i+1} - ${dataBase.data[i].question}`);
        for(let key in dataBase.data[i].option)
        {
             console.log(`${key} - ${dataBase.data[i].option[key]}`)  
        }
        let userAnswer = readlineSync.question("Enter the correct answer from option a/b/c/d -  ");
        checkAnswer(userAnswer , dataBase.data[i].correctAnswer);
    }
}
showQuestionAnswer(dataBase);
console.log(`Final score of participants ${userName} is ${score}\n`);
console.log("Chech out position on the leaderBoard\n")
checkLeaderBoard(leaderBoard);
