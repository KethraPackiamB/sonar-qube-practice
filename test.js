// ❌ Example code with multiple Sonar issues

function getUserData(user) {
    if(user == null){   // ❌ use === instead of ==
        console.log("No user");
    }

    var name = user.name;   // ❌ var usage
    var name = "Guest";     // ❌ redeclaration

    if(true){   // ❌ always true condition
        console.log("This always runs");
    }

    return name;
}

// ❌ Unused function
function calculate(a, b){
    let result = a + b;
    return result;
}

// ❌ Duplicate logic
function diff1(a, b){
    if(a > b){
        return a - b;
    } else {
        return b - a;
    }
}

function diff2(a, b){
    if(a > b){
        return a - b;
    } else {
        return b - a;
    }
}

// ❌ Bug: assignment instead of comparison
function checkValue(x){
    if(x = 10){
        console.log("Value is 10");
    }
}

// ❌ Unused variable
let temp = 100;

getUserData({name: "Kethra"});