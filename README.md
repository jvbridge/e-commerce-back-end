An e-commerce back end that implements a REST API

## Introduction

This is an "ecommerce site" back end that allows for restful interaction with
a mysql database.

There are three main tables that the user of the API interacts with:

* Product
* Tag
* Category

There is a fourth table called `Product Tag` which is used to implement the
many to many relationship between products and tags (one product has many tags 
and one tag can reference many products)

## Installation

This application requires mysql and node.js to be installed. Download the 
repository and run `npm install` in the main directory. After that open up
mysql in the command prompt and souce `./db/schema.sql` to ensure that you have
an empty database. Optionally you may run `npm run seed` to seed the database 
with some dummy data. Additionally you need a .env file with the following
values

``` env
DB_USER='user with authority (possibly root)' 
DB_PW='your password'
DB_NAME='ecommerce_db'
```

https://user-images.githubusercontent.com/6423593/166869973-5bce1d26-e5dc-486c-b27c-67db6353f6bf.mp4

## Useage

Start the server by running `npm start` in the main directory. By default the
server runs on port 3001.

There are three main routes the api exists on. 

* `/api/tags`
* `/api/categories`
* `/api/products`

Sending a GET request on any of those routes will return JSON with their 
respective table. Sending a GET request on `<route here>/<id #>` will return the
row of that table with that ID. For example a GET request to `/api/tags/1` will
return the tag with an ID of 1. 

Sending a POST request to any of the base routes will create a new row in their
table with an appropriate member. The POST request requires JSON in the body to
initialize values.

### Category

``` json
{
  "category_name": "String with the name of the new category"
}
```

### Tag

```json
{
	"tag_name": "Tag's name"
}
```

### Product

``` json
{
   "product_name": "Product name",
    "price": 200.00, // Price for the product
    "stock": 3, // how many items the database has
    "tagIds": [1, 2, 3, 4] // Array of tags associated with the product
    // The tags table will automatically update as appropriate
}
```

Sending a PUT request to a route with the id at the end will allow you to update
the row with that ID. Tags and categories allow you to update their name, as 
long as the JSON is in the same form as the POST request.

Products will only allow you to update their tags, by sending json of the new
tags.

```json
{
	"tagIds": [1,3,5,10] // ids of the tags you wish to associate with the product
}
```


https://user-images.githubusercontent.com/6423593/166870071-8a08b392-c954-4e77-85c3-d2df39808dac.mp4


## Credits

Much of the stub code was given as a part of the Berkeley Coding bootcamp. 

Technology badges from https://github.com/Ileriayo/markdown-badges

License badge from: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

Technologies used:

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

and the dotenv node package https://www.npmjs.com/package/dotenv


## License

MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
