const axios = require("axios");

class discord {
   constructor(discord) {
      this.token = discord["token"];

      this.getUser = this.constructor.user;
      this.getInvite = this.constructor.invite;
      this.getGuild = this.constructor.guild;
   }
   static async user(id) {
      if (!id) return new Error("No discord Id provided");
      return new Promise((resolve) => {
         resolve(
            connect({
               type: "users",
               value: id,
               token: this.token,
               err: "No user found with that id"
            })
         );
      });
   }
   static async invite(code) {
      if (!code) return new Error("No invite code provided");
      return new Promise((resolve) => {
         resolve(
            connect({
               type: "invites",
               value: code,
               token: this.token,
               err: "No invite found with that code"
            })
         );
      });
   }
   static async guild(id) {
      if (!id) return new Error("No guild id provided");
      return new Promise((resolve) => {
         resolve(
            connect({
               type: "guilds",
               value: id,
               token: this.token,
               err: "No guild found with that id"
            })
         );
      });
   }
}

function connect(data) {
   const type = data.type;
   const value = data.value;
   const token = data.token;
   const error = data.err;

   return new Promise((resolve) => {
      axios
         .get(`https://discord.com/api/${type}/${value}`, {
            headers: {
               Authorization: "Bot " + token
            }
         })
         .then((res) => {
            resolve(res.data);
         })
         .catch((err) => {
            throw new Error(error);
         });
   });
}

module.exports = discord;
