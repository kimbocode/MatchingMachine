  // All game pieces.
const Pieces = [
  {
    name: 'football',
    img: '<i class="fas fa-football-ball"></i>',
    id: 1
  },
  {
    name: 'laptop',
    img: '<i class="fas fa-laptop"></i>',
    id: 2
  },
  {
    name: 'tree', 
    img: '<i class="fas fa-tree"></i>',
    id: 3
  },
  {
    name:"car", 
    img: '<i class="fas fa-car-side"></i>',
    id: 4
  },
  {
    name: 'thumbtack',
    img: '<i class="fas fa-thumbtack"></i>',
    id: 5
  },
  {
    name: 'greaterThan',
    img: '<i class="fas fa-greater-than"></i>',
    id: 6
  },
  {
    name:'hamburger', 
    img: '<i class="fas fa-hamburger"></i>',
    id: 7
  },
  {
    name: 'snowman', 
    img: '<i class="fas fa-snowman"></i>',
    id: 8
  },
  {
    name: 'headphones',
    img: '<i class="fas fa-headphones"></i>',
    id: 9
  },
  {
    name: 'atom',
    img: '<i class="fas fa-atom"></i>',
    id: 10
  },
  {
    name: 'angry', 
    img: '<i class="fas fa-angry"></i>',
    id: 11
  },
  {
    name: 'guitar', 
    img: '<i class="fas fa-guitar"></i>',
    id: 12
  },
  {
    name: 'hdd',
    img: '<i class="fas fa-hdd"></i>',
    id: 13
  },
  {
    name: 'satellite',
    img: '<i class="fas fa-satellite-dish"></i>',
    id: 14
  },
  {
    name: 'kiwi-bird', 
    img: '<i class="fas fa-kiwi-bird"></i>',
    id: 15
  },
  {
    name: 'dog', 
    img: '<i class="fas fa-dog"></i>',
    id: 16
  },
  {
    name: 'glass',
    img: '<i class="fas fa-glass-cheers"></i>',
    id: 17
  },
  {
    name: 'check',
    img: '<i class="fas fa-check"></i>',
    id: 18
  },
  {
    name: 'yinYang', 
    img: '<i class="fas fa-yin-yang"></i>',
    id: 19
  },
  {
    name: 'battery', 
    img: '<i class="fas fa-battery-quarter"></i>',
    id: 20
  }
];  
  
  // Global elements.
const gameArray          = [],  
      clickArray         = [],  
      leaderTimeArray    = [],  
      leaderNameArray    = [],  
      matchArray         = [],  
      timeArray          = [],  
      themeArray         = [],  
      nameArray          = [],  
      gamesPlayed        = [],
      gameListenerArray  = [],
      cardContainer      = document.querySelectorAll('.card-container'), 
      udemy              = document.querySelector('.udemy'),
      andrei             = document.querySelector('.andrei'),
      colt               = document.querySelector('.colt'),
      imran              = document.querySelector('.imran'),
      ul                 = document.querySelector('ul'),
      darkUdemy          = document.querySelector('#udemy > a'),
      darkAndrei         = document.querySelector('#andrei > a'),
      darkImran          = document.querySelector('#imran > a'),
      darkColt           = document.querySelector('#colt > a'),
      userMenu           = document.querySelector('#user-menu'), 
      userContent        = document.querySelector('#user-content'),
      leaderboardId      = document.querySelector('#leaderboard'),
      themeId            = document.querySelector('#theme'),
      rulesId            = document.querySelector('#rules'),
      infoId             = document.querySelector('#info'),
      linksId            = document.querySelector('#links'),
      navbar             = document.querySelector('#menu-navbar'),
      stopwatch          = document.querySelector('#stopwatch'),
      submitBtn          = document.querySelector('#submit'),
      menuBars           = document.querySelector('#menu-navbar > div:nth-child(2) > i'),
      reset              = document.querySelector('#menu-navbar > i'),
      h1                 = document.querySelector('h1'),
      theme              = document.querySelector('.theme'),
      info               = document.querySelector('.info'), 
      links              = document.querySelector('.links'),
      rules              = document.querySelector('.rules'),
      colors             = document.querySelector('.colors'),
      leaderboard        = document.querySelector('.leaderboard'),
      champion           = document.querySelector('.champion'),
      second             = document.querySelector('.second'),
      third              = document.querySelector('.third'),
      fourth             = document.querySelector('.fourth'),
      fifth              = document.querySelector('.fifth'),
      previous           = document.querySelector('.previous'),
      winner             = document.getElementById('winner'),
      playAgain          = document.querySelector('#playAgain'),
      input              = document.getElementsByTagName('input'),
      names              = document.getElementsByClassName('name'),
      leaderTimes        = document.getElementsByClassName('time'),
      matched            = document.getElementsByClassName('matched'),
      front              = document.getElementsByClassName('front'),
      logo               = document.getElementsByClassName('mmlogo'), 
      back               = document.getElementsByClassName('back'),
      card               = document.getElementsByClassName('card'),
      disabled           = document.getElementsByClassName('disabled');
      
     
  let inputTimeArray  = [],
      inputNameArray  = [],
      gameOverArray   = [],
      clickTimeArray  = [],  
      formatTimeArray = [],
      keyTimeArray    = [];

  // Return a random whole number from Pieces.
