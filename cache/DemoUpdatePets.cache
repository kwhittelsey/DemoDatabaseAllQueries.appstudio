/*
Update pet name (assume pet names are unique)
  Algorithm
  1. get all the pets from the database
  2. get the name of the pet they want to update. 
  3. get the name they want to use for the new name
  3. see if there are any pets with the original name in the database
  4. if there are not any in the database, tell them so and done
  5. if there is a pet with the original name in the database, run query (ajax)
         -if transit works, see if .responseText is 500 - if it is, 
          Delete worked - tell them so
         -if .responseText is not 500, tell them delete didn't work
    > if transit didn't work, tell them transit error
*/

DemoUpdatePets.onshow=function(){
    // get the data to populate the dropdown with names from database
    let query = "SELECT petName FROM pets"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=" + pw + "&database=clc90595&query=" + query)

    if (req.status == 200) { //transit worked.
            allPetNames = JSON.parse(req.responseText)
            // names now in results array - load names into the dropdown
            selToChange.clear()
            for (i = 0; i <= allPetNames.length - 1; i++)
                selToChange.addItem(allPetNames[i])
    } else {
        // transit error
        NSB.MsgBox(`Error: ${req.status}`);
    }  

}

btnSubmit4.onclick=function(){
    let newName = inptUpdate.value
    let oldName = selToChange.value
    
    let found = false
    for (i = 0; i <= allPetNames.length - 1; i++) {
        // console.log(`FOUND IS false and name is ${allPetNames[i]}`)
        if (oldName == allPetNames[i]) {
            found = true
            break
        }
     }   
    if (found == false) 
       NSB.MsgBox("That pet name is not in the database.")
    else if (found == true) {
        query = "UPDATE pets SET petName =" + '"' + newName + '"' + " WHERE petName = " + '"' + oldName + '"'
        //alert(query)
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=" + pw + "&database=clc90595&query=" + query)

        if (req.status == 200) { //transit worked.
            if (req.responseText == 500) {   // means the update succeeded
                NSB.MsgBox(`You have successfully changed the pet name!`)
                // reset controls to original state
                inptUpdate.value = ""
                selToChange.value = ""
            } else
                NSB.MsgBox(`There was a problem changing the pet name.`)
        } else 
            // transit error
            NSB.MsgBox(`Error: ${req.status}`);
    } // found is true 
}



