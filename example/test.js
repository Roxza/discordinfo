const discordinfo = require("../index");
const i = new discordinfo({
   token: "."
});

i.getUser("939851664389730304").then((user) => {
   console.log(user);
});
