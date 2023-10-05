## Pet Endpoints


| HTTP Request | Description |
| --- | --- |
| [GET /pet/{petId}]($e/pet/getPetById) | Find single pet details by providing pet Id |
| [POST /pet/{petId}]($e/pet/updatePetWithForm) | Update pet details using form data by providing pet Id |
| [DELETE /pet/{petId}]($e/pet/deletePet) | Delete a pet by providing pet Id |
| [POST /pet/{petId}/uploadImage]($e/pet/uploadFile) | Upload a pet image by providing pet Id and the image |
| [POST /pet]($e/pet/addPet) | Add a new pet to the store |
| [PUT /pet]($e/pet/updatePet) | Update an existing pet by Id |
| [GET /pet/findByStatus]($e/pet/findPetsByStatus) | Find pets by providing status values. Multiple Status values can be provided. |
| [GET /pet/findByTags]($e/pet/findPetsByTags) | Find pets by providing tags. Multiple tags can be provided |

## Store Endpoints


| HTTP Request | Description |
| --- | --- |
| [GET /store/inventory]($e/store/getInventory) | Returns a map of status codes to quantities |
| [POST /store/order]($e/store/placeOrder) | Place a new order in the store |
| [GET /store/order/{orderId}]($e/store/getOrderById) | Get order details by providing order Id |
| [DELETE /store/order/{orderId}]($e/store/deleteOrder) | Delete an order from store by providing order Id |

## User Endpoints


| HTTP Request | Description |
| --- | --- |
| [POST /user]($e/user/createUser) | Add a new user to Pet Store |
| [POST /user/createWithList]($e/user/createUsersWithListInput) | Create list of user by providing an array |
| [GET /user/login]($e/user/loginUser) | Login a user into the system |
| [GET /user/logout]($e/user/logoutUser) | Logs out current logged in user session |
| [GET /user/{name}]($e/user/getUserByName) | Get user details by providing user name |
| [PUT /user/{name}]($e/user/updateUser) | Update an existing user's details in the system |
| [DELETE /user/{name}]($e/user/deleteUser) | Delete a user from the system by providing user Id |