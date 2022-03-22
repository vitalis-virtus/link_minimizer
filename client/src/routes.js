import React from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Redirect, Route } from "react-router-dom";

import { AuthPage } from "./pages/AuthPage";
import { CreatePage } from "./pages/CreatePage";
import { DetailsPage } from "./pages/DetailsPage";
import { LinkPage } from "./pages/LinksPage";

export default function useRoutes (isAuthenticated) {
  if (isAuthenticated) {
    return (<>
      <Switch>
        <Route path="/links" exact>
          <LinkPage />
        </Route>

        <Route path="/create" exact>
          <CreatePage />
        </Route>

        <Route path="/details/:id" exact>
          <DetailsPage />
        </Route>
        <Redirect to="create" />
      </Switch>
      </>
    );
  }
  return <Switch>
      <Route path="/" exact>
          <AuthPage/>
      </Route>
      <Redirect to="/"/>
  </Switch>;
};
