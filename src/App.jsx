import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import LoginPage from "./Pages/LogePage";
import HomePage from "./Pages/HomePage";
import Layout from "./Layout";

export default function App() {
  return (
    <>
<Layout>
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<LoginPage />} />
  <Route path="/home" element={<HomePage />} />
 </Routes>
 </BrowserRouter>
 </Layout>
    </>
  )
}