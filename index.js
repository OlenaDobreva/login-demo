import express from "express";

// Reads the PORT value from the environment variable `PORT`.
// If not found, uses the default value of 3000.
const PORT = process.env.PORT || 3000;
const app = express();

const dirName = path.dirname(new URL(import.meta.url).pathname);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/", (request, response) => {
  // Logged in the terminal on the SERVER side
  console.log("Someone wants the root route!");
  // Sent to the client (visible in the browser window)
  response.send("Welcome to our site! 😎");
});
