const profileContainer = document.querySelector(".profileContainer")
const users = ["danielpreil", "bazsitoth"]

const getUsersData = async () => {  
  try {
    for (const userName of users) {
      const userInfo = await fetch(`https://api.github.com/users/${userName}`);
      if (!userInfo.ok) {
        throw new Error(`HTTP error! status: ${userInfo.status}`);
      }
      const userData = await userInfo.json();
      console.log(userData)
      
      const ul = document.createElement("ul");
      profileContainer.appendChild(ul)

      const image = document.createElement("img");
      image.src = userData.avatar_url;
      ul.appendChild(image);

      const li1 = document.createElement("li");
      li1.textContent = `Username: ${userData.login}`
      ul.appendChild(li1);

      const li2 = document.createElement("li");
      li2.textContent = `Bio: ${userData.bio}`
      ul.appendChild(li2);

      const li3 = document.createElement("li");
      li3.textContent = `Blog: ${userData.blog}`
      ul.appendChild(li3);

      const li4 = document.createElement("li");
      li4.textContent = `Followers: ${userData.followers}`
      ul.appendChild(li4);
    }
  } catch(error) {
    console.log(error);
  }     
}
    
getUsersData();