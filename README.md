# BlowUp
 A global online photo-sharing platform
 [BlowUp live](https://blowupapp.herokuapp.com/)


<img src="app/assets/images/Screen Shot 2021-08-13 at 9.33.47 AM.png" height="200px" width="auto"/>
```
    <div class="custom-shape-divider-bottom-1628697126">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
    </div>

```

BlowUp is a clone of 500px, a website for photographers who like to display their portfolio.



## Features

- Users can select and upload a photo
  - Add a title and description to the photo
- Users can see all sharing photos or select one of them and see the detail page.
- Users can can comment on a photo on that detail page
- Users can view photos posted by all users on Home Page
- The new users's work are grouped and showed at the top of the feed
```
            <div className="featured-photos">
                <p>Follow to explore new works</p>
                <div className="photos-slices-container">
                    {users.slice(0, 6).map(user => (
                        <div className="photos-with-username">
                            <ul className="photo-item-container">                              
                                {(photoTank[user.id] && photoTank[user.id].length === 3) ? photoTank[user.id].map(photo=> (
                                    <li className="photo-item">
                                        <Link to={`/photos/${photo.id}`} >
                                            <img className="photo-img" src={photo.post} />
                                        </Link>
                                    </li>
                                )): null}     
                            </ul> 
                            <div className="username-profile-photo">
                                {(photoTank[user.id] && photoTank[user.id].length === 3) ? 
                                <p>{user.username}</p> : null
                                }
                            </div>    
                        </div>
                    ))}
                </div>
            </div>
            
```


<img src="app/assets/images/Screen Shot 2021-08-13 at 9.24.04 AM.png" height="200px" width="auto">
- Users have their profile page and they can update their profile photo

## Technologies
BlowUp is a single page application build using ;

## Frontend
- React/Redux, Javascript, Webpack
- SCSS/HTML

## Backend
- Ruby on Rails
- PostgreSQL
  

**Deployment**

- Heroku to deliver BlowUp
- AWS to store uploaded photos


# Future Updates

* User will be able to like or unlike photos
* User will be able to follow other users 
* User will be aable to search for a specific photo or user