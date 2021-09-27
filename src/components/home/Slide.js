import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { products } from '../../constants/data';
import { Box, Button, Divider, makeStyles, Typography } from '@material-ui/core';
import Countdown from 'react-countdown';



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const useStyle = makeStyles({
      components:{
          marginTop: 10,
          background: '#ffffff'
      },
      deal:{
          padding:'15px 20px',
          display:'flex'
      },
     image:{
         height:150
     },
     dealText : {
         fontSize:22,
         fontWeight: 600,
         lineHeight:'32px',
         marginRight:25
     },
     timer:{
         color:'#7f7f7f',
         marginLeft:10,
         display:'flex',
         alignItems:'center'
     },
     button:{
         marginLeft:'auto',
         background:'#2874f0',
         borderRadius:2,
         fontSize: 13
     },
     text : {
         fontSize:14,
         marginTop:5
     },
     wrapper:{
         padding: '45px 15px'
     }
  })

const Slide = () => {
    const classes = useStyle(); 
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const render = ({hours, minutes, seconds}) => {
        return <span className={classes.timer}>{hours} : {minutes} : {seconds} Left</span>;
    }
    return (
        <Box className={classes.component} >
            <Box className={classes.deal}>
            <Typography className={classes.dealText}>Deal of the Day</Typography>
        <img src = {timerURL} alt={{}} style={{width:24}} render={render} />
        <Countdown date={Date.now() + 5.04e+7} />
        <Button varient="contained" color="primary" className={classes.button}>View All</Button>
            </Box>
            <Divider />
        <Carousel 
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        >
            {
                products.map(product => (
                    <Box textAlign="center" className={classes.wrapper}>
                    <img src= {product.url} alt={{}} className={classes.image} />
                        <Typography className={classes.text} style={{fontWeight: 600, color:'#212121'}}>{product.title.shortTitle}</Typography>
                        <Typography className={classes.text} style={{color:'green'}}>{product.discount}</Typography>
                        <Typography className={classes.text} style={{color:'#212121', opacity:'.6'}}>{product.tagline}</Typography>
                    </Box>
                ))
            }

        </Carousel>
        </Box>
    )
}

export default Slide
