import './App.css'
import Header from './components/Header'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import { useState } from 'react'

import Layout from './components/Layout'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Navbar from "./components/Navbar"

function App() {
  const [drawer, setDrawer] = useState(false)

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={closeDrawer}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? "Inbox": "mail"}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? "Inbox" : "mail"}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  function openDrawer(){
    setDrawer(true)
  }

  function closeDrawer(){
    setDrawer(false)
  }

  

  return (
    <>
    <Navbar openDrawer={openDrawer}/>
    <Drawer open={drawer} onClose={closeDrawer}
    >{DrawerList}</Drawer>
    <Header/>
    <Layout>
    <hr></hr>
    <ExperienceSection></ExperienceSection>
    <ProjectsSection></ProjectsSection>
    </Layout>
    </>

    
  
  )
}

export default App
