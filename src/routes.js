import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Favoritos from "./pages/Favoritos";
import Error from "./pages/Error";

import Header from "./components/Header";

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/filme/:id" component={Filme} />
                    <Route exact path="/favoritos" component={Favoritos} />

                    <Route exact path="*" component={Error} />
                </Switch>
        </BrowserRouter>
    );
}

export default Routes;