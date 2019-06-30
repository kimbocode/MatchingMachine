 // Show userMenu on click of menuBars.
 const getBars = () => {
  menuBars.addEventListener('click', function() {
    menuDimensions();
    getMenu();
  });
};   
 
  // Default dimensions for userMenu.
const menuDimensions = () => {
  userMenu.style.opacity = 100;
  userMenu.style.width = 250;
  userMenu.style.height = 233;
}

const menuHover = (val) => {
  document.getElementsByClassName(val)[0].addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = '#3a333433';
  });
  
  document.getElementsByClassName(val)[0].addEventListener('mouseleave', function(event) {
    event.target.style.backgroundColor = themeArray[themeArray.length -1];
  });
} 
  
const squareHover = (val) => {
  document.getElementById(val).addEventListener('mouseover', function(event) {
    event.target.style.borderColor = 'ffffff';
  });
  
  document.getElementById(val).addEventListener('mouseleave', function(event) {
    event.target.style.borderColor = '#000000';
  });
} 
  
  // Show userMenu items.
const getMenu = () => {
  let x = userMenu;
  x.style.zIndex = '2'; 
  x.innerHTML = ul.innerHTML;
  getLeaderboard();
  getTheme();
  getLinks();
  getRules();
  getInfo();
  menuHover('leaderboard');
  menuHover('theme');
  menuHover('links');
  menuHover('rules');
  menuHover('info');
}

  // Top 5 leaderboard.
const getLeaderboard = () => { 
  document.getElementsByClassName('leaderboard')[0].addEventListener('click', function() {
  if (inputSwitch === true){
    leaderPicker();
  } else {
    userMenu.style.height = 351;
    leaderboardFunc();
    getBack();
  }
 });
};

  // Themes menu.
const getTheme = () => {
  document.getElementsByClassName('theme')[0].addEventListener('click', function(event) {
  userMenu.style.height = 310;
  themeId.style.opacity = 100;
  themeId.style.padding = 5;
  themeFunc();
  getOrange();
  getBlue();
  getRed();
  getGreen();
  getDark();
  getBack();
});
};

  // Links menu.
 const getLinks = () => {
   document.getElementsByClassName('links')[0].addEventListener('click', function() {
   userMenu.style.height = 413;
   linksId.style.opacity = 100;
   linksId.style.padding = 5;
   linkFunc();
   getBack();
   });
 }

  // Rules menu.
 const getRules = () => {
  document.getElementsByClassName('rules')[0].addEventListener('click', function() {
  userMenu.style.height = 435;
  rulesId.style.opacity = 100;
  rulesId.style.padding = 5;
  rulesFunc();
  document.querySelector('#user-menu > div').style.marginTop = -19;
  getBack();
  });
}

  // Info menu.
const getInfo = () => {
  document.getElementsByClassName('info')[0].addEventListener('click', function() {
  userMenu.style.height = 372;
  infoId.style.opacity = 100;
  infoId.style.padding = 5;
  infoFunc();
  getBack();
  });
}

  // Hide menu when mouse no longer targets.
const leaveMenu = () => {
  userMenu.addEventListener('mouseleave', function() {
    hideMenu();
  });
}

  // Restore default userMenu dimensions.
const backFunc = () => {
  menuDimensions();
  getMenu();
}

  // Return to main menu.
const getBack = () => {
  menuHover('previous');
  document.getElementsByClassName('previous')[0].addEventListener('click', function() {
    backFunc();
    });
}

  // "Func" calls replace userMenu.innerHTML.
leaderboardFunc = () => { userMenu.innerHTML = leaderboardId.innerHTML; };

themeFunc = () => { 
  userMenu.innerHTML = themeId.innerHTML; 
  squareHover('red-square');
  squareHover('blue-square');
  squareHover('orange-square');
  squareHover('green-square');
  squareHover('dark-square'); 
};

linkFunc = () => { 
  userMenu.innerHTML = linksId.innerHTML; 
  menuHover('udemy-link');
  menuHover('andrei-link');
  menuHover('colt-link');
  menuHover('imran-link');
};
rulesFunc = () => { userMenu.innerHTML = rulesId.innerHTML; }
infoFunc = () => { userMenu.innerHTML = infoId.innerHTML; }

  // Remove menu from view.
const hideMenu = () => {
  userMenu.style.opacity = 0;
  userMenu.style.zIndex = '-1';
};

  // Change userMenu background properties.
const menuBackground = (color) => {
  userMenu.style.backgroundColor = color;
  theme.style.backgroundColor =  color;
  info.style.backgroundColor =  color; 
  navbar.style.backgroundColor =  color; 
  leaderboard.style.backgroundColor =  color; 
  rules.style.backgroundColor = color;
  links.style.backgroundColor = color;
}; 
  
  // Change userMenu color properties.
const menuColor = (color) => {
  theme.style.color = color;
  info.style.color = color;
  navbar.style.color = color;
  links.style.color = color;
  leaderboard.style.color = color;
  rules.style.color = color;
};

  // Change leaderboardId color properties.
const leaderboardColor = (color) => {
  champion.style.color = color;
  second.style.color = color;
  third.style.color = color;
  fourth.style.color = color;
  fifth.style.color = color;
 };

 

  