import React from 'react';

import {
  Row,
  Col,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardSubtitle,
  CardBody,
  CardText,
} from 'reactstrap';

import Page from 'components/Page';
import Lock from 'utils/lock.js';

let doorStatus = [];
doorStatus.push(new Lock(true));
doorStatus.push(new Lock(false));

class UnlockPage extends React.Component {
  state = {
    rSelected: null,
    cSelected: [],
  };
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

  onClick(index){
      doorStatus[index].toggleLock();
      this.setState(state => ({isToggleOn: !state.isToggleOn}));
  }
  lockDoor(index){
    doorStatus[index].engageLock();
    this.setState(state => ({isToggleOn: !state.isToggleOn}));
  }
  unlockDoor(index){
    doorStatus[index].disengageLock();
    this.setState(state => ({isToggleOn: !state.isToggleOn}));
  }

  render() {
    return (
      <Page
        className="UnlockPage"
        title="Manage Locks"
        breadcrumbs={[{ name: 'unlock', active: true }]}
      >
        <Row>
          <Col md="6" sm="12" xs="12">
            <Card className="mb-3">
              <CardHeader>Front Entrance</CardHeader>
              <CardBody>
                <h3>
                  Door Status: {doorStatus[0].lockStatus}
                </h3>
                <Button color={doorStatus[0].lockStatus ? 'success' : 'danger'} size="lg" onClick={() => {this.onClick(0)}}>
                    {doorStatus[0].lockStatus ? 'Unlock Door' : 'Lock Door'}
                </Button>
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card className="mb-3">
              <CardHeader>Side Entrance</CardHeader>
              <CardBody>
                <h3>
                  Door Status: {doorStatus[1].lockStatus}
                </h3>
                <Button outline color="success" size="lg" onClick={() => this.unlockDoor(1)}>
                    Unlock Door
                </Button>
                <Button outline color="danger" size="lg" onClick={() => this.lockDoor(1)}>
                    Lock Door
                </Button>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default UnlockPage;
