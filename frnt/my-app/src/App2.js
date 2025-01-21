import React from "react";
import { BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import JwtForm from "./JwtForm";
import Page from "./Page";
const App2 = () => {
return(
<>
<Router>
<Routes>
<Route path="/" element={<JwtForm/>} />
<Route path="/page" element={<Page/>} />
</Routes>
</Router>
</>
);
};
export default App2;