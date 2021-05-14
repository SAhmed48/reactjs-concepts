import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../../components/LandingPage/landingPage";
import AboutUs from "../About/aboutUs";
import ContactUs from "../Contact-Us/contactUs";
import Register from "../Register/register";
import SiginIn from "../Sign-In/signin";
import Concepts from "../Concepts/concepts";
import simpleForm from "../../forms/simple-form/simpleForm";

import asyncComponent from "../../hoc/asyncComponent";

const AsyncLoginPage = asyncComponent(() => {
  return import("../Sign-In/signin");
});

function Home() {
  return (
    <div>
      <Switch>
        <Route path="/login" exact component={AsyncLoginPage} />
        <Route path="/register" exact component={Register} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/concepts" exact component={Concepts} />
        <Route path="/simple-form" exact component={simpleForm} />
        <Route path="/" exact component={LandingPage} />
        <Route render={() => <h1> 404 Page not found </h1>} />
      </Switch>
    </div>
  );
}

export default Home;
