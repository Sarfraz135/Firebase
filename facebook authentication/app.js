const facebook_login = () =>{
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        var user = result.user;
        window.location = "home.html";
        console.log("User ==>",user.displayName)
      }).catch(function(error) {
          console.log(error.message)
      });
}


const Signout = () =>{
   firebase.auth().SignOut()
   .then(()=>{
      window.location = "login.html";
   })
   .catch(()=>{

   })
}