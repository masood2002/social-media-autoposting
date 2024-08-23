import axios from "axios";

const igPosting = async () => {
  const getInstagramAccountId = async (pageId, accessToken) => {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/v20.0/${pageId}`,
        {
          params: {
            fields: "instagram_business_account",
            access_token: accessToken,
          },
        }
      );

      const instagramAccountId = response.data.instagram_business_account.id;
      console.log("Instagram Business Account ID:", instagramAccountId);
      return instagramAccountId;
    } catch (error) {
      console.error(
        "Error fetching Instagram Account ID:",
        error.response ? error.response.data : error.message
      );
      return null;
    }
  };
  const addInstagramPost = async (instagramUserId, accessToken) => {
    console.log("Uploading to Instagram...");

    const imageUrl = process.env.ImageUrl;
    const caption = `An unforgettable moment on the pitch today! 🏏 Just when you thought things couldn't get more exciting, Nadeem turns the tables by sending Naseem heading back to the pavilion with a classic run out! Truly proof of why cricket is called a game of uncertainty! 🙌 💥

Indeed, it's not every day you see a gear shift of this magnitude. A big shout-out to Nadeem for his exceptional bowling skills. No boundaries, no runs, just sheer strategic play was what it took to turn this game around! 👏🏽

If you thought Naseem's innings were over too soon – well, that's the name of the game! 😶 Sometimes one ball is all it takes to change the course of the match. Better luck next time, Naseem! 🍀

Remember, folks - it's not just about the four's and six's - it's about strategy, skills and a whole lot of surprises! Can't wait to see what the next match brings. 🤩🔥

#HeroicBowler #NadeemVictory #CricketGame #RunOut #NoRunsNoBoundries #OneBallGame #GameChanger #CricketFans #CricketLove #MasterPlan #BowlingSkills #FieldingWin #NeverMissABall`;
    try {
      // Step 1: Create Media Object
      const mediaResponse = await axios.post(
        `https://graph.facebook.com/v20.0/${instagramUserId}/media`,
        {
          image_url: imageUrl,
          caption: caption,
          access_token: accessToken,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const creationId = mediaResponse.data.id;
      console.log("Media object created with ID:", creationId);

      // Step 2: Publish Media Object
      const publishResponse = await axios.post(
        `https://graph.facebook.com/v20.0/${instagramUserId}/media_publish`,
        {
          creation_id: creationId,
          access_token: accessToken,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Media published:", publishResponse.data);
      return;
    } catch (error) {
      console.error(
        "Error uploading to Instagram:",
        error.response ? error.response.data : error.message
      );
      throw new Error(error.message);
    }
  };

  // Example usage
  const pageId = process.env.PageId; // Replace with your Facebook Page ID
  const accessToken = process.env.AccessToken;
  const instaId = await getInstagramAccountId(pageId, accessToken);

  await addInstagramPost(instaId, accessToken);
};

export { igPosting };
