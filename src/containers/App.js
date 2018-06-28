import React, { Component } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { Container, Menu, Input } from "semantic-ui-react";
import { addEvent, deleteEvent } from "../actions/eventActions";
import { Header } from "../components/Header";
import { connect } from "react-redux";
import Events from "../components/Events";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Container>
            <Menu className="ui secondary pointing menu">
              <Menu.Item
                name="home"
                as={NavLink}
                content="Home"
                to="/"
                activeClassName="is-active"
                exact={true}
              />
              <Menu.Item
                name="home"
                as={NavLink}
                content="Add Event"
                to="/add-event"
              />
              <Menu.Item
                name="home"
                as={NavLink}
                content="User Area"
                to="/user"
              />
              <Menu.Menu position="right">
                <Menu.Item>
                  <Input icon="search" placeholder="Search..." />
                </Menu.Item>
                <Menu.Item name="logout" to="/logout" as={NavLink} />
              </Menu.Menu>
            </Menu>
            <Switch>
              <Route path="/" exact>
                <Events
                  events={this.props.events}
                  deleteEvent={id => this.props.deleteEvent(id)}
                  addEvent={event => this.props.addEvent(event)}
                />
              </Route>
              <Route path="/user" exact />
              <Route path="/add-Event" exact />
              <Route path="/logout" exact />
            </Switch>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  };
};
const mapDispatchToProps = dispatchEvent => {
  return {
    addEvent: event => dispatchEvent(addEvent(event)),
    deleteEvent: event_id => dispatchEvent(deleteEvent(event_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
