/*
Algorithm
1. set up the req and query global variables
2. set up height of the textarea control: 
    txtResults_contents.style.height = "200px"
3. get the type the user entered
4. create a query using this type
5. look at the query in alert
6. test the query on the database server
7. set up the AJAX call
8. get results - see if status = 200
9. if OK transit, get results and parse from JSON
   string to a JS object (array of little arrays, one per
   row returned)
10. if the array length is not 0, means results came back. So
   go through the results array and build a message that contains each name returned that you can output.
11. output the message with the names of the pets into
    control.
12. add else error messages
*/

var query = ""
var req = ""
var petType = ""
var results = ""

activitySelectTypePets.onshow=function(){
     txtTypeNames_contents.style.height = "200px"
}

btnSubmitType.onclick=function(){
    petType = inptPetType.value.toLowerCase()
    query = 'SELECT petType FROM pets'
    alert(query)
    req= Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ksw80857&pass=VTEHome8-5!&database=ksw80857&query=" + query)

    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        console.log(results)
        
    if (results.length == 0)
        NSB.MsgBox("There are no pets.")
    else {        
        console.log(`the parsed JSON is ${results}`)
        console.log(`the first row/item in the big array is a small array: ${results[0]}`)
        console.log(`to get to Paul, need results[0][1]: ${results[0][1]}`)
 
        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][1] + "\n"
        txtTypeNames.value = message
    }

  } else
        NSB.MsgBox("Ther was an error")
}