import React from 'react'
import {Icon, Container, Grid, Segment} from 'semantic-ui-react'
import Map from '../Components/Map'
import { ExternalLink } from 'react-external-link'

class MapContainer extends React.Component {

    render(){
      return(
       
      <div>
        <Container >
        <Segment vertical>
        <Grid container stackable textAlign='center' columns={3}>
        <Grid.Column>
            <h3>LOCATION</h3>
            <h4>362 17th St</h4>
            <h4>Oakland, CA  94612</h4>
            </Grid.Column>
            <Grid.Column>
            <h3>HOURS</h3>
            <h4> Lunch: Mon to Fri – 11:00am – 2:30pm</h4>
            <h4>Dinner: Mon to Sat – 5:00pm – 10:00pm</h4>
            </Grid.Column>
            <Grid.Column>
            <h3>CONTACT</h3>
            <h4>(510) 502-7743</h4>
            <ExternalLink href='mailto: japanesefriedchicken@aburayaoakland.com' target = 'blank' >
            <Icon name='mail' size='large' color='black'/>
            </ExternalLink>
            </Grid.Column>
            </Grid>
          </Segment>
         </Container>
          <Map />
      </div>
            
       
      )
    }
  }
  
  export default MapContainer