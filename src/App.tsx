import { AppBar as MUIAppBar, Avatar, styled, ButtonGroup, Button, IconButton } from '@mui/material'
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import AddIcon from "@mui/icons-material/Add";


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

function App() {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Avatar onClick={() => navigate("/")} src={Logo}></Avatar>
      <ButtonGroup>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/tweets")}
        >
          Tweets
        </Button>
        <IconButton onClick={() => navigate("/tweets/new")}>
          <AddIcon color="error" />
        </IconButton>
      </ButtonGroup>
    </AppBar>
  );
}
export default App;
