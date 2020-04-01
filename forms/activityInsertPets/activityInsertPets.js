/*
ACTIVITY: practice with INSERT
  On the database server, create a copy of your pets table and 
  all of the data in it using this sql command: 
      CREATE TABLE petInventory 
      SELECT *
      FROM pets;
  Then go to the 'activityInsertPets' form. Change it so it 
  inserts the new pet into your new 'petInventory' database. 
*/

btnInptSubmit.onclick=function(){
    let name = inptPetName.value
    let animalType = inptAnimalType.value.toLowerCase()
    let query = "INSERT INTO petInventory (petName,petType) VALUES ('" + name + "', '" + animalType + "')" //refer to email
    //alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ksw80857&pass=VTEHome8-5!&database=ksw80857&query=" + query)

    if (req.status == 200) {
        if (req.responseText == 500) {
            NSB.MsgBox("You have successfully added the pet to petInventory!") //refer to email
        } else
            NSB.MsgBox("There was a problem with adding the pet to the petInventory database.") //refer to email
    } else {
        NSB.MsgBox("There was an error");
    }  
}
