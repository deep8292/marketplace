import { RouterProvider } from "react-router-dom"
import router from './routes/Routes';
import { UserProvider } from "./context/userContext";
function App() {

  return (
    <div>
      <UserProvider>
        <RouterProvider router={router}/>
      </UserProvider>
    </div>
  )
}

export default App;
