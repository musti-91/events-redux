import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { List, Container } from "semantic-ui-react";
export default class Events extends Component {
  render = () => {
    return (
      <Container>
        <List divided relaxed>
          <TransitionGroup>
            {this.props.events.map((event, index) => (
              <CSSTransition
                key={index}
                classNames={animation}
                appear={true}
                timeout={1000}
              >
                <List.Item key={index}>
                  <List.Icon
                    name="github"
                    size="large"
                    verticalAlign="middle"
                  />
                  <List.Content>
                    <List.Header>{event.title}</List.Header>
                    <List.Description>{event.description}</List.Description>
                  </List.Content>
                </List.Item>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </List>
      </Container>
    );
  };
}
const animation = {
  enter: "animated",
  enterActive: "fadeInDownBig",
  appear: "animated",
  appearActive: "rotateInDownLeft",
  exit: "animated",
  exitActive: "bounceOutUp"
};
