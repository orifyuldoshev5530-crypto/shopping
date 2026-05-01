/* callback   function:
   define     callback
   callback   function */


// define - sync
/*  function devision(a, b) {
  return a % b;
 }

 // Call 
 const result = devision(7, 4);
 console.log(result); */


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
        division(12, 0, function (err, data) {
            if (err) {
                console.log("ERROR", err);
            } else {
                console.log("Result", data);
                console.log("...");
                division(12, 0, function (err, data) {
                    if (err) {
                        console.log("ERROR", err);
                    } else {
                        console.log("Result", data);
                        console.log("...");
                    }
                });
            }
        });
    }
});
