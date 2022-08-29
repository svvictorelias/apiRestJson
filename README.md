## Documentation 

Link to api documentation: http://localhost:3333/api-docs/

## Configuring and initializing the project

First, you must clone the application on your machine:

```
    git clone https://github.com/svvictorelias/apiRestJson.git
```

through ssh
```
    git clone git@github.com:svvictorelias/apiRestJson.git
```

Use `npm install` to install all project dependencies.

```
    npm install 
```

And finally, use the `npm run dev` to start the server in development mode using the library `nodemon` in this path: [http://localhost:3333](http://localhost:3333)
```
    npm run dev
```

## Endpoints

** All information on endpoints in parentheses "{}" are the values or parameters


<h3>
    Schedules
</h3>

| Action                                                                                                         | Request | endpoint                         | 
|--------------------------------------------------------------------------------------------------------------|------------|------------------------------|
| List all schedules                                                                                    | `GET`      | /schedules                       | 
| List schedules in date range - query: {start, end}                                                                                     | `GET`      | /schedules/schedulesAvailable                       | 
| Create a new Schedule - body: {type,day,intervals}                                                                                        | `POST`     | /schedules                       |
| Delete a Schedule                                                 | `DELETE`   | /schedules/delete/{id}     |

<br/>

## With more details, acess the http://localhost:3333/api-docs/

## Contact https://www.linkedin.com/in/svvictorelias/

