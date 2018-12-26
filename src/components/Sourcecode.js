import React from 'react';
import {Modal, Button, Dropdown, Label} from 'semantic-ui-react';
import * as Tools from '../utils/Tools';

export default class Sourcecode extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal defaultOpen={this.props.sourcecodeVisible} centered={false} closeIcon className='sourcecode'>
        <Modal.Header>
          <Dropdown floating labeled button blurring text='Matched results' className='mini icon'>
            <Dropdown.Menu>
              <Dropdown.Menu scrolling>
                <Dropdown.Item>
                  <Button size='mini'>Codes</Button><Button size='mini'>Repo</Button>
                  <Label size='mini' circular color={Tools.randomLabelColor()}>HTML</Label>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Button size='mini'>Codes</Button><Button size='mini'>Repo</Button>
                  <Label size='mini' circular color={Tools.randomLabelColor()}>HTML</Label>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Button size='mini'>Codes</Button><Button size='mini'>Repo</Button>
                  <Label size='mini' circular color={Tools.randomLabelColor()}>HTML</Label>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Button size='mini'>Codes</Button><Button size='mini'>Repo</Button>
                  <Label size='mini' circular color={Tools.randomLabelColor()}>HTML</Label>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Button size='mini'>Codes</Button><Button size='mini'>Repo</Button>
                  <Label size='mini' circular color={Tools.randomLabelColor()}>HTML</Label>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Button size='mini'>Codes</Button><Button size='mini'>Repo</Button>
                  <Label size='mini' circular color={Tools.randomLabelColor()}>HTML</Label>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Button size='mini'>Codes</Button><Button size='mini'>Repo</Button>
                  <Label size='mini' circular color={Tools.randomLabelColor()}>HTML</Label>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Button size='mini'>Codes</Button><Button size='mini'>Repo</Button>
                  <Label size='mini' circular color={Tools.randomLabelColor()}>HTML</Label>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Button size='mini'>Codes</Button><Button size='mini'>Repo</Button>
                  <Label size='mini' circular color={Tools.randomLabelColor()}>HTML</Label>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Button size='mini'>Codes</Button><Button size='mini'>Repo</Button>
                  <Label size='mini' circular color={Tools.randomLabelColor()}>HTML</Label>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Menu>
          </Dropdown>
          <Button size='mini'>Repo</Button>
        </Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}
