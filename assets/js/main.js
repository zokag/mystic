$(document).ready(function(){

function ajaxCallback(url,result){
  $.ajax({
    url: url,
    method:"get",
    dataType:"json",
    success:result,
    error:function(xhr){
        console.log(xhr);
    }
})
}
ajaxCallback("assets/data/meni.json", function(result){
  ispisNavigacije(result);
})

function ispisNavigacije(nizNavigacioniMeni){
    let sadrzaj="";

    for(let link of nizNavigacioniMeni){
        sadrzaj+=`<li class="nav-item">
        <a class="nav-link" aria-current="page" href="${link.href}">${link.naslov}</a></li>`
    }
    document.querySelector(".navbar").innerHTML=sadrzaj;
    document.querySelector(".footer-navbar").innerHTML=sadrzaj;

}


  ajaxCallback("assets/data/artikli.json", function(result){
    prikaziPodatke(result);
  })
  function prikaziPodatke(sviPodaciJSON){
      var sadrzaj="";
      for(var jedanObjekat in sviPodaciJSON){
          sadrzaj+="<div class='artikal mt-5 col-lg-3 col-md-5'><img class='slika' src="+
          sviPodaciJSON[jedanObjekat].image + "><p class='name mb-1 mt-2'>"+sviPodaciJSON[jedanObjekat].name+"</p><p class='cena text-danger fs-4  mb-1'>"+
          sviPodaciJSON[jedanObjekat].price.new + "<span class='text-black'>"+sviPodaciJSON[jedanObjekat].price.old+"</span></p>"+"<div class='discription'>"+sviPodaciJSON[jedanObjekat].description+"</div><a href='#' class='btn2 mt-2 border w-100 pe-4 ps-4 pt-2 pb-2'>add to cart</a></div>"
      }
      document.querySelector('.articles').innerHTML=sadrzaj
  }
  
    //read more/less
  function prikaziDodatniTekst() {
      $('#dodatniTekst').show();
      $('#readMore').hide();
    
    }
    
    function sakrijDodatniTekst() {
      $('#dodatniTekst').hide();
      $('#readMore').show();
    
    }
  
  
    ajaxCallback("assets/data/favorites.json", function(result){
      prikaziFavorite(result);
    })
  function prikaziFavorite(podaciZaFavorite){
      var ispis="";
      for(var podatakJSON in podaciZaFavorite){
          ispis+="<div class='artikal mt-5 col-lg-3 col-md-5'><img class='slika' src="+
          podaciZaFavorite[podatakJSON].image + "><p class='name mb-1 mt-2'>"+podaciZaFavorite[podatakJSON].name+"</p><p class='cena text-danger fs-4  mb-1'>"+
          podaciZaFavorite[podatakJSON].price.new + "<span class='text-black'>"+podaciZaFavorite[podatakJSON].price.old+"</span></p>"+"<div class='discription'>"+podaciZaFavorite[podatakJSON].description+"</div><a href='#' class='btn2 mt-2 border w-100 pe-4 ps-4 pt-2 pb-2'>add to cart</a></div>"
      }
      document.querySelector('.customers').innerHTML=ispis
  }



//sign-in form start
let loginForm = document.querySelector('.login-form-container')
document.querySelector('.icon-user').onclick = () =>{
    loginForm.classList.toggle('active')
}
document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.toggle('active')
}

document.getElementById('signIn').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const userName = document.getElementById('login-name').value;
    const password = document.getElementById('pass').value;
  
    var isValid = true; 
  
  
    var regUserName = /^(?=.*\d)[a-z\d]{5,}$/;
  if(!regUserName.test(userName)){
    document.getElementById('userNameError').textContent = "Username must have minimal 5 characters(all lowercase) and at least one digit (0-9)";
    isValid = false;
  }
  else {
    document.getElementById('userNameError').textContent = "";
  }
  var regPass = /^(?=.*[0-9])[a-z\d]{8,}$/;
  if(!regPass.test(password)){
    document.getElementById('passwordError').textContent = "Your password must contain at least 8 characters, including only lowercase letters and at least one digit (0-9).";
    isValid = false;
  }
  else {
    document.getElementById('passwordError').textContent = "";
  }
  
    
    if (isValid) {
        // If valid, deleting values
        document.getElementById('login-name').value = '';
        document.getElementById('pass').value = '';
  
  
        document.getElementById('success-message').textContent = "Successfully signed in!";
    }
  });
  
  
  
  //sign-in form end


var socialMediaIcons = ['facebook', 'twitter', 'instagram']; // Popis društvenih mreža

  function createSocialIcons() {
      var socialIconsDiv = document.getElementById('socialIcons');
  
      socialMediaIcons.forEach(function(icon) {
          var iconElement = document.createElement('i');
          iconElement.classList.add('fs-3', 'fab', 'fa-' + icon);
          
          var link = document.createElement('a');
          var socialUrl = ''; 
  
          if (icon === 'facebook') {
              socialUrl = 'https://www.facebook.com/';
          } else if (icon === 'twitter') {
              socialUrl = 'https://www.twitter.com/';
          } else if (icon === 'instagram') {
              socialUrl = 'https://www.instagram.com/';
          }
  
          link.href = socialUrl;
          link.target = '_blank'; 
          link.appendChild(iconElement);
          socialIconsDiv.appendChild(link);
      });
  }
  
  createSocialIcons();

})
