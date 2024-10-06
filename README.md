
  ### content: data.js folder with posts array within posts with following data: -
   title: string,
   content: string,
   userId: string,
  
   ### publishContent: publish posts where the userId matches with the userId from database
   ## database: {
    !this is important
    when user gives the details: -
      {
        no of posts: number
        posts: posted: number
        delay: number in minutes,
        and click on the submit button
        completed: false
        / if the post and posted are the same then completed == true
      }
      store the details in database with that user with the userId extract the session and 
      stores the details{
        token: session.accessToken
      }

   }
   then Even if the user is not logged in his posts will eventually be posted and 
  */