# Allen Bot Whatsapp MD ❤️

How to run on your own hosting

## ⛵ Prerequisites

-   [Git](https://git-scm.com/)
-   [Node js](https://nodejs.org/en/)
-   Internet / Tethering 🌐️

## 🍀 Installation

Run the following code to clone the repo

```sh
> git clone https://github.com/Paiiss/bot-wa.git
> cd bot-wa
```

Run this to install the depencencies

```sh
> npm i
```

## ✍ Configuration

Edit the config in the [app.json](https://github.com/Paiiss/XtawVBotz/blob/master/app.json) file (already contains a description for each key)

```json
"env": {
        "MONGODB_URL": {
            "description": "Mongo DB url (required)",
            "value": "mongodb+srv://allen:allen@allen-cluster.yx9pwer.mongodb.net/XtrawVBotz"
        },
        "PREFIX": {
            "description": "Prefix of bot",
            "value": "."
        },
        "LOLHUMAN_KEY": {
            "description": "LoL Human Apikey (https://api.lolhuman.xyz/)",
            "value": "apikey"
        },
        "GROUP_ID": {
            "description": "For send bot report",
            "value": "6285159907432-1635319627@​g.us"
        },
        "BOT_NAME": {
            "description": "Bot Name",
            "value": "XtawVBotz"
        },
        "TIME_ZONE": {
            "description": "Time Zone Bot",
            "value": "Asia/Jakarta"
        },
        "FOOTER": {
            "description": "Footer of bot",
            "value": "XtawVBotz • Paiiss"
        },
        "LINK_GROUP": {
            "description": "Link Your Group Support",
            "value": https://chat.whatsapp.com/CTxRUSz4FNp5kQ4h670ni2"
        }
    }
```

## 💻 Running

```sh
npm start
```

Running the above command will run the bot process, the Qr code will come out in the terminal the first time it is run

## 🤡 Don't want the hassle?

Set up on [Heroku](https://github.com/Paiiss/XtawVBotz/blob/master/Self-Heroku.md)
