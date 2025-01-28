document.addEventListener("DOMContentLoaded", function() {
  const defaultAvatar = "https://codehs.com/uploads/fbd97756d141592f86710a5e655b8a4b";
  let userAvatar = null;
  const avatarUrl = userAvatar ? userAvatar : defaultAvatar;
  const navbarHTML = `<div class="navbar">
    <div class="left">
      <a href="/home" class="logo">
        <img src="https://codehs.com/uploads/fbd97756d141592f86710a5e655b8a4b" alt="Waffles Logo" class="waffleimg" height="50" width="50">
      </a>
      <h3 class="navbar-title">Waffles</h3>
    </div>
    <div class="right">
      <a href="/eatmorewaffles/profile" class="user-profile">
        <img id="user-avatar" src="${avatarUrl}" alt="" class="avatar">
        <span id="user-name">Sign Up</span>
      </a>
      <div class="separator"></div> <!-- Line separator between profile and buttons -->
      <nav class="navbar-links">
        <a href="/eatmorewaffles/home"><i class="fa fa-home fa-lg"></i></a>
        <a href="/eatmorewaffles/games"><i class="fa fa-gamepad fa-lg"></i></a>
        <a href="/eatmorewaffles/music"><i class="fa fa-music fa-lg"></i></a>
        <a href="/eatmorewaffles/theater"><i class="fa fa-tv fa-lg"></i></a>
        <a href="/eatmorewaffles/forms"><i class="fa fa-clipboard-list fa-lg"></i></a>
        <a href="/eatmorewaffles/reviews"><i class="fa fa-star fa-lg"></i></a>
        <a href="/eatmorewaffles/contact" class="margin"><i class="fa fa-user fa-lg"></i></a>
      </nav>
    </div>
  </div>`;
  document.getElementById('navbar-container').innerHTML = navbarHTML;
});
