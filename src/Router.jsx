// react-router-dom
import { Route, Routes } from "react-router-dom";
// layout
import MainLayout from "./layout/mainLayout/MainLayout";
// path
import { main_routes } from "./path/path";
// pages
import { Comments, Posts, Users } from "./pages";

const Router = () => {
  return (
    <Routes>
        {/* layout */}
      <Route element={<MainLayout />}>
        <Route index path={main_routes.posts} element={<Posts />} />
        <Route  path={main_routes.comments} element={<Comments/>} />
        <Route  path={main_routes.users} element={<Users />} />
      </Route>
    </Routes>
  );
};

export default Router;
