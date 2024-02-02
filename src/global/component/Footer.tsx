import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const styles = {
    paperContainer: {
      backgroundColor: '#063970',
    },
    content: {
      color: 'white',
    }
  };
export default function Footer () {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation style={styles.paperContainer} sx={{ width: 1277 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        style={styles.content}
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        style={styles.content}
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        style={styles.content}
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction style={styles.content} label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}