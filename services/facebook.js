import axios from "axios";

const fbPosting = async () => {
  console.log("from service");
  const url = "https://graph.facebook.com/v20.0/me/media";
  const body = {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP9_oe_j188K-JmtkmaMRNxg94LgcEUCH-phyy5LeIvV-VKfXMpZpqvF_SkBcCR1EYxY8&usqp=CAU",
    caption: `An unforgettable moment on the pitch today! 🏏 Just when you thought things couldn't get more exciting, Nadeem turns the tables by sending Naseem heading back to the pavilion with a classic run out! Truly proof of why cricket is called a game of uncertainty! 🙌 💥

Indeed, it's not every day you see a gear shift of this magnitude. A big shout-out to Nadeem for his exceptional bowling skills. No boundaries, no runs, just sheer strategic play was what it took to turn this game around! 👏🏽

If you thought Naseem's innings were over too soon – well, that's the name of the game! 😶 Sometimes one ball is all it takes to change the course of the match. Better luck next time, Naseem! 🍀

Remember, folks - it's not just about the four's and six's - it's about strategy, skills and a whole lot of surprises! Can't wait to see what the next match brings. 🤩🔥

#HeroicBowler #NadeemVictory #CricketGame #RunOut #NoRunsNoBoundries #OneBallGame #GameChanger #CricketFans #CricketLove #MasterPlan #BowlingSkills #FieldingWin #NeverMissABall`,
    access_token:
      "EAALsxKafTJgBOwOljFthjeTcjs1a9hvO3iZBUTGNUasOwmrGSAHbwy6XpJllQP1cvqRNZCxDHpMVwqhfJMpEH0OgdPhhY7eP8d6MZArLOu3g7Rr6ZCZAJs0fsnYOQ4jqTVyqJqZBeK4oZAu53D6kJlugZCoVbBl1XmZAz73shwjxmXMLB1ganPeNrM9WMB8rgdqoZBNpL2adMRZBvnQRA1iFgZDZD",
  };
  try {
    console.log(body);
    // console.log("helo 1 ");
    const response = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log("helo 2 ");
    console.log("API response:", response.data);
    return;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export { fbPosting };
