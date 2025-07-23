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
    <Box sx={{ width: 250 }} role="presentation">
      <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => console.log("hi")}>
              <ListItemIcon>
                Projects
              </ListItemIcon>
              <ListItemText/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => console.log("hello")}>
              <ListItemIcon>
                Experience
              </ListItemIcon>
              <ListItemText/>
            </ListItemButton>
          </ListItem>
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
    <div>
    <Navbar openDrawer={openDrawer}/>
    <Drawer open={drawer} onClose={closeDrawer}
    >{DrawerList}</Drawer>
    <Header/>
    <Layout>
    <hr></hr>
    <ExperienceSection></ExperienceSection>
    <ProjectsSection></ProjectsSection>
    </Layout>
    </div>

    
  
  )
}

export default App
