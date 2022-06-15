import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import './css/Leaderboard.css'
import { People } from '@mui/icons-material';
import AuthNav from './AuthNav';
const Leaderboard = () => {
    return ( 
        <div className="leaderboard">
            <AuthNav />
            <div className="leaderboard__image">
                <Avatar alt="Kamal Adebayo" sx={{width: 100, height: 100}}>
                    <People fontSize='large'/>
                </Avatar>
            </div>
            <div className="leaderboard__list">
            <List>
                <Divider />
                <ListItem secondaryAction={'8000 XP'}>
                  <ListItemAvatar>
                      <Avatar />
                  </ListItemAvatar>
                  <ListItemText primary="Kamal Adebayo"/>
                </ListItem>
                <Divider />
                <ListItem secondaryAction={'8000 XP'}>
                  <ListItemAvatar>
                      <Avatar />
                  </ListItemAvatar>
                  <ListItemText primary="Kamal Adebayo"/>
                </ListItem>
                <Divider />
                <ListItem secondaryAction={'8000 XP'}>
                  <ListItemAvatar>
                      <Avatar />
                  </ListItemAvatar>
                  <ListItemText primary="Kamal Adebayo"/>
                </ListItem>
                <Divider />
                <ListItem secondaryAction={'8000 XP'}>
                  <ListItemAvatar>
                      <Avatar />
                  </ListItemAvatar>
                  <ListItemText primary="Kamal Adebayo"/>
                </ListItem>
            </List>
            </div>
        </div>
     );
}
 
export default Leaderboard;
