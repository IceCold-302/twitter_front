import { AppBar as MUIAppBar, Avatar, styled, ButtonGroup, Button, IconButton } from '@mui/material'
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
function App() {
  const navigate = useNavigate()
  return (
    <AppBar position='static'>
        <Avatar src={Logo}></Avatar>
        <ButtonGroup>
          <Button variant='contained' color='primary' onClick={() => navigate('/tweets')}>
            Tweets
          </Button>
          <IconButton onClick={() => navigate('/tweets/new')}>
            <AddIcon color='error' />
          </IconButton>
        </ButtonGroup>
    </AppBar>
  )
}


const AppBar = styled(MUIAppBar)({
  backgroundColor: '#3f51b5',
  flexDirection: 'row',
  color: 'white',
  padding: '0 24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 'max-content',
  img: {
    width: "60px",
    height: "60px",
    margin: "12px"
  }
})
export default App
