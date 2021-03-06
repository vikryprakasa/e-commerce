# e-commerce
Membuat Website e-commerce

## Endpoints
````
- POST /register
- POST /login
- GET /products
- POST /products
- GET /products/:id
- PUT /products/:id
- DELETE /products/:id
- GET /carts
- POST /carts/:productId
- GET /carts/:id
- PATCH/carts/
- PATCH/carts/quantity/:CartId
- DELETE /carts/:id

````

### RESTful endpoints

### POST /register

> Register to HypeShop

_Request Header_
```
not needed
```

_Request Body_
```json
{
    "email": "<email to get insert into>",
    "password": "<password to get insert into>",
    "createdAt": "2020-09-09T14:55:06.648Z",
    "updatedAt": "2020-09-09T15:30:58.690Z", 
}
```

_Response (201)_
```json
{
    "id" : <id of user>
    "email":<email of user> 
}
```
_Response (400 - Bad Request)_
```json
{
    "message": "Invalid email or password"
}
```

_Response (500 - Internal Server Error)_
```json
{
    "message": "Internal Server Error"
}
```

### POST /login

> Login to HypeShop

_Request Header_
```
not needed
```

_Request Body_
```json
{
    "email": "<email to get insert into>",
    "password": "<password to get insert into>"
}
```

_Response (200)_
```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJmYXVkemFuIiwiaWF0IjoxNTk4OTU1OTk2fQ.-bZ3Gi4AXPQMtrHfbxJ605On57u4gRXfU0ok88aIW94"
}
```
_Response (400 - Bad Request)_
```json
{
    "message": "Invalid email or password"
}
```

_Response (500 - Internal Server Error)_
```json
{
    "message": "Internal Server Error"
}
```

### GET /products

> Show all HypeShop products


_Request Body_
```
not needed
```

_Response (200)_
```json
{
   "id": "<id_of_the_product>",
    "name": "<product_name>",
    "image_url": "<product_image_url>",
    "price": "<product_price>",
    "stock": "<product_stock>",
    "createdAt": "2020-09-09T14:55:06.648Z",
    "updatedAt": "2020-09-09T15:30:58.690Z", 
}
```

_Response (401 - Not Authenticated)_
```json
{
  "message": "Doesnt recognize user.."
}
```

_Response (500 - Internal server error)_
```json
{
  "message": "Internal Server Error"
}
```

### POST /products

> Create new products

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```json
{
  "name": "<name to get insert into>",
  "image_url": "<image_url to get insert into>",
  "price": "<price to get insert into>",
  "stock": "<stock to get insert into>"
}
```

_Response (201 - Created)_
```json
{
  "id": "<given id by system>",
  "name": "<posted name>",
  "image_url": "<posted image_url>",
  "price": "<posted price>",
  "stock": "<posted stock>",
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}
```

_Response (401 - Not Authenticated)_
```json
{
  "message": "Doesnt recognize user.."
}
```

_Response (400 - Bad Request)_
```json

{
  "message": "Please fill the field!, Do not input value under 1!"
}
```

### GET /products/:id

> Find detail product by ID

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
   "id": 1,
    "name": "<product_name>",
    "image_url": "<product_image_url>",
    "price": "<product_price>",
    "stock": "<product_stock>",
    "createdAt": "2020-09-09T14:55:06.648Z",
    "updatedAt": "2020-09-09T15:30:58.690Z", 
}
```

_Response (401 - Not Authenticated)_
```json
{
  "message": "Doesnt recognize user.."
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Not Found"
}
```

### PUT /products/:id

> Update product by ID

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```json
{
  "name": "<name to get insert into>",
  "image_url": "<image_url to get insert into>",
  "price": "<price to get insert into>",
  "stock": "<stock to get insert into>"
}
```

_Response (200)_
```json
{
  "id": "<selected id>",
  "name": "<updated name>",
  "image_url": "<updated image_url>",
  "price": "<updated price>",
  "stock": "<updated stock>",
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}
```

_Response (400 - Bad request)_
```json
{
  "message": "Please fill the field!, Do not input value under 1!"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Not Found"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal Server Error"
}
```

### DELETE /products/:id

> Delete product data by ID

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
   1
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Not Found"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal Server Error"
}
```

### GET /carts

> Show all HypeShop user carts

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
    "UserId": "<UserId whos logged in>",
    "ProductId": "<ProductId from the product user add>",
    "quantity": "<cart_quantity>",
    "status": "false",
    "Product": "<object_Product>"
    "createdAt": "2020-09-09T14:55:06.648Z",
    "updatedAt": "2020-09-09T15:30:58.690Z", 
}
```

_Response (401 - Not Authenticated)_
```json
{
  "message": "Doesnt recognize user.."
}
```

_Response (500 - Internal server error)_
```json
{
  "message": "Internal Server Error"
}
```
### POST /carts:id

> Create new products

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (201 - Created)_
```json
{
    "UserId": "<UserId whos logged in>",
    "ProductId": "<ProductId from the product user add>",
    "quantity": "<cart_quantity>",
    "status": "false",
    "Product": "<object_Product>"
    "createdAt": "2020-09-09T14:55:06.648Z",
    "updatedAt": "2020-09-09T15:30:58.690Z", 
}
```

_Response (401 - Not Authenticated)_
```json
{
  "message": "Doesnt recognize user.."
}
```

_Response (400 - Bad Request)_
```json

{
  "message": "Please fill the field!, Do not input value under 1!"
}
```
### PUT /carts/:id

> Update product by ID

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```json
    not needed

```

_Response (200)_
```json
{
    "UserId": "<UserId whos logged in>",
    "ProductId": "<ProductId from the product user add>",
    "quantity": "<cart_quantity>",
    "status": "false",
    "Product": "<object_Product>"
    "createdAt": "2020-09-09T14:55:06.648Z",
    "updatedAt": "2020-09-09T15:30:58.690Z", 
```

_Response (400 - Bad request)_
```json
{
  "message": "Please fill the field!, Do not input value under 1!"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Not Found"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal Server Error"
}
```
### GET /carts/:id

> Find detail product by ID

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
   "UserId": "<UserId whos logged in>",
    "ProductId": "<ProductId from the product user add>",
    "quantity": "<cart_quantity>",
    "status": "false",
    "Product": "<object_Product>"
    "createdAt": "2020-09-09T14:55:06.648Z",
    "updatedAt": "2020-09-09T15:30:58.690Z", 
}
```

_Response (401 - Not Authenticated)_
```json
{
  "message": "Doesnt recognize user.."
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Not Found"
}
```

### DELETE /carts/:id

> Delete product data by ID

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
   1
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Not Found"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal Server Error"
}
```

_Response (401 - Not Authenticated)_
```json
{
  "message": "Doesnt recognize user.."
}
```

_Response (500 - Internal server error)_
```json
{
  "message": "Internal Server Error"
}
```
### PATCH /carts/quantity/:cartId

> Create new products

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (201 - Created)_
```json
{1}
```

_Response (401 - Not Authenticated)_
```json
{
  "message": "Out Of Stock"
}
```

_Response (400 - Bad Request)_
```json

{
  "message": "Please fill the field!, Do not input value under 1!"
}
```