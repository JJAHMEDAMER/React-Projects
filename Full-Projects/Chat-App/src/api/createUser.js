import axios from "axios";

// Create user on chatengine.io
const createUser = async (req, res) => {
  const { userId, userName } = req.body;

  axios
    .post(
      "https://api.chatengine.io/projects/people/",
      {
        username: userName,
        secret: userId,
      },
      { headers: { "private-Key": process.env.chat_engine_private_key } }
    )
    .then((apiRes) => {
      res.json({
        body: apiRes.body,
        error: null,
      });
    })
    .catch(() => {
      res.json({
        body: null,
        error: "Big Error",
      });
    });
};

export default createUser;
