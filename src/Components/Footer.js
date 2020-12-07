import React from 'react'
import {Segment, Icon, Grid, Container} from 'semantic-ui-react'
import { ExternalLink } from 'react-external-link'
import '../App.css'

const Footer = () => {
    return (
        <div>
          <Container>
        <Segment vertical textAlign = 'center'>
            <Grid container stackable textAlign='center' columns={3}>
            <Grid.Column>   
               <ExternalLink href='https://www.instagram.com/aburayaoakland/?hl=en' target = 'blank' >
               <Icon color='black' name='instagram' size='large'/>
                 </ExternalLink>  
            </Grid.Column>
            <Grid.Column>  
            <ExternalLink href='https://twitter.com/aburayaoakland?lang=en' target = 'blank' >    
                <Icon color='black' name='twitter' size='large'/>
                </ExternalLink>
            </Grid.Column>
            <Grid.Column>
            <ExternalLink href='mailto: japanesefriedchicken@aburayaoakland.com' target = 'blank' >
              <Icon color='black' name='mail' size='large'/>
              </ExternalLink>
              
            </Grid.Column>
          </Grid>
        </Segment>
        </Container>
        </div>
  
    

    )
}

export default Footer
