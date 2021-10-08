import { makeStyles , InputBase, List, ListItem } from "@material-ui/core";
import {Search} from '@material-ui/icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const useStyle = makeStyles((theme) => ({
    search: {
        display: 'flex' ,
        borderRadius: 1.5,
        backgroundColor: '#fff',
        marginLeft: 10,
        width: '38%',
        paddingLeft: 10,
      },
      searchIcon: {
        padding: 5,
        height: '100%',      
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:'blue',
      },
      inputRoot: {
        fontSize: 'unset',
        width: '100%',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
      },
      list: {
        position: 'absolute',
        color: '#000',
        background: '#FFFFFF',
        margin: '35px 0 0 0',
        
      }
}))

const SearchBar = () => {
    const classes = useStyle();
    const [ text, setText ] = useState();
    const [ open, setOpen ] = useState(true)

    const getText = (text) => {
        setText(text);
        setOpen(false)
    }

    const {products} = useSelector(state => state.getProducts);

    return (
        <>
           <div className={classes.search}>
            <InputBase
              placeholder="Search for products,brands and more"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => getText(e.target.value)}
            />
              <div className={classes.searchIcon}>
                <Search/>
              </div>
              {
              text && 
              <List className={classes.list} hidden={open}>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setOpen(true)}  
                      >
                        {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }  
              </List>
            }
          </div>
           
        </>
    )
}

export default SearchBar
