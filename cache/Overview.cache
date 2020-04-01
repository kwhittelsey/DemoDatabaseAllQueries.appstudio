/*
*** Slowest thing your app will do it talk to the Database. So minimize 
contact with it. 

Basically there are several standard steps to interacting with a database: 
1. create a query.
2. using an AJAX call to call a program on the DB server that does the following: 
   > logs into your database account on the database server.
   > runs the sql query you sent. 
   > packages the results of the query and other information (ie status code) into 
   an object and returns the object to your app. 
3. see if the transit trip over the Internet to the database server and back worked correctly and that 
   the server was up. 
   > Check the status code that is returned in the object: 200 means the transit was successful and without error.
4. if the transit was successful, now see if the query worked. 
   > check what was returned in the object - it is in the property '.responseText'. 
   > remember, the results returned depend on the query: 
      - could be data (eg. the results of a successful SELECT query) 
      - could be a code 500 - on our database server, this means that a query that 
        doesn't return data (like a DELETE or an UPDATE) worked correctly. 

HINTS for writing DB code correctly:  
1. *** PLAN *** - write an algorithm first before starting to code!
2. Test your query in the database to see if it returns the results you want. 
   If it works correctly, copy and paste it into appStudio and adjust it as needed .
3. Use standard variable names like req and query and result. 
4. Declare the variables you are using in the DB code at the top of the form so you can use them 
   throughout the entire project (eg. 'req'). Then you can use these same variables throughout 
   your project, changing what they hold as needed. 
5. Best practice: retrieve the data/database when the form is first shown (loaded). 
     Then you can move on to the rest of the code that works with the data.
       
WRITING QUERIES IN YOUR CODE
You have to write the query in your code so the program will parse it into the correct 
   sql format for the database server to understand.
   Examples: 
    let query = "SELECT * from myStuff"
    
    let query = "SELECT firstName from myStuff WHERE firstName =" + ' " ' + fname + ' " ' 
    
    This turns into a query that looks like this: 
       SELECT firstName from myStuff WHERE firstNam = "fname"      
    
      
      
// ********************************************************

WRITING CODE

// ********************************************************

1. SELECT query - Lets you get data from the database during runtime.
        
DO TOGETHER 
> Run the project - pick'DemoSelectTypePets' from the menu  
> Walk through the code to see what it does. 
  and then run it. 


// #########################################################
ACTIVITY: practice doing a SELECT query at runtime
  
  Go to the 'activitySelectTypePets' form and add code  
  so the user enters a pet type to display, 
  clicks a button and the program gets all of the 
  pets of that type and displays their names in a textarea 
  control. 

// *********************************************************


2. INSERT - inserting a new pet into the database at runtime - 
getting the information from user.

TOGETHER: INSERT
Together go to 'DemoInsertPets' form
Walk through the code and then run it. 

// #########################################################
ACTIVITY: practice with INSERT
  On the database server, create a copy of your pets table and 
  all of the data in it using this sql command: 
      CREATE TABLE petInventory 
      SELECT *
      FROM pets;
  Then go to the 'activityInsertPets' form. Change it so it 
  inserts the new pet into your new 'petInventory' database. 

// *********************************************************



3. DELETE is a bit of a special case because you can't delete 
a pet that isn't in the database. So you must make sure the 
name the user wants to delete is in the database before you 
try to delete it. 

TOGETHER: DELETE
Together go to 'DemoDelPets' form
Walk through the code and then run it. 

// #########################################################
ACTIVITY 3: 
  In the 'activityDelPets' form, make it interact with your 
  new 'petInventory' database. 
  Change the program so it gets a 'type' from the user, 
  then deletes all pets of that type. 
  You can only use only 2 ajax calls. 

// *********************************************************



4. UPDATE - Like the DELETE, you can't update/change a pet 
that isn't in the database. So you must make sure the pet 
the user wants to update is in the database. 

TOGETHER: UPDATE
Together go to 'DemoUpdatePets' form
Walk through the code and then run it. 

// #########################################################
ACTIVITY 4: 
  In the activityUpdatePets form, use your new 'petInventory' 
  database. 
  Change the program so it changes the petName field for all
  cats to 'Fuzzy' (a mean thing to do - just proof of concept!)

// *********************************************************
*/


btnDemoSelectPetTypes.onclick=function(){
  ChangeForm(DemoSelectTypePets)
}
btnActivitySelectPetTypes.onclick=function(){
    ChangeForm(activitySelectTypePets)
}
btnDemoInsertPets.onclick=function(){
  ChangeForm(DemoInsertPets)
}
btnActivityInsertPets.onclick=function(){
  ChangeForm(activityInsertPets)
}
btnDemoDeletePets.onclick=function(){
  ChangeForm(DemoDelPets)
}
btnActivityDeletePets.onclick=function(){
  ChangeForm(activityDelPets)
}
btnDemoUpdatePets.onclick=function(){
  ChangeForm(DemoUpdatePets)
}
btnActivityUpdatePets.onclick=function(){
    ChangeForm(activityUpdatePets)
}
