import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DiscountIcon from '@mui/icons-material/Discount';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

interface IProps {
    data: {
        categoryId: number,
        title: string,
        setSort: (sortBy: string, sortLabel: string) => void
    }
}

const CategoryItem: React.FC<IProps> = ({ data }) => {

    const changeLabel = () => {
        data.setSort("category", data.title)
    }

    return (
        <>
            <ListItemButton sx={{ pl: 4 }} onClick={changeLabel} key={data.categoryId}>
                <ListItemIcon>
                    <LocalOfferOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={data.title} />
            </ListItemButton>
        </>
    );
}

export default CategoryItem