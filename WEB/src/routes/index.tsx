import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import PrivateRouter from '../utils/privateRoute';

const Login = lazy(() => import("./login"));

const RandomUser = lazy(() => import("./randomuser"));
const HttpCat = lazy(() => import("./httpcat"));
const RandomDog = lazy(() => import("./randomdog"));


const Client = lazy(() => import("./client"));

const Heading = lazy(() => import("../components/organisms/heading"));

const AppRoutes = () => {
  return <Suspense fallback={<></>}>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/randomuser" element={<PrivateRouter path="/" outlet={<><Heading /> <RandomUser /></>} />} />
      <Route path="/httpcat" element={<PrivateRouter path="/" outlet={<><Heading /> <HttpCat /></>} />} />
      <Route path="/randomdog" element={<PrivateRouter path="/" outlet={<><Heading /> <RandomDog /></>} />} />
      <Route path="/client" element={<PrivateRouter path="/" outlet={<><Heading /> <Client /></>} />} />
    </Routes>
  </Suspense>
};

export default AppRoutes;
