import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import {BrowserRouter, Routes, Route}
// import {Person} from "@mui/icons-material"


function App()
{
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
    </Routes>
    
    </Routes>
    
    </BrowserRouter>
  )

}

export default App
