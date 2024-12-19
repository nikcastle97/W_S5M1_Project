function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  const header2 = document.querySelector(`body header h2`);
  
  const divs = document.querySelectorAll(`body section div`);
  divs.forEach((item) => {
    item.classList.add(`widget`);
  });
  
  // 👉 TASK 2 - Build a "Quote of the Day" widget
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const quoteOfTheDay = document.querySelector(`.quoteoftheday`).textContent = randomQuote.quote;
  
  const author_date = document.createElement(`div`);
  if (randomQuote.date !== null) {
    author_date.textContent = `${randomQuote.author} in ${randomQuote.date}`;
  } else {
    author_date.textContent = `${randomQuote.author} in an unknown date`
  }

  document.querySelector(`section .quoteoftheday`).append(author_date);
  author_date.style.fontFamily = `cursive`;
  author_date.style.padding = `1em`;

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  const randomSelect = Math.ceil(Math.random() * 10);
  const randomAdVerb = adverbs[randomSelect]
  const randomNoun = nouns[randomSelect]
  const randomVerb = verbs[randomSelect]
  const corporateSpeak = document.createElement(`p`).textContent = `We need to ${randomVerb} our ${randomNoun} ${randomAdVerb} in order to ${randomVerb} our ${randomNoun} ${randomAdVerb}.`;
  document.querySelector(`.corporatespeak`).append(corporateSpeak)

  // 👉 TASK 4 - Build a "Countdown" widget
  const countdownWidget = document.querySelector(`.countdown`);
  const countdownElement = document.createElement(`div`);
  let count = 5;
  countdownElement.textContent = `T-minus ${count}...`;
  countdownWidget.appendChild(countdownElement);
  const launch = setInterval(() => {
    if (count === 1) {
      countdownElement.textContent = `Liftoff! 🚀`
      clearInterval(launch)
    } else {
      countdownElement.textContent = `T-minus ${--count}...`
    }
  }, 1000);

  // 👉 TASK 5 - Build a "Friends" widget
  const ranPerson = people[Math.floor(Math.random() * people.length)];

  const friendGroupInfo = document.createElement(`p`);
  document.querySelector(`.friends`).appendChild(friendGroupInfo);

  const year = ranPerson.dateOfBirth.slice(0,4);
  // console.log(year);
  let persYearFriends = `${ranPerson.fname} ${ranPerson.lname} was born in ${year} and `
  // console.log(persYearFriends);

  if (!ranPerson.friends.length) {
    persYearFriends += `has no friends.`;
  } else {
    persYearFriends += `is friends with `;
    for (let i = 0; i < ranPerson.friends.length; i++) {
      const friendID = ranPerson.friends[i];
      const friend = people.find(p => p.id === friendID);
      const friendName = `${friend.fname} ${friend.lname}`;
      // console.log(friendID, friend, friendName)

      let lastFriend = i === ranPerson.friends.length - 1;
      let LastFriend2nd = i === ranPerson.friends.length -2;
      if (lastFriend) {
        persYearFriends += `${friendName}.`
      } else if (LastFriend2nd) {
        persYearFriends += `${friendName} and `
      } else {
        persYearFriends += `${friendName}, `
      }
    }
  }
  friendGroupInfo.textContent = persYearFriends;

  // 👉 TASK 6 - Make it so user can tab through the widgets
  // console.log(document.querySelectorAll(`.widget`))
  const widget1 = document.querySelector(`.quoteoftheday`);
  widget1.tabIndex = 1;
  const widget2 = document.querySelector(`.corporatespeak`);
  widget2.tabIndex = 2;
  const widget3 = document.querySelector(`.countdown`);
  widget3.tabIndex = 3;
  const widget4 = document.querySelector(`.friends`);
  widget4.tabIndex = 4;

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
