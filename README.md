# Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
#### Creating React App process
- `yarn create react-app perfume-app-frontend`
- `cd perfume-app-frontend`
- `yarn add react-router-dom`
- `yarn add bootstrap`
- `yarn add reactstrap`
- Add to `src/index.js`: `import 'bootstrap/dist/css/bootstrap.min.css'`
- `yarn start`
- Add the remote from your GitHub repository
- Create a default branch (main)
- Make an initial commit to the repository
- Use branch protection when working in teams

## React Components
- Add a Header component
- Add a Footer comonent
- Add a Home page
- Add an AboutUs page
- Add a ContactUs page
- Add a SignUp page
- Add a SignIn page
- Add a PerfumeIndex page
- Add a PerfumeShow page
- Add a PerfumeProtectedIndex page
- Add a PerfumeNew page
- Add a PerfumeEdit page
- Add a NotFound page
- Add mock data for User and Perfume
#### React Router
- Be sure to wrap `<App />` with `<BrowserRouter></BrowserRouter>` in > src > index.js

```
<React.StrictMode>
<BrowserRouter>
<App />
</BrowserRouter>
</React.StrictMode>
```

- and add `import { BrowserRouter } from "react-router-dom"` to your imports

#### Creating Perfume
- Setting up for connecting - `console.log(perfume)`
```
  const createPerfume = (perfume) => {
    console.log(perfume)
  }
```
- Look inside browser console to view created item
  - This will not change the data in your Index because your application pulling from mockPerfumes. But once connected to the backend, will add the new item in your database.

- Pass createPerfume function to PerfumeNew component through routes, PerfumeNew will use function as a prop.
```
  <Route path="/perfumenew" element={<PerfumeNew currentUser={currentUser} createPerfume={createPerfume} />} />
```

#### Updating Perfume
- Setting up for connecting - `console.log(perfume)` and `console.log(id)`
```
  const updatePerfume = (perfume, id) => {
    console.log(perfume)
    console.log(id)
  }
```
- Look inside browser console to view updated item
  - This will not change the data of your Index because your application pulling from mockPerfumes. But once connected to the backend, will update the item in your database.

- Pass updatePerfume function to PerfumeEdit component through routes, PerfumeEdit will use function as a prop.
```
  <Route path="/perfumeedit/:id" element={<PerfumeEdit perfumes={perfumes} updatePerfume={updatePerfume} />} />
```

#### Deleting Perfume
- Setting up for connecting - `console.log(id)`
```
  const deletePerfume = (id) => {
    console.log(id)
  }
```
- Look inside browser console to view deleted item (console will log the ID of the item deleted)
  - This will not change the data of your Index because your application pulling from mockPerfumes. But once connected to the backend, will delete the item in your database.

- Pass deletePerfume function to needed component through routes, component will use function as a prop.

### Contact Us Page Dependencies
- Use the following command in terminal to use Material UI icons: `yarn add @mui/icons-material @mui/material @emotion/styled @emotion/react`