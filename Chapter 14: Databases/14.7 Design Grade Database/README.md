<h1>14.7 Design Grade Database</h1>
<p>Imagine a simple database storing information for students' grades. <br>Design what this database might look like and provide a SQL query to return a list of the honor roll students (Top 10%), sorted by their grade point average.
</p>

<br>
<h3>Thought process to solve this.</h3>
I want a way to create a database that will be able to be stored on github and allow for sql quering. My work with Memorable Nights was working with SQLite3 which creates a db file, so I decided to go that route for database. Then to simplifiy the installation process I used node.js to instantiate the process and save it all on my system.
<br> <br>
Now it was time to create a database. I decided to just go for a simple 3 table system one for students, one for classes, and a joiner with the grades. 

<br>
Now I needed sample data since I was using node.js to get the database up it was pretty simple to just use a for loop to set up 100 students and get a random grade for each class for each student.

<br>
Now time for the actual problem. I started with getting the avg of each persons grade and than sorting it by their avg and limiting it by the number of students divided by 10. 
This kind of worked but after checking the book it informed me that while this kind of worked we need to take into account that we wanted not the top 10 students but students with grades that are higher than 10% of the grades so if there was a tie like a bunch of students getting 100% than we need to include them.
<br>
<br>
To fix this I created a sql statement that would get the avgs of all the students than get the minimum of the top ten students. I then added that to the main select statement as a where clause. This allowed me to get the top ten percent of the class including ties. 
<br>
<br>
<h2>Final Thoughts</h2>
After reading the solution that Cracking the Coding Interview provides, I was surprised to find that there was a keyword percent inside of SQL query however it is not avaliable for sqlite3; as well as declaring outputs of select statements for later using using the declare and set key words.<br> 
So that shows to me that I might need to be more considerate in terms of what type of frameworks and technologies I use. There was also notes about being mindful of complexity over flexability. The example it provided was what if a class has multiple professors and the table only allows for one professor. Adding a class to professor table makes sense in some scenario but it also adds the complexity of adding more joins and other techniques that would be needed for sql statements making it more expensive and time consuming to use. <br><br>
This exercize was benifical because it allowed me to sharpen my database making and quering skills as well as showing me that I need to keep in mind complexity over flexability is an important ratio to keep in mind.