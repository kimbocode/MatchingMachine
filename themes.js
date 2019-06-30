  //  All available themes.
const red = () => {
  menuBackground('#830918');
  menuColor('#000000');
  leaderboardColor('rgb(0, 0, 0)');
  menuBars.style.backgroundColor = '#830918';
  reset.style.backgroundColor = '#830918';
  imran.style.color = '#000000';
  colt.style.color = '#000000';
  andrei.style.color = '#000000';
  udemy.style.color = '#000000';
  h1.style.backgroundColor = '#000000';
  h1.style.color = '#830918';
  themeArray.push('#820918');
  return ('#830918');
};
   
const blue = () => {
  menuBackground('rgb(0, 17, 192)');
  menuColor('#000000');
  leaderboardColor('#000000');
  menuBars.style.backgroundColor = '#2330b2';
  reset.style.backgroundColor = '#2330b2';
  imran.style.color = '#000000';
  colt.style.color = '#000000';
  andrei.style.color = '#000000';
  udemy.style.color = '#000000';
  leaderboard.style.backgroundColor = '#2330b2';
  theme.style.backgroundColor = '#2330b2';
  links.style.backgroundColor = '#2330b2';
  rules.style.backgroundColor = '#2330b2';
  info.style.backgroundColor = '#2330b2';
  navbar.style.backgroundColor = '#2330b2';
  h1.style.backgroundColor = '#00103a';
  h1.style.color = '#c7caf1';
  userMenu.style.borderColor = '#000000';
  themeArray.push('#2330b2');
  return ('#2330b2');
};
   
const orange = () => {
  menuBackground('#a45009');
  menuColor('#251108');
  leaderboardColor('#000000');
  menuBars.style.backgroundColor = '#a45009';
  reset.style.backgroundColor = '#a45009';
  menuBars.style.backgroundColor = '#a45009';
  reset.style.backgroundColor = '#a45009'; 
  imran.style.color = '#000000';
  colt.style.color = '#000000';
  andrei.style.color = '#000000';
  udemy.style.color = '#000000'; 
  h1.style.backgroundColor = '#241007';
  h1.style.color = '#a45009';
  themeArray.push('#a45009');
  return ('#a45009');
};

   
const green = () => {
  menuBackground('#1a922a');
  menuColor('#081301');
  leaderboardColor('#000000');
  menuBars.style.backgroundColor = '#1a922a';
  reset.style.backgroundColor = '#1a922a';
  imran.style.color = '#000000';
  colt.style.color = '#000000';
  andrei.style.color = '#000000';
  udemy.style.color = '#000000';
  h1.style.backgroundColor = '#081301';
  h1.style.color = '#255808';
  themeArray.push('#1a922a');
  return ('#1a922a');
};
   
const dark = () => {
  menuBackground('rgb(16,16,16)');
  menuColor('#727272');
  leaderboardColor('rgb(163,160,160');
  menuBars.style.backgroundColor = '#101010';
  reset.style.backgroundColor = '#101010';
  imran.style.color = '#6f6f6f';
  colt.style.color = '#6f6f6f';
  andrei.style.color = '#6f6f6f';
  udemy.style.color = '#6f6f6f';
  navbar.style.backgroundColor = '#101010';
  h1.style.backgroundColor = 'rgb(25, 25, 25)';
  h1.style.color = '#737373';
  themeArray.push('#101010');
  return ('#101010');
};

   // Theme event listeners. Called via click of colored square in theme menu.
const getOrange = () => {
  document.getElementById('orange-square').addEventListener('click', function orange() {
    orangeFunc();
    sameCards();
    disabledChecker();
    
    document.querySelector('#user-menu > div.goBack > strong').style.backgroundColor = 
    themeArray[themeArray.length -1];
  });
}
  
const getBlue = () => {
  document.getElementById('blue-square').addEventListener('click', function() {
    blueFunc();
    sameCards();
    disabledChecker();
    
    document.querySelector('#user-menu > div.goBack > strong').style.backgroundColor = 
    themeArray[themeArray.length -1];
  });
}
  
const getRed = () => {
  document.getElementById('red-square').addEventListener('click', function() {
    redFunc();
    sameCards();
    disabledChecker();
    
    document.querySelector('#user-menu > div.goBack > strong').style.backgroundColor = 
    themeArray[themeArray.length -1];
  });
}
  
const getGreen = () => {
  document.getElementById('green-square').addEventListener('click', function() {
    greenFunc();
    sameCards();
    disabledChecker();
    
    document.querySelector('#user-menu > div.goBack > strong').style.backgroundColor = 
    themeArray[themeArray.length -1];
  });
}
  
const getDark = () => {
  document.getElementById('dark-square').addEventListener('click', function() {
    let count = 0;
    
    while (count <= 15 && count < matchArray.length) {
      let matchPicker = matchArray[count] -1; 
      back[matchPicker].lastChild.style.color = '#827a7a';
      count = count + 1;
    }
    
    darkFunc();
    sameCards();
    
    document.querySelector('#user-menu > div.goBack > strong').style.backgroundColor = 
    themeArray[themeArray.length -1];
    
  });
}
  
  // Color functions. Replaces current theme on call. 
const orangeFunc = () => buildTheme(orange()),
      blueFunc   = () => buildTheme(blue()),
      redFunc    = () => buildTheme(red()),
      greenFunc  = () => buildTheme(green()),
      darkFunc   = () => buildTheme(dark());

  // Generate theme from color function call.
const buildTheme = (theme) => {
  let i   = logo,
      num = 0;
  
  userMenu.style.backgroundColor = theme;
  
  for(let logo of i) {
    
      /* Add current theme color to mmlogo's background color. */
    logo.outerHTML = '<img src="mm.gif" class="mmlogo" style="background-color:'  + theme +   ';">'  
    
        /* If theme is equal to dark().*/
      if (theme === '#101010') { 
       back[num].style.color = '#827a7a'; 
       menuBars.style.color = 'rgb(130, 122, 122)';
       reset.style.color = 'rgb(130, 122, 122)';
       darkUdemy.style.color = '#747474';
       darkAndrei.style.color = '#747474';
       darkColt.style.color = '#747474';
       darkImran.style.color = '#747474';
      
      } else {
        back[num].style.color = theme;
        reset.style.color = '#000000';
        menuBars.style.color = '#000000';
        darkUdemy.style.color = '#000000';
        darkAndrei.style.color = '#000000';
        darkColt.style.color = '#000000';
        darkImran.style.color = '#000000';
      }
      num = num +1;
    }
};

  // Build theme based on RGB code.
const themeChecker = () => {
  if (themeArray[themeArray.length -1] === '#820918'){
    return buildTheme(red());
  }
  
  else if (themeArray[themeArray.length -1] === '#0011c0') {
    return buildTheme(blue());
  }
  
  else if (themeArray[themeArray.length -1] === '#101010' ) {
    return buildTheme(dark());
  }
  
  else if (themeArray[themeArray.length -1] === '#1a922a' ) {
    return buildTheme(green());
  }
  
  else if (themeArray[themeArray.length -1] === '#a45009') {
    return buildTheme(orange());
  }
};

   //  Change background of matched cards to the correct theme color if theme changes during an active game.
const sameCards = () => {
  let i = matched;
  for(let matched of i) {
    matched.style.backgroundColor = themeArray[themeArray.length -1];
  };
}

