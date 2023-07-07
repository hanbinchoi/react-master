import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* react-route를 사용한 어플리케이션을 gh-pages로 배포할 경우 process.env.PUBLIC_URL을 앞에 붙여줘야 한다. */}
        <Route path={`${process.env.PUBLIC_URL}/:coinId`}>
          <Coin />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/`}>
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
