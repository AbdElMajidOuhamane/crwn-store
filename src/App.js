import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.components";
import Navigation from "./routes/navigation/navigation.components";
import Authentication from "./routes/authe/athen.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";







const App=()=> {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
     <Route index element={<Home />} />
      <Route path="shop/*" element={<Shop />}/>
      <Route path="auth" element={<Authentication />} />
      <Route path="checkout" element={<CheckOut />}/>
     </Route>
    </Routes>
  );
}

export default App;
