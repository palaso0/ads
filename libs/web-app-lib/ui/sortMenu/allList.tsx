import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';

interface IProps {
    data: {
        setSort:(sortBy:string,sortLabel:string) => void,
    }
}

const AllList: React.FC<IProps> = ({ data }) => {
    const changeLabel = () => {
        data.setSort("","")
    }
    return (
        <ListItemButton onClick={changeLabel}>
            <ListItemIcon>
                <AutoAwesomeMotionIcon />
            </ListItemIcon>
            <ListItemText primary="All" />
        </ListItemButton>
    );
}

export default AllList