const randomNum = () => Math.round(Math.random(Pieces.length - 1 ) * (Pieces.length - 1));
  
  // Check for duplicate values. 
const duplicateChecker = (arr, val) => {
  return arr.some(arrVal => val === arrVal);
};
  
  // Create 8 matching pairs of numbers. 
const gamePieces = () => {
  piecesArray = [];
  let i = 0;
  
  while( i < 8 ) {
     let num = randomNum(); 
     i+=1;
     
     if(duplicateChecker(piecesArray, num) === false) { /* Only unique values will be used. */
       piecesArray.push(num,num);
      } else {
      i--; 
    };
  };
  return piecesArray;
};
  
  // Fisher-Yates Shuffle Algorithm      
const shuffle = (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    
      // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
          
      // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};      
  
  // Shuffle the 16 numbers (8 pairs) generated from gamePieces();.
const shuffled = () => { 
  return shuffle(gamePieces()) 
};

  // Build gameboard. Add 'click' event listener to all cardContainer elements. 
const gameboard = () => {
  let ready  = shuffled(),
      num  = 0,
      i = cardContainer;

  matchArray.splice(0, matchArray.length); /* Empty matchArray. */
  
  for(let cardContainer of i) {
    cardContainer.addEventListener('click', gameListener);
    
    cardContainer.innerHTML = '<div class="card"><div class="front"><img src="mm.gif" class="mmlogo">' +
    '</img></div><div class="back">' + Pieces[ready[num]].img + '</div></div>'
    
    back[num].style.opacity = 0;
    num ++;  
};
document.querySelector('#winner > form > input[type=text]').maxLength = 12 /* Limit typed content to 12 characters. */

if (themeArray.length >=1) { 
  buildTheme(themeArray[themeArray.length -1]);
}
}; 

  // Remove all characters that are not numbers. Targeting ":" and ".", specifically.
const timeFormatter = (time) => {
  timeString = time;
  return timeString.replace(/[^a-zA-Z0-9]/g, '');
}

  // Push current leaderboard times into formatTimeArray.
const leaderboardInit = () => {
     
      // Default leaderboard times. 
    t1           = timeFormatter(leaderTimeArray[0]), 
    t2           = timeFormatter(leaderTimeArray[1]), 
    t3           = timeFormatter(leaderTimeArray[2]), 
    t4           = timeFormatter(leaderTimeArray[3]), 
    t5           = timeFormatter(leaderTimeArray[4]); 
    
    if (gamesPlayed.length === 0){ /* Leaderboard is unchanged. */
      formatTimeArray.push(t1, t2, t3, t4, t5);  
    
    } else if (gamesPlayed.length !== 0 && inputTimeArray.length > 0) {
        formatTimeArray.push(timeFormatter(inputTimeArray[0]));
        formatTimeArray.push(timeFormatter(inputTimeArray[1]));
        formatTimeArray.push(timeFormatter(inputTimeArray[2])), 
        formatTimeArray.push(timeFormatter(inputTimeArray[3])),
        formatTimeArray.push(timeFormatter(inputTimeArray[4]));
    }
  };

  // Stopwatch constructor class.
class TimerObj {
  constructor(time) {
      this.time = stopwatch.innerText
   }
 start() { this.start = setInterval(getShowTime, 1); }
 
 stop() { clearInterval(this.start); }
 
 reset() {
   stopwatch.innerHTML = '<div class="navbar-text"><h6>MATCHING MACHINE</h6></div>';
   timeArray.pop();
   startTimer();
  }
}

let myTimer = null;
let myTimerStart = null;

  // New game function. 
const newGame = () => {
  hideMenu(); 
  gameboard();
  timeArray.pop() /* Empty array. Get getShowTime() may now be called again. */
  gameListenerArray.splice(0, gameListenerArray.length); 
  myTimer.reset(); 
  startTimer(); 
}
  
const refreshGame = () => {
  reset.addEventListener('click', function() { 
    hideWinner();
    myTimer.stop();
    myTimer.reset();
    newGame();
  });
};

function gameListener() {
  disabledChecker();
  hideMenu();  /* Hide userMenu when card is clicked during an active game. */     
  showReset();
  leaderboardInit();

  gameListenerArray.push(this);
  clickTimeArray.push(stopwatch.innerText); 
  
  if (gameListenerArray.length === 1) {
    myTimer = new TimerObj;
    myTimerStart = myTimer.start(); /* Stopwatch begins */
    clickTimeArray = [];
  }
  
  if (gameListenerArray.length > 1){
    this.lastChild.style.backgroundColor  = '#1b1919'; // Change "card" background color.
    this.lastChild.lastChild.style.opacity = 100;      // Change "back" opacity to 100%
            
      // gameArray & clickArray are used for comparing clicks in matchChecker()
    gameArray.push(this.lastChild.lastChild.innerHTML); 
    clickArray.push(this.outerHTML); 
    resetClicks(); 
  }
  
  let m = matchArray.length;
  if (m === 16 ) { /* All cards have been matched. */
    myTimer.stop();
    validateTime();
    hideReset();
    gameOver();
  }
 
}
 
  //  If stopwatch displays less than three digits for milliseconds, reset value to '000'.
const validateTime = () => {
  if (stopwatch.innerText.length !== 9) {
let newTime = stopwatch.innerText.substring(0,6) +  '000';
stopwatch.innerText = newTime;
clickTimeArray.push(newTime);
  }
}  



  // Game has been completed.
const gameOver = () => {
  gamesPlayed.push('game completed');
  currentTime  = timeFormatter(clickTimeArray[clickTimeArray.length-1]), /* Time displayed when game ends; */
            t1 = formatTimeArray[0]; /* 1st */
            t2 = formatTimeArray[1]; /* 2nd */
            t3 = formatTimeArray[2]; /* 3rd */
            t4 = formatTimeArray[3]; /* 4th */
            t5 = formatTimeArray[4]; /* 5th */

  gameOverArray.splice(0,6);
  gameOverArray.push(currentTime, t1, t2, t3, t4, t5);
  
    // Compare currentTime time with leaderboard times. 
    if (currentTime >= t5) { /* Time is not within top five. */
    showReset();
  } else {
    addInput(topFive());
  }
  gameOverArray.pop();
  gameOverArray.sort();
  
  if (formatTimeArray.length > 5 && formatTimeArray.length % 5 === 0) {
    formatTimeArray = formatTimeArray.splice(formatTimeArray.length -5, formatTimeArray.length);
  }
};
    
    // Reset clickArray and gameArray after every two card clicks.
const resetClicks = () => {
  let clickChecker = clickArray.length;
  let matchLength = matchArray.length;
  
  if (clickChecker === 1) {
      return matchLength;
    
    } else if (clickChecker === 2) {
      matchChecker(); 
      clickArray.splice(0,2);
      gameArray.splice(0,2);
    
    } else {
      return false;
    }
};
  
  // Check for pairs of matching cards. 
const matchChecker = () => {
  let click1 = clickArray[0].substring(27,29), /* Returns the number displayed after "card-container" */
      click2 = clickArray[1].substring(27,29), /* ... */
  
      // 1 is subtracted from each value below because card-container" elements begin at the number "1".
      // The "click" and "active" elements would not sync without this adjustment. 
      
      activeCard1 = card[click1 -1],  
      activeCard2 = card[click2 -1],
      activeBack1 = back[click1 -1],
      activeBack2 = back[click2 -1];
  
    
    // Reset cards to previous unflipped state.
  const changeCards = () => {
    activeCard1.style.backgroundColor = '#3a3a3a';
    activeCard2.style.backgroundColor = '#3a3a3a';
    activeBack1.style.opacity = 0;
    activeBack2.style.opacity = 0;
  };
  
     // Pieces match and different cards were clicked.
   if (matchArray.length <=16) {
     
    if(gameArray[0] === gameArray[1] && clickArray[0] !== clickArray[1]) {
      
       matchArray.push(click1, click2);
       
       activeCard1.style.backgroundColor = themeArray[themeArray.length -1];
       activeCard1.classList.add('matched', 'disabled');
       
       activeCard2.style.backgroundColor = themeArray[themeArray.length -1];
       activeCard2.classList.add('matched', 'disabled');
      
         // Remove event listeners from the matched pair.
       cardContainer[click1 - 1].removeEventListener('click', gameListener);
       cardContainer[click2 - 1].removeEventListener('click', gameListener);
       return ('match');
       
         // Pieces match, but the same card was clicked. 
       } else if (gameArray[0] === gameArray[1] && clickArray[0] === clickArray[1]) {
         activeCard1.style.backgroundColor = '#272626';
         setTimeout(changeCards, 900);
         setTimeout(disabledChecker, 901);
         return ('same card clicked');
        
          // Pieces don't match. 
        }else if (clickArray.length ===2 && gameArray[0] != gameArray[1]) {
      setTimeout(changeCards, 900);
      setTimeout(disabledChecker, 900);
      return ('no match');
    }
  }
};

  // Keep matched cards from reverting to an unmatched state.
function disabledChecker () {
  let count = 0;
  while (count <= 15 && count < matchArray.length) {
    let themePicker = themeArray[themeArray.length -1];
    let matchPicker = matchArray[count] -1; 
    
    matched[count].style.backgroundColor = themePicker;
    
    back[matchPicker].lastChild.style.color = themeArray[themeArray.length -1]
    back[matchPicker].style.backgroundColor = 'black';
    back[matchPicker].style.opacity = 100;
    back[matchPicker].lastChild.style.opacity  = 100;
    
    if (themePicker === '#101010') {
      back[matchPicker].lastChild.style.color = '#827a7a';
    }
    count = count + 1;
  }
}
  
  // Current time representation in milliseconds.
const startTimer = () => {
  let startTime = new Date();
  return startTime.getTime();
};
    
  // Display stopwatch time.
const getShowTime = () => {
  while (timeArray.length < 1) { 
    timeArray.push(startTimer());
  }
  
  let startTime   = timeArray[0],
      begin       = startTime,
      update      = new Date(), /* Check for current time. */
      updatedTime = update, 
      savedTime   = (updatedTime - begin)/ 1000; /* Elapsed time between the intial time check and updatedTime. */
      
  if (savedTime) {
    difference = (updatedTime - begin) + savedTime;
  
  } else {
    difference =  updatedTime - begin;
  }
  
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
  const milliFunc = () => { 
    if (seconds) {
      let milliseconds = difference % ((1000 * 60) / 10000); /* Allows for 3 digits after decimal point. */
      let milliString = milliseconds.toString();
      return milliString.substring(2,5);
    }};
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    
      // Put stopwatch elements into individual divs to keep the time from jumping on the screen when active.
    let nowTime = stopwatch.innerHTML =  '<div class="minutes">' + minutes + '</div>' + ':' + 
    '<div class="seconds">' + seconds + '</div>' + '.' + '<div class="milli">' + milliFunc() + '</div>' + '</div>';
    
    return nowTime;
};
  
  // Hide winner pop-up.
const hideWinner = () => {
  winner.style.opacity = 0;
  winner.style.zindex = -3;
  winner.style.display = 'none'
  document.querySelector('#winner > form > input[type=text]').value = ''; /* Clear input data. */
};

  // Hide and show reset button.
const hideReset = () => { document.querySelector('#menu-navbar > i').style.zIndex = -1 };
const showReset = () => { document.querySelector('#menu-navbar > i').style.zIndex = 3 };
   
  
  // Display winner pop-up when completed time is within the top 5. 
const topFive = () => {
    winner.style.zIndex = 3;
    winner.style.opacity = 100;
    winner.style.display = 'inline';
    document.querySelector('#winner > form > input[type=text]').focus();
  };

const addPosition = (num,idx) => num + '. ' + inputNameArray[idx]; 

const pushDefault = () => {
  for (let i = 0; i <5; i++ ) {
    inputTimeArray.push(document.querySelectorAll('.time')[i].innerText);
  };
};

  // Leaderboard update logic.
const addInput = () => { submitBtn.addEventListener('click',  function submit() {
  userMenu.style.opacity = 100;
  userMenu.style.height = 358;
  userMenu.style.zIndex = 3;
  showReset();
  leaderboardFunc(); 
  getBack(); 
  
  nameArray.push(input[0].value); /* Push typed content into nameArray. */
  
  if (nameArray[nameArray.length -1] === '') { /* If a name is not provided, "N/A" will be used in its place. */
    nameArray.pop();
    nameArray.push('N/A');
  };
  
  submitBtn.removeEventListener('click',submit);
  hideWinner();
  
  if (gamesPlayed.length === 1 ) {
    pushDefault();
    for (let i = 0; i <5; i++ ){
      inputNameArray.push(document.querySelectorAll('.name')[i].innerText);
    }
  }
  
  let position = gameOverArray.indexOf(timeFormatter(clickTimeArray[clickTimeArray.length -1]));

    // Place winning time and name into arrays. Remove last element from each array (highest time).
  inputTimeArray.pop(); 
  inputNameArray.pop();
  inputTimeArray.splice(position, 0, clickTimeArray[clickTimeArray.length -1]);
  inputNameArray.splice(position, 0, position + '. ' + nameArray[nameArray.length -1]);
  
  
  for (let i = 0; i <5; i++ ){
    inputNameArray[i] = inputNameArray[i].substring(3); /* Remove position numbers. */
  };
  
    // Create "key" pairs for name and time values at their respective indexes.
  let key1 = [inputTimeArray[0], inputNameArray[0]],
      key2 = [inputTimeArray[1], inputNameArray[1]],
      key3 = [inputTimeArray[2], inputNameArray[2]],
      key4 = [inputTimeArray[3], inputNameArray[3]],
      key5 = [inputTimeArray[4], inputNameArray[4]];
      
      keyTimeArray = [];
      
    // Push formatted key values into keyTimeArray.
  keyTimeArray.push(timeFormatter(key1[0]), timeFormatter(key2[0]), timeFormatter(key3[0]), 
  timeFormatter(key4[0]), timeFormatter(key5[0]));

    // Sort array into numerical order.
  keyTimeArray.sort()
  inputTimeArray = keyTimeArray;
  
  let count = 0;
  while (count < 5) {
      
      // Add ':' and '.' to time strings.
    inputTimeArray[count] = inputTimeArray[count].substring(0,2) +':' + 
    inputTimeArray[count].substring(2,4) + ':' + inputTimeArray[count].substring(4);
    
      // Add numbers (1-5) to name strings.
    inputNameArray[count] = addPosition(count +1, count);
    
    count = count + 1;
  }
  inputSwitch = true; /* leaderPicker() can now be used since inputSwitch = true  */
  leaderPicker();
});
}
  
  // Listen for key press of "Enter" key.
const enterChecker = () => {
  restricted  = '!@#$%^&*()+=-[]\\\';,./{}|\":<>?'; /* Disallowed characters. */
  inputBox = document.querySelector('#winner > form > input[type=text]');
  
  inputBox.addEventListener('keypress', function(event) {
    let key   = event.key,
        count = 0; 
        while (count < restricted.length) { 
          if (key === restricted.charAt(count)) {
           event.preventDefault();
         }
      count = count+1;
    } 
      /* Page will not reload on keypress of enter button, and will act as if clicking "submit". */
    if (key === 'Enter') {
      event.preventDefault();
      return submitBtn.click(); 
    }
  });
}

let inputSwitch = false; /* When inputSwitch === "true", leaderboard is displayed via leaderPicker(). */
   
const namePicker = (num) => inputNameArray[inputNameArray.length - num];

const timePicker = (num) => inputTimeArray[inputNameArray.length - num];

const leaderPicker = () => {
  
  if (inputSwitch === true && gamesPlayed.length >= 1){  /* Top 5 leaderboard has been changed from default values. */ 
    userMenu.style.opacity = 100;
    userMenu.style.height = 358;
    userMenu.style.zIndex = 3;
    
    leaderboardFunc(); 
  
      document.querySelector('#user-menu > div.champion > div.name > strong').innerText = namePicker(5); /* First place leaderboard name.  */
      document.querySelector('#user-menu > div.champion > div.time').innerText          = timePicker(5); /* First place leaderboard time. */
      
      document.querySelector('#user-menu > div.second > div.name > strong').innerText   = namePicker(4); /* Second ... */
      document.querySelector('#user-menu > div.second > div.time').innerText            = timePicker(4);
      
      document.querySelector('#user-menu > div.third > div.name > strong').innerText    = namePicker(3); /* Third ... */
      document.querySelector('#user-menu > div.third > div.time').innerText             = timePicker(3);
      
      document.querySelector('#user-menu > div.fourth > div.name > strong').innerText   = namePicker(2); /* Fourth ... */
      document.querySelector('#user-menu > div.fourth > div.time').innerText            = timePicker(2);
      
      document.querySelector('#user-menu > div.fifth > div.name > strong').innerText    = namePicker(1); /* Fifth ... */
      document.querySelector('#user-menu > div.fifth > div.time').innerText             = timePicker(1);
  
      document.querySelector('#user-menu > div.goBack > strong').addEventListener('click', function() {
        getMenu();
        menuDimensions();
      });
   }
  }

  // Default leaderboard. 't' = time, 'n' = name.
const Default = {
  t1 : leaderTimes[0].innerText,
  t2 : leaderTimes[1].innerText,
  t3 : leaderTimes[2].innerText,
  t4 : leaderTimes[3].innerText,
  t5 : leaderTimes[4].innerText,
  
  n1 : names[0].innerText,
  n2 : names[1].innerText,
  n3 : names[2].innerText,
  n4 : names[3].innerText,
  n5 : names[4].innerText
}
  
   // Push Default into arrays.
const onloadLeadersFunc = () => {
  leaderTimeArray.push(Default.t1, Default.t2, Default.t3, Default.t4, Default.t5);
  leaderNameArray.push(Default.n1, Default.n2, Default.n3, Default.n4, Default.n5);
}


  
    // Window onload event. 
    // hideReset() prevents error if user clicks the reset button before clicking a square first.
  window.onload =  gameboard(), buildTheme(red()), getBars(), onloadLeadersFunc(), enterChecker(), 
                   refreshGame(), hideReset(), leaveMenu(), menuHover('fas fa-bars'), menuHover('fas fa-redo-alt');
  
                   
                   
  


                  

                   
                  
                  
                  
          