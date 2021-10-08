import { BrowserRouter, Switch, Route } from "react-router-dom";

// COMPONENTS
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import TemplateProvider from "./templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";
import ProductDetail from './components/product_details/ProductDetail'

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/product/:id" component={ProductDetail} />
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
