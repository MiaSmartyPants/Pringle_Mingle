
# Pringle Mingle

Pringle Mingle is a web application designed to help people meet as many people as they can during online events.   Pringle Mingle transforms an hour-long, headache inducing sorting process of creating groups of people who have met each other the least, into seconds with a simple, user-friendly interface, combined with an erudite database and sorting algorithm.



## Demo

https://server-6cav.onrender.com/

Log into Gmail with this test user.
| Email             | Password                                                              |
| ----------------- | ------------------------------------------------------------------ |
| highnote143@gmail.com | PringleMingleRocks!1 |

OR 

Create an account with your own organization email for full experience




## Features

- Organization email verification, allows for anyone with the organization email to access the same data and collaborate
- Send an invite to people who do not have an organization email so they can collaborate
- Upload csv files of names
- User Login with Auth0



## Tech Stack

<table align="center">
  <tr>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168923681-ece848fc-5700-430b-957f-e8de784e9847.png" width="48" height="48" alt="html" />
      <br>html
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168924521-589f95da-069a-496a-bcc1-ee6dd132ff12.png" width="48" height="48" alt="CSS" />
      <br>CSS
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168977094-6a5073a2-2f48-4f5a-ae0e-ed1421a678c6.png" width="48" height="48" alt="JavaScript" />
      <br>JavaScript
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168976819-15a1f4e0-29cf-4ac0-94a7-1f15eee374a1.png" width="48" height="48" alt="postgreSQL" />
      <br>postgreSQL
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168978951-5ac2af5e-c911-4e59-b493-683071cf1860.png" width="48" height="48" alt="Express" />
      <br>Express
    </td>
    </tr>
  <tr>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979311-4a486cad-32c8-46f4-a5da-912fdc51b2d6.png" width="48" height="48" alt="React" />
      <br>React
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979848-733f7090-0f78-401a-9ceb-4267231abef7.png" width="48" height="48" alt="Node" />
      <br>Node
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168980647-1690f9de-bf0e-4318-93cb-1b2ba3701ded.png" width="48" height="48" alt="Bootstrap" />
      <br>Bootstrap
    </td>
    <td align="center" width="96">
        <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/j8z02ssteea4zj1k1nyz" width="48" height="48" alt="Render" />
      <br>Render
    </td>
    <td align="center" width="96">
        <img src="https://pbs.twimg.com/profile_images/1273938647297994753/2mvrQgmu_400x400.jpg" width="48" height="48" alt="Email js" />
      <br>Email Js
    </td>
  </tr>
</table>


## Screenshots
Database Model
<<<<<<< HEAD
![App Screenshot](https://www.dropbox.com/s/k4ic8oto73yaeor/Screen%20Shot%202022-11-23%20at%207.54.24%20AM.png?dl=0)
=======

<img src="databaseSchema.png" width='300' />
>>>>>>> 8429fe27245aea35bbaa62ee1e92563904467ba0


## Installation

1. Clone the repo: 
   ```
   git clone https://github.com/MiaSmartyPants/Pringle_Mingle
   ```
2. Take out the owner's git:
    ```
    git init
    ```

3. Go to server folder 
    ```
    cd server
    ```

4. Install all NPM packages using this in the root directory:
    ```
    npm install
    ```
5. Database setup:
    - Inside your server folder, create an .env file with:
        ```
         touch .env
         ```
      
    - Inside your .env add:
        ```
         postgres://localhost:5432/final_project
         ```
    - Go Back to Terminal

    - Run the following to restore the DB dump file that the project already contain:
         ```
        psql -U postgres -f db.sql
         ```
6. Start the app by using in client and server folder:    
    ```
    npm start
    ```


## Testing
<<<<<<< HEAD

To run tests on the terminal:
* On client side run the following command:
    ```
    npm test
    ```


## Future Development
- Redirect user to dashboard after welcome in button is pressed
- CSS for tables and color scheme
- Redesign layout for displaying groups 
=======

To run tests on the terminal:
* On client side run the following command:
    ```
    npm test
    ```

>>>>>>> 8429fe27245aea35bbaa62ee1e92563904467ba0

## Future Development
- Redirect user to dashboard after welcome in button is pressed
- CSS for tables and color scheme
- Redesign layout for displaying groups 


