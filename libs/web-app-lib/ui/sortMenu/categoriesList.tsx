import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DiscountIcon from '@mui/icons-material/Discount';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CategoryItem from './categoryItem'
import { setSortBy } from 'libs/web-app-lib/data-access/slices/appSlice';

interface IProps {
    data: {
        open: boolean,
        setOpen: (arg: boolean) => void,
        handleClick: () => void,
        setSort: (sortBy: string, sortLabel: string) => void,
        categories: any
    }
}

const CategoriesList: React.FC<IProps> = ({ data }) => {
    const handleClick = () => {
        data.setOpen(!data.open);
    };


    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <DiscountIcon />
                </ListItemIcon>
                <ListItemText primary="Categories" />
                {data.open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={data.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        data.categories.map((cat: any) => {
                            return (
                                <CategoryItem data={{
                                    setSort: data.setSort,
                                    title: cat.title,
                                    categoryId: cat.categoryId
                                }} />
                            )
                        })
                    }

                </List>
            </Collapse>
        </>
    );
}

export default CategoriesList