const express = require("express");
const app = express();
const path = require("path");
const spotifyApi = require("spotify-web-api-node");

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

const clientId = "7fa180276e5a48cfbc09bdcb7146561a",
  clientSecret = "6e1a9e3a6e3a45d1ad106c3384b2f447";

const spotify = new spotifyApi({
  clientId,
  clientSecret
});

// Retrieve an access token
spotify
  .clientCredentialsGrant()
  .then(data => {
    spotify.setAccessToken(data.body["access_token"]);
  })
  .catch(error => {
    console.log("Something went wrong when retrieving an access token", error);
  });

app.get("/", (req, res) => {
  res.render("form");
});

app.get("/artists", (req, res) => {
  spotify
    .searchArtists(req.query.artist)
    .then(data => {
      res.render("artists", data.body.artists);
    })
    .catch(err => {
      console.log("The error while searching artists occurred: ", err);
    });
});

app.get("/albums/:artistId", (req, res, next) => {
  spotify
    .getArtistAlbums(req.params.artistId)
    .then(data => {
      res.render("albums", data.body);
    })
    .catch(err => {
      console.log("The error while searching albums occurred: ", err);
    });
});

app.get("/albums/:albumId/tracks", (req, res, next) => {
  spotify
    .getAlbumTracks(req.params.albumId)
    .then(data => {
      data.body.items = data.body.items.map(song => {
        const { duration_ms: ms } = song;
        let min = Math.floor((ms / 1000 / 60) << 0);
        let sec = Math.floor((ms / 1000) % 60);
        song.duration_ms = `${min}:${sec}`;
        return song;
      });
      res.render("tracks", data.body);
    })
    .catch(err => {
      console.log("The error while searching albums occurred: ", err);
    });
});

app.listen("3000", () => {
  console.log("corriendo en el 3000");
});
