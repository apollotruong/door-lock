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
let doorStatus = []
doorStatus.push('Locked')
doorStatus.push('Unlocked')

class ButtonPage extends React.Component {
  state = {
    rSelected: null,
    cSelected: [],
  };

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
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
                  Door Status: {doorStatus[0]}
                </h3>
                <Button color="success">Unlock Door</Button>
                <Button color="danger">Lock Door</Button>
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card className="mb-3">
              <CardHeader>Side Entrance</CardHeader>
              <CardBody>
                <h3>
                  Door Status: {doorStatus[1]}
                </h3>
                <Button outline color="success">Unlock Door</Button>
                <Button outline color="danger">Lock Door</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default ButtonPage;
