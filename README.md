# React Online Marathon (Sprint 16)
Testing JS Applications (React Applications)

# Application
- The application is very simple which consist of only two components: **App** component, **Info** component and one service module named **DataService**
- **DataService** module is used for gathering information from GitHub API using *username*
- Run the application using ```$npm start```
- Open Web Browser and in address bar type URL like this ```http://localhost:3000``` (will be done automatically after the previous command :-) )

## Tasks
Please write unit tests to check functionality of all modules (components, service) with using Jest framework
- [x] **App** component
- [x] **Info** component
- [x] **DataService** module

All testing modules should be placed at ```src/tests``` directory
All test specifications should be real it means that code like this ```expect(2 + 2).toBe(4)``` isn't good :)
Code coverage is calculating by Jest framework and should be at least **90%** 

## A pieces of advice
- The application is written using **create-react-app** tool with pre-configured **jest** testing framework
- ~~When you need~~ to use test doubles (mocking) please create directory ```src/__mocks__``` and put all mocking modules to this directory
- To calculate coverage please use the following command ```$npm test -- --coverage```

### Mocking
- As a continuation of previous part :), for example, during testing **DataService** module the 3rd pary library (**axios**) should be mocked!!

**~~Have a nice coding games :)~~**

*I hope this little task will help you to understand some basics of unit testing and not only*
