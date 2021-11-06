# REACT - Phone Catalog App 💻
This project is a phone catalogue app which must have a **REST API** providing phone´s information and implemented using NodeJS/Rails/Java... I chose NodeJS. It also must have a **REACT APP** allowing the user to browse the phones catlog.

### ✳ Building the REST API

I retrieved the data from a [JSON file](catalog-app/public/phones.json) that I created, that contains all the information relating to phones using ```fetch```. To make a simple GET request with fetch we just need to include the URL endpoint to which we want to make our request. We want to make this request once our React component has mounted.

To do so, we make our request within the useEffect hook, and we make sure to provide an empty dependencies array as the second argument, so that our request is only made once.

As for the retrieved data from the first page i used [```Axios```](https://github.com/axios/axios) using a GET request to then map my data fron my JSON fie to obtain my related phone information.

👉 [**This**](https://github.com/milopo00/MAP-phone-catalog.git) is my starting repository that i ended up upgrading while learning more things. When i did not know about axios i just imported directly the images links with its corresponding button; contrary to this first one, the new one is more efficient with this GET calling method.

### ✳ Using React Hooks.

I have build this app using functional components from React. As you could see, I have used the hooks ```useState``` and ```useEffect```.

### ✳ Overall use.

Programming languages I learned during this project:

- React.js
- Node.js
- JavaScript
- html
- CSS
- JSON

What i have learned about React.js and Node.js:

- nodemon
- axios
- express
- react
- router-dom
- scripts
- Material Ui
- Hooks
- ReactBootStrap
- fetching data from local API

⚠ Disclaimer => Learning them does not mean i have used them at the end in the final project 

## Pre-requeriments to run the App.
You need to have [```Node```](https://nodejs.org/es/)

I really do not know how to run things when taken out from github but if i am not wrong this should be the way:
clone this repo to a new directory.
> ```console
>  $ git clone https://github.com/milopo00/phone-catalog-app-dcsl.git
> ```

and run npm install in order to install the necesary dependencies:
> ```console
> $ cd catalog-app
> $ npm install
> ```

Once you have installed the dependencies, you are ready to run the app with ```npm start```:
>  ```console
> $ cd catalog-app
> $ npm start
> ```
> 👉 Open http://localhost:3000 to view in the browser
> 
## 👩 Author

This App has been developed by [**MARTA GARCIA CANORA**](https://github.com/milopo00) as an aplication to DCSL GuidesSmith.
