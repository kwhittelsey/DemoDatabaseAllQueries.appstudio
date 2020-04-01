/*
SELECT from database (assume pet names are unique)
 Algorithm
 1. create global variables req and query and results if not already done
 2. create SELECT query
 3. look at query
 4. test SELECT query in Database
 5. run ajax call (which runs the query)
    > if transit works, parse results. 
      > if results is empty, means no pets of that type in DB and tell user
      > if results has something in it, show results
         - build a message with each name
         - output the message into a control
    > if transit didn't work, tell user error in transit
*/
var query = ""
var req = ""
var results = ""

DemoSelectTypePets.onshow=function(){
    // set height of textarea control
    txtResults_contents.style.height = "100px"
}

btnSeePets.onclick=function(){
    query = "SELECT * FROM pets"
    //alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=" + pw + "&database=clc90595&query=" + query)

    if (req.status == 200) { //transit worked.
        // req1.responseText is a JSON object with the results of the query in it.
        // Now to format it in a nicer format that you can work with - 
        // parse it from JSON object (JS Object Notaton) into an array that holds
        // each row as an array in it. 
        
        results = JSON.parse(req.responseText)
        console.log(results)
        
    if (results.length == 0)
        NSB.MsgBox("There are no pets.")
    else {        
        // this is what results look like: 
        // [[47,"Paul","dog"],[23,"Marty","dog"],[34,"Jack","horse"]]  
        //    0                 1                    2
        //   for first row (index 0) in big array: [47,"Paul","dog"]
        //                             0    1      2
        // so to get name of first pet:   arrayName[0][1]

        // take a closer look:
        console.log(`the parsed JSON is ${results}`)
        console.log(`the first row/item in the big array is a small array: ${results[0]}`)
        console.log(`to get to Paul, need results[0][1]: ${results[0][1]}`)

        // output the names of all the dogs
        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][1] + "\n"
        txtResults.value = message
    } // end else

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req.status)
}

