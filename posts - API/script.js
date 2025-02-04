// Get All posts
function getAllPosts(){
let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/posts");
request.send();
request.responseType = "json";
request.onload = () => {

  if (request.status >= 200 && request.status < 300){
    let posts = request.response;

    document.getElementById("postBox").innerHTML = "";

    for (post of posts) {
      let content = `<div class="post" id="postBox">
                        <div class="postTitle">${post.title}</div>
                        <hr>
                        <div class="postContent">${post.body}</div>
                    </div>`
      document.getElementById("postBox").innerHTML += content;
    }
  }else{
    alert("Error")
  }
  
};

}

// Get Posts for user
function getUserPosts(userId){
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId="+userId);
  request.send();
  request.responseType = "json";
  request.onload = () => {
  
    if (request.status >= 200 && request.status < 300){
      let posts = request.response;
  
      document.getElementById("postBox").innerHTML = "";
  
      for (post of posts) {
        let content = `<div class="post" id="postBox">
                          <div class="postTitle">${post.title}</div>
                          <hr>
                          <div class="postContent">${post.body}</div>
                      </div>`
        document.getElementById("postBox").innerHTML += content;
      }
    }else{
      alert("Error")
    }
    
  };
  
  }

function getAllUsers(){
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.send();
  request.responseType = "json";
  request.onload = () => {
  
    if (request.status >= 200 && request.status < 300){
      let users = request.response;
  
      document.getElementById("usersList").innerHTML = "";

      let index =1;
      for (user of users) {
        let content = `<div id="usersList">
                          <h3 onclick="handleClickedUser(${user.id}, this)" id="userNmae">${user.name}</h3>
                      </div>`

                      index++
        document.getElementById("usersList").innerHTML += content;
        
      }
    }else{
      alert("Error")
    }
    
  };
  
  }

function handleClickedUser(id, selected){

  let selectedElement = document.getElementsByClassName("active")
  for (element of selectedElement){
    element.classList.remove("active")
  }
  selected.classList.add("active")
  getUserPosts(id)
}

getAllPosts()
getAllUsers()


