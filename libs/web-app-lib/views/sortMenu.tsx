import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { useState, useEffect } from 'react';
import CategoriesList from '../ui/sortMenu/categoriesList';
import AllList from '../ui/sortMenu/allList';
import { setSortBy, selectAppData, setSortLabel } from '../data-access/slices/appSlice';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGetCategories } from '../services';

export default function SortMenu() {
    const [openCategories, setOpenCategories] = useState(true);
    const [openPublishers, setOpenPublishers] = useState(true);
    const [categories, setCategories] = useState([])

    const dispatch: any = useDispatch()
    const appData = useSelector(selectAppData)
    const setSort = (sortBy: string, sortLabel: string) => {
        dispatch(setSortBy(sortBy))
        dispatch(setSortLabel(sortLabel))
    }
    const handleClickCategories = () => setOpenCategories(!open);

    const handleClickPublishers = () => setOpenPublishers(!open);


    const getCategories = async () => {
        const categories = await fetchGetCategories()
        const categoriesJson = await categories.json()
        setCategories(categoriesJson.data.categories)
    }

    useEffect(() => {
        getCategories()
    }, [])
    return (
        <List
            sx={{ mt: " 10px", height:"100%" }}
            component="nav"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Sort By
                </ListSubheader>
            }
        >
            <AllList data={{
                setSort: setSort
            }}
            />


            <CategoriesList data={{
                open: openCategories,
                setOpen: setOpenCategories,
                handleClick: handleClickCategories,
                setSort: setSort,
                categories: categories
            }} />

        </List>
    );
}
