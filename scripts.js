//Array Practice
var winners = ['Jeanette', 'Jeff', 'Carlos', 'Cody', 'James'];

// console.log(winners[4]);
function makeWinner(name) {
    console.log(name + ' is a winner!');
}

// makeWinner('Cody');

for (var i = 0; i < winners.length; i++) {
    makeWinner(winners[i]);
    if (winners[i] == 'Jeff') {
        console.log('we have a Jeff on the list!');
    }
}


//Object Practice

var winner1 = {
    firstName: 'Jeff',
    lastName: 'Sedrel',
    favoriteNumber: 7,
    classList: ['Intro to Technology', 'Foundations of Web Development']
}

var winner2 = {
    firstName: 'Jeanette',
    lastName: 'George',
    favoriteNumber: 11,
    classList: [{
        className: 'Intro to Technology',
        instructor: 'Carlos',
    }, {
        className: 'Foundations of Web Development',
        instructor: 'Vanessa'
    }]
}

// console.log(winner2.firstName);
// console.log(winner1.firstName);

// console.log(winner1.favoriteNumber);
// console.log(winner2.favoriteNumber);

console.log(winner2.classList[0].instructor);

//Conditionals
if (1 + 1 == 3) {
    console.log('it is so true!');
} else if (1 + 1 == 4) {
    console.log('the second choice is true');
} else {
    console.log('That just was not true...');
}