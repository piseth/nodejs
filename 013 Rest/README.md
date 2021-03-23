# Nodejs Restful API CRUD
Restful api curd tutorial for node.js beginner.
<img align='right' src="https://media.giphy.com/media/SAOe8gWe93k26DdyGe/giphy.gif" width="200">
### Installation

```
git clone https://github.com/CrackiGuy/node-restapi.git
```

```
cd node-restapi && npm install
```
```
npm start
```

### Routes List
|route    |method   |description
|:----|:----|:----|
|/customers| get     |get all customers
|/customers/:id|get  |get a customer via :id
|/customers| post    |create new customer
|/customers| put     |update a customer info
|/customers/:id| delete    |delete a customer via :id
|/customers |delete  |delete all customers

### Using With
* [Express.js](https://expressjs.com)
* [Body-paser](https://www.npmjs.com/package/body-parser)
* [Mysql](https://www.npmjs.com/package/mysql)
* [Cors](https://www.npmjs.com/package/cors)
