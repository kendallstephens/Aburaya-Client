import React from 'react'
import {Segment, Icon, Button, Grid} from 'semantic-ui-react'
import { ExternalLink } from 'react-external-link'
import {Link} from 'react-router-dom'
import '../App.css'

const Footer = () => {
    return (
        <div>
        <Segment vertical textAlign = 'center'>
            <Grid container stackable textAlign='center' columns={3}>
            <Grid.Column>   
               <ExternalLink href='https://www.instagram.com/aburayaoakland/?hl=en' target = 'blank' >
               <Icon name='instagram' size='large'/>
                 </ExternalLink>  
            </Grid.Column>
            <Grid.Column>  
            <ExternalLink href='https://twitter.com/aburayaoakland?lang=en' target = 'blank' >    
                <Icon name='twitter' size='large'/>
                </ExternalLink>
            </Grid.Column>
            <Grid.Column>
            <ExternalLink href='mailto: japanesefriedchicken@aburayaoakland.com' target = 'blank' >
              <Icon name='mail' size='large'/>
              </ExternalLink>
              
            </Grid.Column>
          </Grid>
        </Segment>
        </div>
  
    

    )
}

export default Footer
