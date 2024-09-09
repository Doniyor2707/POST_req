
import { Suspense } from "react";
import Router from "./Router";

const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router />
    </Suspense>
  );
};

export default App;
