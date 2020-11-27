import React from 'react'
import {Segment, Icon, Button, Image, Grid} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import '../App.css'

const Footer = () => {
    return (
        <div>
        <Segment vertical textAlign = 'center'>
            <Grid container stackable textAlign='center' columns={3}>
            <Grid.Column>   
               <Button basic>
               <Icon name='instagram'/>
               </Button>
            </Grid.Column>
            <Grid.Column>      
                <Button basic>
                <Icon name='twitter'/>
                </Button>
            </Grid.Column>
            <Grid.Column>
              <Button basic>
              <Icon name='mail'/>
              </Button>
            </Grid.Column>
          </Grid>
        </Segment>
        </div>
  
    

    )
}

export default Footer
