# ASP.NET Core & Vue.js Starter Application using MySql

ASP.NET Core and React using MySql Databae - with Webpack (with HMR), Web API, Entity Framework and Auto Mapper using Repository Pattern and Unit of Work.

# Features

- **ASP.NET Core 3.1**
  - Web API
  - Entity Framework
  - Repository Pattern
- **React Js**
- **Json Web Token (JWT) with Identity**
- **Webpack**
  - HMR (Hot Module Replacement/Reloading)
- **Bootstrap 4**
- **MySql Database**

# Prerequisites:

- [.Net Core 3.1](https://www.microsoft.com/net/download/)
- [NodeJS](https://nodejs.org/) >= 10.x
- [VSCode](https://code.visualstudio.com/) (ideally), or VS2019
- [MySql](https://www.mysql.com/downloads/) 5.7 or Higher

# Installation:

### Download -OR- Clone this Repo

- Clone this repository : `$ git clone https://github.com/Harendra1993/React.Net-Core.git`
- `$ cd React.Net-Core/`
- `$ npm i --prefix src/VueDotNetCoreMySql.App/ && dotnet restore`
- (If using VSCode) `$ code .`
- (If using Visual Studio) Open the `*.sln` file with "Open project" from Visual Studio IDE

Now you can open the project via Visual Studio or VSCode, press F5 to run the application!

Note:

- This will automatically run `dotnet restore`
- ([Official documentation](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new?tabs=netcore2x))

## Start the application:

You have two choices when it come at how your preffer to run it. You can either use the command line or the build-in run command.

### 1. Using the command line

Run the application using `dotnet run` or `npm run dev`

- note `dotnet run` should be run in `Development` environment for hot reloading. This setting can be set either within the command line or via the `launchSettings.json` available in the `Properties` folder.

### 2. Using the built-in run command

Run the application in VSCode or Visual Studio 2019 by hitting `F5`.

## View your application running

When running the app using debug menu or `F5` VS open auto the app in the browser;

## Database Migrations.

- Edit `ConnectionStrings` inside `appsettings.json` file.
- Create Sample users in Database `dotnet ef database update`
- Create new migration `dotnet ef migrations add NewMigration -o Domain/Data`
- Update the Database `dotnet ef database update`
- ([Checkout more migration commands](https://docs.microsoft.com/en-us/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli))
