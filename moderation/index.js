const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    const { content } = data;
    const regexp = /orange/g;
    const result = content.match(regexp);

    const status = result ? "rejected" : "approved";

    await axios.post("http://localhost:4005/events", {
      type: "CommentModerated",
      data: {
        ...data,
        status,
      },
    });

    res.send({});
  }
});

app.listen(4003, () => {
  console.log("Server listening on 4003");
});
