/* Asychronous function Callback vs Async vs Promise

DEFINE         CALL
Callback       function
async/await    then/catch
promise        then/catch
*/

// Callback 
// Callback to'liq Asychronous function hisoblanmaydi
// Callback da setInterval ham setTimeOut ham birdek ishlayveradi

// define
function division(a, b, callback) {
    if (b === 0) {
        callback("Not divided by zero");
    } else {
        callback(null, a % b);
    }
}

// call
division(12, 0, function (err, data) {
    if (err) {
        console.log("ERROR", err);
    } else {
        console.log("Result", data);
        console.log("...");
    }
});


// Async
// Async larda setInterval ham setTimeOut ham ishlamaydi

async function division(a, b) {
    if (b === 0) {
        throw new Error("Not divided by zero");
    } else {
        return (null, a % b);
    }
}

// call
division(12, 0).then(data => {
    console.log("Result:", data);
    console.log("...");
}).catch(err => {
    console.log("Error division:", err);
});


// Promise

function division(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("Not divided by zero");
        } else {
            setTimeout(() => {
                resolve(a % b);
            }, 5000);
        }
    });
}

// call
division(10, 4).then(data => {
    console.log("Result:", data);
    console.log("...");

    division(10, 4).then(data => {
        console.log("Result:", data);
        console.log("...");

        division(10, 4).then(data => {
            console.log("Result:", data);
            console.log("...");
        }).catch(err => {
            console.log("Error division:", err);
        });
    }).catch(err => {
        console.log("Error division:", err);
    });
}).catch(err => {
    console.log("Error division:", err);
});