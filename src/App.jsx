import '@fontsource/roboto/400.css';
import { Typography, BottomNavigation, BottomNavigationAction } from '@mui/material';
import Chart from './components/Chart';
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {

  return (
    <div>
      <Typography variant="h3" component="h1">Sortowanie</Typography>
      <Chart />
      <BottomNavigation>
        <a href="https://github.com/sws6546/ReactSort/tree/master/src"><BottomNavigationAction label="Kod" icon={<GitHubIcon />}/></a>
      </BottomNavigation>
    </div>
  )
}

export default App
