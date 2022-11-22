const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// let name, music, activity, food, meal, sport, superpower;

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  // name = answer;
  rl.question('What\'s an activity you like doing? ', (activity) => {
    // activity = answer;
    rl.question('What do you listen to while doing that? ', (music) => {
      // music = answer;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
        // meal = answer;
        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
          // food = answer;
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            // sport = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              // superpower = answer;
              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
              rl.close();
            });
            // rl.close();
          });
          // rl.close();
        });
        // rl.close();
      });
      // rl.close();
    });
    // rl.close();
  });
  
  // rl.close();
});


