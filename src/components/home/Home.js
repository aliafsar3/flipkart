import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import Banner from './Banner'
import NavBar from './NavBar'
import Slide from './Slide'

const useStyle = makeStyles ({
    component : {
        padding : 10,
        background : '#F2F2'
    },
    rightWrapper:{
        background:'#ffffff',
        padding:5,
        margin:'12px 0 0 10px',
        width:'17%'
    }
})

const Home = () => {
    const classes = useStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <div>
        <NavBar />
        <Box className={classes.component}>
        <Banner />
        <Box style={{display:'flex'}}>
            <Box style={{width:'83%'}}>
            <Slide />
            </Box>
            <Box className={classes.rightWrapper}>
                <img src={adURL} alt={{}} style={{width:230}} />
            </Box>
        </Box>
        </Box>
        </div>
    )
}

export default Home
