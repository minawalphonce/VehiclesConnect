# VehiclesConnect

## Steps to run the Apis.
1- clone the repository 
```
git clone https://github.com/minawalphonce/VehiclesConnect.git
```

2-open the solution **Altern.sln**

3- from the project **Alten.VehiclesConnect.Web** open the file web.config and change the connectionString *defaultConnectionString* to a switable one. 

4- from the package manager console, choice the project **Alten.VehiclesConnect.Data** and run the command 
```
Update-Database
```

5- build the project. 

6- go to `http://localhost:9870/api` to see the api in action.

## Available list of actions 
- GET api/vehicles 
- PUT api/vehicles/{id}
- GET api/customers


# Steps to run the Frontend
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

1- go to folder  **/clients/vehicles-connect** and run 
```
ng build
```

2- the generated files will be added to the project **Alten.VehiclesConnect.Web\www** folder 

3- run the project from visual studio normaly you will be redirected automatically to **/www/dashboard**. 

## Ping Simulator
use the ping simulator to simulate a vehicles pings, once you click ping button, the status will be reflected automatically to the the dashboard. 
