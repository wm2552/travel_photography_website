console.log("Javascript file loaded.");


document.addEventListener('DOMContentLoaded', function () {
  const inputs = document.querySelectorAll(".form-group input");
  //Here we check the input fields and add blur and focus listeners for each
  //element.
  for (let item of inputs) {
    console.log(inputs);
    item.addEventListener("focus", function () {
      // Focus, sets to ugly yellow.
      item.style.backgroundColor = "#fffae0";
    })
    item.addEventListener("blur", function () {
      // Blur, sets to white.
      item.style.backgroundColor = "white";
    });
  }

  const slides = document.querySelectorAll(".thumb");
  //Here we check the input fields and add blur and focus listeners for each
  //element.

  function selectThumbnail(thumbnail){
    for(let thumb of slides){
      thumb.classList.remove("expanded");
    }
    thumbnail.classList.add("expanded");
    document.getElementById("image-caption").textContent = "You selected: " + thumbnail.getAttribute("data-city");
  }



  for (let thumb of slides) {
    console.log(thumb);

    thumb.addEventListener("click", function () {
      selectThumbnail(thumb);
    });

    thumb.addEventListener("keydown", function(e){
      if(e.key == "Enter"){
        selectThumbnail(thumb);
      }
    })

    thumb.addEventListener("mouseenter", function(){
      thumb.focus();
    })

  }

  function errorHandle(espan, echeck, message, e){
    if(echeck == -1){
      espan.textContent = message;
      espan.style.display = "inline";
      e.classList.add("error-border");

    }
    else{
      espan.style.display = "none";
      e.classList.remove("error-border");
    }
  }

  document.getElementById("submit").addEventListener("click", function (e) {

    //To do, the submit itself

    e.preventDefault();
    console.log("Validation ran");

    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let terms = document.querySelector("#terms");

    //Here we ensure the username is a combo of characters that may be any length,
    //that email is any combo of characters then an @, combo, then a period and finally any combo
    //here the password is any combo of characters longer than 8 characters in length.
    let usernameCheck = username.value.search("\\w+");
    let emailCheck = email.value.search("\\w+@\\w+.\\w+");
    let passwordCheck = password.value.search("\\w{8,}");
    let termsCheck = terms.checked;

    let usernameError = document.getElementById("error-username");
    let emailError = document.getElementById("error-email");
    let passwordError = document.getElementById("error-password");
    let termsError = document.getElementById("error-terms");


    errorHandle(usernameError, usernameCheck, "Username is required", username);
    errorHandle(emailError, emailCheck, "Enter a valid email address", email);
    errorHandle(passwordError, passwordCheck, "Password must be at least 8 characters", password);
    errorHandle(termsError, termsCheck? 0:-1, "You must accept the terms", terms);

    if(usernameCheck != -1 && passwordCheck != -1 && emailCheck != -1 && terms.checked == true){
      alert("All fields valid, success!");
    }

  });

});





