import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const followersArray = [
    'tetondan',
    'dustinmyers',
    'justsml',
    'luishrd',
    'bigknell',
    'milklot'
];

const cards_div = document.querySelector('.cards');

followersArray.forEach(data => {
    axios.get(`https://api.github.com/users/${data}`)
        .then(result => cardCreator(result.data))
        .catch(error => console.log('something went wrong', error))
})

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info"> 
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/





const cardCreator = (object) => {

    const mainDiv = document.createElement("div");
    const img = document.createElement("img");
    const card_info_div = document.createElement("div");
    const nameH3 = document.createElement("h3");
    const userNameP = document.createElement("p");
    const locationP = document.createElement('p');
    const profileP = document.createElement('p');
    const addressA = document.createElement('a');
    const followersP = document.createElement('p');
    const followingP = document.createElement('p');
    const bioP = document.createElement('p');

    mainDiv.classList.add('card');
    card_info_div.classList.add('card-info');
    nameH3.classList.add('name');
    userNameP.classList.add('username');

    img.src = object.avatar_url;
    nameH3.textContent = object.login;
    userNameP.textContent = object.name;
    locationP.textContent = `Location : ${object.location}`;
    profileP.textContent = `Profile:`;
    addressA.href = `${object.html_url}`;
    addressA.textContent = object.html_url;
    followersP.textContent = `Followers: ${object.followers}`;
    followingP.textContent = `Following: ${object.following}`;
    bioP.textContent = `Bio: ${object.bio}`;

    mainDiv.appendChild(img);
    mainDiv.appendChild(card_info_div);
    card_info_div.appendChild(nameH3);
    card_info_div.appendChild(userNameP);
    card_info_div.appendChild(locationP);
    card_info_div.appendChild(profileP);
    profileP.appendChild(addressA);
    card_info_div.appendChild(followersP);
    card_info_div.appendChild(followingP);
    card_info_div.appendChild(bioP);

    cards_div.append(mainDiv);
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/