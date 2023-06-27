import { RouterProvider } from "react-router-dom"
import router from './routes/Routes';
import { UserProvider } from "./context/userContext";
function App() {

  return (
    <>
      <UserProvider>
        <RouterProvider router={router}/>
      </UserProvider>
    </>
  )
}

export default App;
