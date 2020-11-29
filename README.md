# kitalulustest

### Question

```
Please execute it using one of the following languages, Java, NodeJs, or Golang. If you want to implement with other languages, please explain/give us a benchmark for choosing that language. 
```

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

### Answer