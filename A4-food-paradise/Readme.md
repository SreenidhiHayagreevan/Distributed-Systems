# Node.js Web Server with Express

## Assignment Overview

This project involves setting up a Node.js web server using the Express framework. The server provides an API with multiple endpoints that serve information about categories, subcategories, and dishes. Users can search dishes based on specific criteria such as spiciness and price.

## Table of Contents

- [Installation Instructions](#installation-instructions)
- [API Endpoints](#api-endpoints)
- [Search Functionality](#search-functionality)
- [Testing the API](#testing-the-api)
- [Screenshots](#screenshots)
- [License](#license)

---

## Installation Instructions

### Prerequisites
1. Ensure you have **Node.js** installed. If not, download the latest version from [Node.js website](https://nodejs.org/).
2. Install all necessary packages by running the following commands in the terminal:

```bash
$ node --version
$ node
> console.log("Hello World!");
> Ctrl-D
$ npm install mysql
$ npm install -g express
$ npm install react react-dom --save
$ npm install webpack --save
$ npm install babel-loader babel-preset-es2015 babel-preset-react --save
$ npm install -g @aws-amplify/cli
```

### Installation Steps:
1. Clone the repository or download the files.
2. In the terminal, navigate to the project directory.
3. Run the following command to install dependencies:
```bash
$ npm install
```

4. Start the server:
```bash
$ node server.js
```

---

## API Endpoints

1. **List all categories**:
    - **URL**: `http://localhost:8081`
    - **Method**: `GET`
    - **Response**: A list of categories such as meat, seafood, etc.

2. **List all subcategories of a category**:
    - **URL**: `http://localhost:8081/:category` (e.g., `http://localhost:8081/meat`)
    - **Method**: `GET`
    - **Response**: A list of subcategories under the specified category (e.g., beef, pork, lamb).

3. **List all dishes under a subcategory**:
    - **URL**: `http://localhost:8081/:category/:subcategory` (e.g., `http://localhost:8081/meat/beef`)
    - **Method**: `GET`
    - **Response**: A list of dishes with their names, spiciness, and price.

4. **Search for spicy or non-spicy dishes**:
    - **URL**: `http://localhost:8081/search?spicy=True`
    - **Method**: `GET`
    - **Response**: A list of spicy dishes.
    - **URL**: `http://localhost:8081/search?spicy=False`
    - **Response**: A list of non-spicy dishes.

5. **Search for dishes based on price**:
    - **URL**: `http://localhost:8081/search?price<30`
    - **Method**: `GET`
    - **Response**: A list of dishes with price less than $30.
    - **URL**: `http://localhost:8081/search?price<=30`
    - **Response**: A list of dishes with price less than or equal to $30.

---

## Search Functionality

The search functionality supports filtering by:

- **Spicy**: Users can search for spicy or non-spicy dishes by setting the `spicy` query parameter.
- **Price**: Users can filter dishes based on price using comparison operators (`<`, `<=`, `>`, `>=`). For example:
  - `http://localhost:8081/search?price<30`
  - `http://localhost:8081/search?price>=50`

---

## Testing the API

To test the functionality of the API, use the following URLs in your browser or API client (e.g., Postman):

1. **List categories**: `http://localhost:8081`
2. **List subcategories under "meat"**: `http://localhost:8081/meat`
3. **List dishes under "beef"**: `http://localhost:8081/meat/beef`
4. **List spicy dishes**: `http://localhost:8081/search?spicy=True`
5. **List dishes priced less than $30**: `http://localhost:8081/search?price<30`

---

## Screenshots

Please refer to the attached PDF for screenshots showing the output of each API request. You can also find the complete code for the server in this repository.

---

## License

This project is licensed under the MIT License.




