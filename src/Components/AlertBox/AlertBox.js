import React from 'react'; 
import { Modal, Header, Button, Grid, List, Segment } from 'semantic-ui-react';
import classes from './AlertBox.module.css'

const AlertBox = (props) => {
  return (
    <Modal
      onClose={() => props.toggleModal(false)}
      onOpen={() => props.toggleModal(true)}
      open={props.openModal}
    >
      <Modal.Header>
        <Grid textAlign='middle'>
          <Grid.Column width={16}>
            CHECKOUT ITEMS ?
          </Grid.Column>
        </Grid>
      </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Your <b>BURGER ORDER</b> -</Header>
          <Segment raised textAlign='center'  className={classes.ItemSegment}>
            <List divided verticalAlign='middle'>
              {props.checkoutItems.map((ingredient) => {
                return (
                  <List.Item>
                    <Grid verticalAlign='middle'>
                      <Grid.Column width={3}>
                        <img src={`images/${ingredient.image}`} alt={ingredient.type} className={classes.ItemImageRef}/>
                      </Grid.Column>
                      <Grid.Column width={6}>
                        <List.Content>
                          <List.Header>
                            <span className={classes.ItemLabelInfo}>{ingredient.label}</span>
                          </List.Header>
                        </List.Content>
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <span><strong>{ingredient.qty}</strong>  Qty(s)</span>
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <span><strong>$ {ingredient.price}</strong></span>
                      </Grid.Column>
                    </Grid>
                  </List.Item>
                )
              })}
            </List>
          </Segment>
          <Segment raised textAlign='center'>
            <h3>ORDER TOTAL - $ {props.totalPrice.toFixed(2)}</h3>
          </Segment>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => props.toggleModal(false)}>
          Nope
        </Button>
        <Button
          content="Yep, Checkout"
          labelPosition='right'
          icon='checkmark'
          onClick={() => props.toggleModal(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default AlertBox