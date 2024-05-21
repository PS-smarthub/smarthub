const express = require("express");
const session = require("express-session");
const msal = require("@azure/msal-node");

const app = express();

const msalConfig = {
  auth: {
    clientId: "d3e5ad7f-3183-4811-a01c-b1ad27a3736d",
    authority:
      "https://login.microsoftonline.com/0ae51e19-07c8-4e4b-bb6d-648ee58410f4",
    clientSecret: "GB78Q~dzJYwKumb5OxRf9Mwggi0SKoB-NSpEuboJ",
  },
  system: {
    loggerOptions: {
      loggerCallback(loglevel, message, containsPii) {
        console.log(message);
      },
      piiLoggingEnabled: false,
      logLevel: msal.LogLevel.Info,
    },
  },
};

const pca = new msal.ConfidentialClientApplication(msalConfig);

app.use(
  session({
    secret: "GB78Q~dzJYwKumb5OxRf9Mwggi0SKoB-NSpEuboJ",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // Use secure cookies in production
  })
);

app.get("/login", (req, res) => {
  const authCodeUrlParameters = {
    scopes: [
      "User.Read",
      "ChannelMessage.Send",
      "Chat.Create",
      "User.ReadBasic.All",
    ],
    redirectUri: "http://localhost:3002/redirect",
  };

  pca
    .getAuthCodeUrl(authCodeUrlParameters)
    .then((response) => {
      res.redirect(response);
    })
    .catch((error) => {
      console.log(JSON.stringify(error));
      res.status(500).send(error);
    });
});

app.get("/redirect", (req, res) => {
  const tokenRequest = {
    code: req.query.code,
    scopes: ["user.read"],
    redirectUri: "http://localhost:3002/redirect",
  };

  pca
    .acquireTokenByCode(tokenRequest)
    .then((response) => {
      req.session.user = response.account;
      res.redirect("/");
    })
    .catch((error) => {
      console.log(JSON.stringify(error));
      res.status(500).send(error);
    });
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
});

app.get("/", (req, res) => {
  if (req.session.user) {
    console.log(req.session);
    res.send(`Hello ${req.session}`);
  } else {
    res.send('<a href="/login">Login</a>');
  }
});

app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
