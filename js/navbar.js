document.addEventListener("DOMContentLoaded", function() {
const defaultAvatar = "/images/user.png";
let userAvatar = null;
const avatarUrl = userAvatar ? userAvatar : defaultAvatar;
const navbarHTML = `<div class="navbar">
<div class="left">
<a href="/home" class="logo">
<img src="/images/favicon.png" alt="Waffles Logo" class="waffleimg" height="50" width="50">
</a>
<h3 class="navbar-title">Waffles</h3>
</div>
<div class="right">
<a href="/profile" class="user-profile">
<img id="user-avatar" src="${avatarUrl}" alt="" class="avatar">
<span id="user-name">Sign Up</span>
</a>
<div class="separator"></div> <!-- Line separator between profile and buttons -->
<nav class="navbar-links">
<a href="/home"><i class="fa fa-home fa-lg"></i></a>
<a href="/games"><i class="fa fa-gamepad fa-lg"></i></a>
<a href="/music"><i class="fa fa-music fa-lg"></i></a>
<a href="/theater"><i class="fa fa-tv fa-lg"></i></a>
<a href="/forms"><i class="fa fa-clipboard-list fa-lg"></i></a>
<a href="/reviews"><i class="fa fa-star fa-lg"></i></a>
<a href="/contact" class="margin"><i class="fa fa-user fa-lg"></i></a>
</nav>
</div>
</div>
`;
document.getElementById('navbar-container').innerHTML = navbarHTML;
});
