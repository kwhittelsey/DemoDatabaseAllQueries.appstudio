// remember, allPetData declared globally in Demo Delete form
/*
Delete pets of a given type from database (assume pet names are unique)
  Algorithm
  1. get all the pets from the database
  2. get the type of the pet they want to delete. 
  3. see if there are any pets of that type in the database
  4. if there are not any in the database, tell them so and done
  5. if there are pet(s) of that type in the database, run query (ajax)
         -if transit works, see if .responseText is 500 - if it is, 
          Delete worked - tell them so
         -if .responseText is not 500, tell them delete didn't work
    > if transit didn't work, tell them transit error
*/

var allPetDataDel

activityDelPets.onshow=function(){
    query = "SELECT * FROM petInventory" //refer to email
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ksw80857&pass=VTEHome8-5!&database=ksw80857&query=" + query)

    if (req.status == 200) {
        allPetDataDel = JSON.parse(req.responseText)
        console.log(results)
    } else {
        NSB.MsgBox(`Error: ${req.status}`);
    }  
}

btnDeleteActivity.onclick=function(){
    let petTypeDel = inptTypeDel.value
    let found = false
    for (i = 0; i <= allPetDataDel.length - 1; i++) {
        if (petTypeDel == allPetDataDel[i][1])
            found = true
            break
    }
    if (found == false) 
       NSB.MsgBox("That pet type is not in the petInventory database.") //refer to email
    else if (found == true) {
      let query = "DELETE FROM petInventory WHERE petType = " + '"' + petTypeDel + '"' //refer to email
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=" + pw + "&database=clc90595&query=" + query)

      if (req.status == 200) {
            if (req.responseText == 500)
                NSB.MsgBox(`You have successfully deleted the pet type ${petTypeDel} into the petInventory database`) //refer to email
            else
                NSB.MsgBox(`There was a problem deleting ${petTypeDel} from the petInventory database.`) //refer to email
      } else {
        NSB.MsgBox("There was an error");
      }  
  }
}
