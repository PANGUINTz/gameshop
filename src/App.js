import { Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages";
import MainLayout from "./layouts/MainLayout";
import Layout from "./components/Layout";
import RequireAuth from "./features/auth/RequireAuth";
import Login from "./features/auth/Login";

function App() {
  return (
    <Routes>
      {/* public routes */}
      <Route element={<Layout />}>
        <Route index path="*" element={<MainLayout />} />
        <Route path="/login" element={<Login />} />
      </Route>
      {/* protected routes */}
      <Route element={<RequireAuth />}>
        <Route path="/termgame/*"></Route>
      </Route>
    </Routes>
  );
}

export default App;
