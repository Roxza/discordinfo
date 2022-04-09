[![NPM](https://img.shields.io/npm/dt/discordinfo.js.svg?maxAge=3600)](https://npmjs.com/package/discordinfo.js/)

<h1 align="center"><img width=40 src="https://cdn.roxza.me/images/discord.png"> Discord İnfo</h1>
<h6 align="center">Developed with ❤️ by Roxza</h6>

# 📦Installation

```console
npm i discordinfo.js  --save
yarn add discordinfo.js
```

# 📝 Usage

```js
const discordinfo = require("discordinfo.js");
const i = new discordinfo({
   token: "roxza" // discord bot token https://discord.com/developers
});

i.getUser("539098120981829120").then((user) => {
   console.log(user);
   /*
   {
    "id": "939851664389730304",
    "username": "Roxza",
    "avatar": "a_957fa02076"
    ...
   }
*/
});

//i.getUser("939851664389730304").then(user => { user });
//i.getInvite("js").then(guild => { guild });
//i.getGuild("939851664389730304").then(guild => { guild });
```

# Parameters

Below is the list of available parameters

| Parameter | Description                                               |
| --------- | --------------------------------------------------------- |
| getUser   | Displays Discord user information..                       |
| getGuild  | Displays Discord guild information.                       |
| getInvite | Displays detailed information of the Discord invite code. |

## License

Webscreen is **licensed** under the **[MIT License]**. The terms of the license are as follows:

    The MIT License (MIT)

    Copyright (c) 2022 - Roxza

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
