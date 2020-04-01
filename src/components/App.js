import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Dashboard from "./Dashboard";

const Root = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Footer = styled.section`
  padding: 3px 2px;
  margin-top: auto;
`;

const App = () => {
  return (
    <Root>
      <Router>
        <Switch>
          <AppBar position="relative">
            <Toolbar>
              <IconButton aria-label="more info">
                <Link to="/">
                  <HomeIcon />
                </Link>
              </IconButton>
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                style={{ marginLeft: 5 }}
              >
                NFL Rushing Table Demo
              </Typography>
            </Toolbar>
          </AppBar>

          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Router>
      <Footer>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          @amytangcodes
        </Typography>
      </Footer>
    </Root>
  );
};

export default App;
