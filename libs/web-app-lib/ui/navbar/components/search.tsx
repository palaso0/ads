import SearchIcon from '@mui/icons-material/Search';
import { SearchStyle, SearchIconWrapper, StyledInputBase} from './searchComponents';


export default function Search() {
    return (
        <SearchStyle>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
            />
        </SearchStyle>
    );
}
