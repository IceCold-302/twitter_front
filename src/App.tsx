import { AppBar as MUIAppBar, Avatar, styled } from '@mui/material'
import Logo from '../assets/logo.png'
function App() {

  return (
    <AppBar position='static'>
        <Avatar src={Logo} ></Avatar>
    </AppBar>
  )
}


const AppBar = styled(MUIAppBar)({
  backgroundColor: '#3f51b5',
  color: 'white',
  padding: '0 24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  height: 'max-content',
  img: {
    width: "60px",
    height: "60px",
    margin: "12px"
  }
})
export default App
