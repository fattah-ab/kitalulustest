# kitalulustest

## Question


Please execute it using one of the following languages, Java, NodeJs, or Golang. 
If you want to implement with other languages, please explain/give us a benchmark for choosing that language. 


```
type Question struct {
ID          int32     
Uuid        uuid.UUID     
question    string     
CreatedAt   time.Time     
CreatedBy   string     
UpdatedAt   time.Time     
UpdatedBy   string     
IsActive    bool  
}
```

**API**
```
1. As a user I can get list of question with pagination 
2. As a user I can create new question 
3. As a user I can update existing question 
4. As a user I can delete question 
5. As a user I can get detail question with uuid 
```

**Additional Points**
```
1. Logging: related with API call & response time 
2. Error message with localization 
3. Dockerize
```

## Answer

```
to test this project please :

1. Clone this repository
2. Npm install at terminal
3. NPM run dev at terminal for running the program
4. Run endpoint/restfull API at Postman
```

## End Point/Restfull API

**Create Question**
### POST http://localhost:3000/question/create

```
Request Header : Not Needed
```
```
Request Body : {
  "question": "<user question>",
  "createdBy": "<user name>"
}
```
```
Response: (200 - OK){
    "success": true,
    "message": "Success creating Question!",
    "data": {
        "updatedBy": "<user name>",
        "isActive": "<user status>",
        "_id": "<user id>",
        "question": "<user question>",
        "createdBy": "<user name>",
        "createdAt": "<createdAt>",
        "updatedAt": "<updatedAt>"
    }
}
```
```
Response: (400 - Bad Request){
    "success": false,
    "message": "<error message>",
}
```

**Get All Question**
### GET http://localhost:3000/question/?page=page
### example http://localhost:3000/question/?page=2

```
Request Header : Not Needed
```
```
Request Body : Not Needed
```
```
Response: (200 - OK){
    "success": true,
    "message": "Successfully retrieve all Question!",
    "data": [
        {
            "updatedBy": "<user name>",
            "isActive": "<user status>",
            "_id": "<user id>",
            "question": "<user question>",
            "createdBy": "<user name>",
            "createdAt": "<createdAt>",
            "updatedAt": "<updatedAt>"
        },
        {
            "updatedBy": "<user name>",
            "isActive": "<user status>",
            "_id": "<user id>",
            "question": "<user question>",
            "createdBy": "<user name>",
            "createdAt": "<createdAt>",
            "updatedAt": "<updatedAt>"
        }
    ],
    "totalPages": "<total pages>",
    "currentPage": "<current page>"
}
```
```
Response: (400 - Bad Request){
    "success": false,
    "message": "<error message>",
}
```

**Get Question by id**
### GET http://localhost:3000/question/:id
### example http://localhost:3000/question/5fc355370741ca3434946d74

```
Request Header : Not Needed
```
```
Request Body : Not Needed
```
```
Response: (200 - OK){
    "success": true,
    "message": "Successfully showing detail question!",
    "data": {
        "updatedBy": "<user name>",
        "isActive": "<user status>",
        "_id": "<user id>",
        "question": "<user question>",
        "createdBy": "<user name>",
        "createdAt": "<createdAt>",
        "updatedAt": "<updatedAt>"
        }
```
```
Response: (400 - Bad Request){
    "success": false,
    "message": "<error message>",
}
```

**Edit Question**
### PUT http://localhost:3000/question/edit/:id
### example http://localhost:3000/question/edit/5fc355370741ca3434946d74

```
Request Header : Not Needed
```
```
Request Body : {
  "question": "<user question>",
  "updatedBy": "<user name>"
  "isActive": "<user status>"
}
```
```
Response: (200 - OK){
    "success": true,
    "message": "Question has been Updated.",
    "data": {
        "updatedBy": "<user name>",
        "isActive": "<user status>",
        "_id": "<user id>",
        "question": "<user question>",
        "createdBy": "<user name>",
        "createdAt": "<createdAt>",
        "updatedAt": "<updatedAt>"
        }
```
```
Response: (400 - Bad Request){
    "success": false,
    "message": "<error message>",
}
```

**Delete Question**
### DELETE http://localhost:3000/question/delete/:id
### example http://localhost:3000/question/delete/5fc3b5d0f1573216fca1cf7d

```
Request Header : Not Needed
```
```
Request Body : Not Needed
```
```
Response: (200 - OK){
    "success": true,
    "message": "Question has been deleted.",
    "data": {
        "updatedBy": "<user name>",
        "isActive": "<user status>",
        "_id": "<user id>",
        "question": "<user question>",
        "createdBy": "<user name>",
        "createdAt": "<createdAt>",
        "updatedAt": "<updatedAt>"
        }
```
```
Response: (400 - Bad Request){
    "success": false,
    "message": "<error message>",
}
```