import logo from './logo.svg';
import React from 'react';
import myntra from './images/myntra.png';
import minsider from './images/minsider.jpg';
import ad1 from './images/ad1.webp';
import ad2 from './images/ad2.png';
import genuine from './images/certified.png';
import buy from './images/try-and-buy.png';
import exchange from './images/exchange.png';
import SearchIcon from '@material-ui/icons/Search';
import rupee from './images/india-rupee-currency-symbol-white.svg';
import rupee_gray from './images/india-rupee-currency-symbol-gray.svg';
import PropTypes from 'prop-types';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import zIndex from '@material-ui/core/styles/zIndex';

const styles = theme => ({
  men: {
    '&:hover': {
      borderBottom: "2px solid #ee5f73"
    }
  },
  women: {
    '&:hover': {
      borderBottom: "2px solid #fb56c1"
    }
  },
  kids: {
    '&:hover': {
      borderBottom: "2px solid #f26a10"
    }
  },
  home_living: {
    '&:hover': {
      borderBottom: "2px solid #f2c210"
    }
  },
  beauty: {
    '&:hover': {
      borderBottom: "2px solid #0db7af"
    }
  },
  item: {
    '&:hover': {
      fontSize: "12px",
      fontWeight: "bold"
    }
  },
  overlay: {
    position: "fixed",
    display: "block",
    width: "90%",
    height: "400px",
    top: 70,
    left: 60,
    right: 0,
    bottom: 0,
    backgroundColor: "#eee",
    zIndex: 2,
    cursor: "pointer",
  },
  profile: {
    position: "fixed",
    display: "block",
    width: "90%",
    height: "400px",
    top: 70,
    left: 60,
    right: 0,
    bottom: 0,
    backgroundColor: "#eee",
    zIndex: 4,
    backgroundColor: "#FFFFFF",
    padding: "5px 15px 5px 15px",
    cursor: "pointer",
  },
  header: {
    position: "fixed",
    display: "block",
    width: "100%",
    height: "80px",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 2,
    cursor: "pointer",
  },
  sidesale: {
    position: "fixed",
    display: "block",
    height: "280px",
    top: 250,
    left: "87%",
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    zIndex: 2,
    cursor: "pointer",
  },
  sidebanner: {
    position: "fixed",
    display: "block",
    width: "280px",
    height: "50px",
    top: 250,
    left: "87%",
    right: 0,
    bottom: 0,
    backgroundColor: "yellow",
    zIndex: 2,
    cursor: "pointer",
  }
});

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: "",
      reset: 0,
      sidesale: 0,
    }
  }

  setItem = (item, reset) => {
    this.setState({item: item, reset: reset});
    console.log(this.state)
  }

  resetItem = reset => {
    this.setState({ reset: reset })
    setTimeout(() => {
      if(this.state.reset == 0) {
        this.setState({item: ""});
        console.log(this.state)
      }
    }, 1000);
    
  }

  showItems = item => {
    const {classes} = this.props;
    switch(item) {
      case "men": return(
        <div className={classes.overlay} style={{display: "flex", flexDirection: "row"}} onMouseOver={() => this.setItem("men", 1)} onMouseOut={() => this.resetItem(0)}>
            <div style={{width: "170px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#ffffff"}}>
              <p style={{color: "#ee5f73", fontWeight: "bold"}}>Topwear</p>
                <p className={classes.item}>T-Shirts</p>
                <p className={classes.item}>Casual Shirts</p>
                <p className={classes.item}>Formal Shirts</p>
                <p className={classes.item}>Sweatshirts</p>
                <p className={classes.item}>Sweaters</p>
                <p className={classes.item}>Jackets</p>
                <p className={classes.item}>Blazers & Coats</p>
                <p className={classes.item}>Suits</p>
                <p className={classes.item}>Rain Jackets</p>
              <hr />
              <p style={{color: "#ee5f73", fontWeight: "bold"}}>Indian & Festive Wear</p>
              <p className={classes.item}>Kurtas & Kurta Sets</p>
              <p className={classes.item}>Sherwanis</p>
              <p className={classes.item}>Nehru Jackets</p>
              <p className={classes.item}>Dhotis</p>
            </div>
            <div style={{width: "160px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#FDFBFB"}}>
              <p style={{color: "#ee5f73", fontWeight: "bold"}}>Bottom Wear</p>
                <p className={classes.item}>Jeans</p>
                <p className={classes.item}>Casual Trousers</p>
                <p className={classes.item}>Formal Trousers</p>
                <p className={classes.item}>Shorts</p>
                <p className={classes.item}>Track Pants & Joggers</p>
              <hr />
              <p style={{color: "#ee5f73", fontWeight: "bold"}}>Innerwear & Sleepwear</p>
              <p className={classes.item}>Briefs & Trunks</p>
              <p className={classes.item}>Boxers</p>
              <p className={classes.item}>Vests</p>
              <p className={classes.item}>Sleepwear & Loungewear</p>
              <p className={classes.item}>Thermals</p>
              <hr />
              <p style={{color: "#ee5f73", fontWeight: "bold"}}>Plus Size</p>
            </div>
            <div style={{width: "170px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#FFFFFF"}}>
              <p style={{color: "#ee5f73", fontWeight: "bold"}}>Footwear</p>
                <p className={classes.item}>Casual Shoes</p>
                <p className={classes.item}>Sports Shoes</p>
                <p className={classes.item}>Formal Shoes</p>
                <p className={classes.item}>Sneakers</p>
                <p className={classes.item}>Sandals & Floaters</p>
                <p className={classes.item}>Flip Flops</p>
                <p className={classes.item}>Socks</p>
              <hr />
              <p style={{color: "#ee5f73", fontWeight: "bold"}}>Personal Care & Grooming</p>
              <p style={{color: "#ee5f73", fontWeight: "bold"}}>Sunglasses & Frames</p>
              <p style={{color: "#ee5f73", fontWeight: "bold"}}>Watches</p>
            </div>
            <div style={{width: "160px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#FDFBFB"}}>
              <p style={{color: "#ee5f73", fontWeight: "bold"}}>Sports & Active Wear</p>
                <p className={classes.item}>Sports Shoes</p>
                <p className={classes.item}>Sports Scandals</p>
                <p className={classes.item}>Active T-Shirts</p>
                <p className={classes.item}>Track Pants & Shorts</p>
                <p className={classes.item}>Tracksuits</p>
                <p className={classes.item}>Jackets & Sweatshirts</p>
                <p className={classes.item}>Sports Accessories</p>
                <p className={classes.item}>Swimwear</p>
              <hr />
              <p style={{color: "#ee5f73", fontWeight: "bold"}}>Gadgets</p>
              <p className={classes.item}>Smart Wearables</p>
              <p className={classes.item}>Fitness Gadgets</p>
              <p className={classes.item}>Headphones</p>
              <p className={classes.item}>Speakers</p>
            </div>
            <div style={{width: "190px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#FFFFFF"}}>
              <p style={{color: "#ee5f73", fontWeight: "bold"}}>Fashion Accessories</p>
                <p className={classes.item}>Wallets</p>
                <p className={classes.item}>Belts</p>
                <p className={classes.item}>Perfumes & Body Mists</p>
                <p className={classes.item}>Trimmers</p>
                <p className={classes.item}>Deodrants</p>
                <p className={classes.item}>Ties, Cufflinks & Pocket Squares</p>
                <p className={classes.item}>Accessory Gift Sets</p>
                <p className={classes.item}>Caps & Hats</p>
                <p className={classes.item}>Mufflers, Scarves & Gloves</p>
                <p className={classes.item}>Phone Cases</p>
                <p className={classes.item}>Rings & Wristwear</p>
                <p className={classes.item}>Helmets</p>
              <hr />
              <p style={{color: "#ee5f73", fontWeight: "bold"}}>Bags & Backpacks</p>
              <p style={{color: "#ee5f73", fontWeight: "bold"}}>Luggages & Trolleys</p>
            </div>
        </div>
      )
      case "women": return(
        <div className={classes.overlay} style={{display: "flex", flexDirection: "row"}} onMouseOver={() => this.setItem("women", 1)} onMouseOut={() => this.resetItem(0)}>
            <div style={{width: "170px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#ffffff"}}>
              <p style={{color: "#fb56c1", fontWeight: "bold"}}>Indian & Fusion Wear</p>
                <p className={classes.item}>Kurtas & Suits</p>
                <p className={classes.item}>Kurtis, Tunics & Tops</p>
                <p className={classes.item}>Formal Shirts</p>
                <p className={classes.item}>Sweatshirts</p>
                <p className={classes.item}>Sweaters</p>
                <p className={classes.item}>Jackets</p>
                <p className={classes.item}>Blazers & Coats</p>
                <p className={classes.item}>Suits</p>
                <p className={classes.item}>Rain Jackets</p>
              <hr />
              <p style={{color: "#fb56c1", fontWeight: "bold"}}>Indian & Festive Wear</p>
              <p className={classes.item}>Kurtas & Kurta Sets</p>
              <p className={classes.item}>Sherwanis</p>
              <p className={classes.item}>Nehru Jackets</p>
              <p className={classes.item}>Dhotis</p>
            </div>
            <div style={{width: "160px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#FDFBFB"}}>
              <p style={{color: "#fb56c1", fontWeight: "bold"}}>Bottom Wear</p>
                <p className={classes.item}>Jeans</p>
                <p className={classes.item}>Casual Trousers</p>
                <p className={classes.item}>Formal Trousers</p>
                <p className={classes.item}>Shorts</p>
                <p className={classes.item}>Track Pants & Joggers</p>
              <hr />
              <p style={{color: "#fb56c1", fontWeight: "bold"}}>Innerwear & Sleepwear</p>
              <p className={classes.item}>Briefs & Trunks</p>
              <p className={classes.item}>Boxers</p>
              <p className={classes.item}>Vests</p>
              <p className={classes.item}>Sleepwear & Loungewear</p>
              <p className={classes.item}>Thermals</p>
              <hr />
              <p style={{color: "#fb56c1", fontWeight: "bold"}}>Plus Size</p>
            </div>
            <div style={{width: "170px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#FFFFFF"}}>
              <p style={{color: "#fb56c1", fontWeight: "bold"}}>Footwear</p>
                <p className={classes.item}>Casual Shoes</p>
                <p className={classes.item}>Sports Shoes</p>
                <p className={classes.item}>Formal Shoes</p>
                <p className={classes.item}>Sneakers</p>
                <p className={classes.item}>Sandals & Floaters</p>
                <p className={classes.item}>Flip Flops</p>
                <p className={classes.item}>Socks</p>
              <hr />
              <p style={{color: "#fb56c1", fontWeight: "bold"}}>Personal Care & Grooming</p>
              <p style={{color: "#fb56c1", fontWeight: "bold"}}>Sunglasses & Frames</p>
              <p style={{color: "#fb56c1", fontWeight: "bold"}}>Watches</p>
            </div>
            <div style={{width: "160px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#FDFBFB"}}>
              <p style={{color: "#fb56c1", fontWeight: "bold"}}>Sports & Active Wear</p>
                <p className={classes.item}>Sports Shoes</p>
                <p className={classes.item}>Sports Scandals</p>
                <p className={classes.item}>Active T-Shirts</p>
                <p className={classes.item}>Track Pants & Shorts</p>
                <p className={classes.item}>Tracksuits</p>
                <p className={classes.item}>Jackets & Sweatshirts</p>
                <p className={classes.item}>Sports Accessories</p>
                <p className={classes.item}>Swimwear</p>
              <hr />
              <p style={{color: "#fb56c1", fontWeight: "bold"}}>Gadgets</p>
              <p className={classes.item}>Smart Wearables</p>
              <p className={classes.item}>Fitness Gadgets</p>
              <p className={classes.item}>Headphones</p>
              <p className={classes.item}>Speakers</p>
            </div>
            <div style={{width: "190px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#FFFFFF"}}>
              <p style={{color: "#fb56c1", fontWeight: "bold"}}>Fashion Accessories</p>
                <p className={classes.item}>Wallets</p>
                <p className={classes.item}>Belts</p>
                <p className={classes.item}>Perfumes & Body Mists</p>
                <p className={classes.item}>Trimmers</p>
                <p className={classes.item}>Deodrants</p>
                <p className={classes.item}>Ties, Cufflinks & Pocket Squares</p>
                <p className={classes.item}>Accessory Gift Sets</p>
                <p className={classes.item}>Caps & Hats</p>
                <p className={classes.item}>Mufflers, Scarves & Gloves</p>
                <p className={classes.item}>Phone Cases</p>
                <p className={classes.item}>Rings & Wristwear</p>
                <p className={classes.item}>Helmets</p>
              <hr />
              <p style={{color: "#fb56c1", fontWeight: "bold"}}>Bags & Backpacks</p>
              <p style={{color: "#fb56c1", fontWeight: "bold"}}>Luggages & Trolleys</p>
            </div>
        </div>
      )
      case "kids": return(
        <div className={classes.overlay} style={{display: "flex", flexDirection: "row"}} onMouseOver={() => this.setItem("kids", 1)} onMouseOut={() => this.resetItem(0)}>
            <div style={{width: "170px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#ffffff"}}>
              <p style={{color: "#f26a10", fontWeight: "bold"}}>Indian & Fusion Wear</p>
                <p className={classes.item}>Kurtas & Suits</p>
                <p className={classes.item}>Kurtis, Tunics & Tops</p>
                <p className={classes.item}>Formal Shirts</p>
                <p className={classes.item}>Sweatshirts</p>
                <p className={classes.item}>Sweaters</p>
                <p className={classes.item}>Jackets</p>
                <p className={classes.item}>Blazers & Coats</p>
                <p className={classes.item}>Suits</p>
                <p className={classes.item}>Rain Jackets</p>
              <hr />
              <p style={{color: "#f26a10", fontWeight: "bold"}}>Indian & Festive Wear</p>
              <p className={classes.item}>Kurtas & Kurta Sets</p>
              <p className={classes.item}>Sherwanis</p>
              <p className={classes.item}>Nehru Jackets</p>
              <p className={classes.item}>Dhotis</p>
            </div>
            <div style={{width: "160px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#FDFBFB"}}>
              <p style={{color: "#f26a10", fontWeight: "bold"}}>Bottom Wear</p>
                <p className={classes.item}>Jeans</p>
                <p className={classes.item}>Casual Trousers</p>
                <p className={classes.item}>Formal Trousers</p>
                <p className={classes.item}>Shorts</p>
                <p className={classes.item}>Track Pants & Joggers</p>
              <hr />
              <p style={{color: "#f26a10", fontWeight: "bold"}}>Innerwear & Sleepwear</p>
              <p className={classes.item}>Briefs & Trunks</p>
              <p className={classes.item}>Boxers</p>
              <p className={classes.item}>Vests</p>
              <p className={classes.item}>Sleepwear & Loungewear</p>
              <p className={classes.item}>Thermals</p>
              <hr />
              <p style={{color: "#f26a10", fontWeight: "bold"}}>Plus Size</p>
            </div>
            <div style={{width: "170px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#FFFFFF"}}>
              <p style={{color: "#f26a10", fontWeight: "bold"}}>Footwear</p>
                <p className={classes.item}>Casual Shoes</p>
                <p className={classes.item}>Sports Shoes</p>
                <p className={classes.item}>Formal Shoes</p>
                <p className={classes.item}>Sneakers</p>
                <p className={classes.item}>Sandals & Floaters</p>
                <p className={classes.item}>Flip Flops</p>
                <p className={classes.item}>Socks</p>
              <hr />
              <p style={{color: "#f26a10", fontWeight: "bold"}}>Personal Care & Grooming</p>
              <p style={{color: "#f26a10", fontWeight: "bold"}}>Sunglasses & Frames</p>
              <p style={{color: "#f26a10", fontWeight: "bold"}}>Watches</p>
            </div>
            <div style={{width: "160px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#FDFBFB"}}>
              <p style={{color: "#f26a10", fontWeight: "bold"}}>Sports & Active Wear</p>
                <p className={classes.item}>Sports Shoes</p>
                <p className={classes.item}>Sports Scandals</p>
                <p className={classes.item}>Active T-Shirts</p>
                <p className={classes.item}>Track Pants & Shorts</p>
                <p className={classes.item}>Tracksuits</p>
                <p className={classes.item}>Jackets & Sweatshirts</p>
                <p className={classes.item}>Sports Accessories</p>
                <p className={classes.item}>Swimwear</p>
              <hr />
              <p style={{color: "#f26a10", fontWeight: "bold"}}>Gadgets</p>
              <p className={classes.item}>Smart Wearables</p>
              <p className={classes.item}>Fitness Gadgets</p>
              <p className={classes.item}>Headphones</p>
              <p className={classes.item}>Speakers</p>
            </div>
            <div style={{width: "190px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#FFFFFF"}}>
              <p style={{color: "#f26a10", fontWeight: "bold"}}>Fashion Accessories</p>
                <p className={classes.item}>Wallets</p>
                <p className={classes.item}>Belts</p>
                <p className={classes.item}>Perfumes & Body Mists</p>
                <p className={classes.item}>Trimmers</p>
                <p className={classes.item}>Deodrants</p>
                <p className={classes.item}>Ties, Cufflinks & Pocket Squares</p>
                <p className={classes.item}>Accessory Gift Sets</p>
                <p className={classes.item}>Caps & Hats</p>
                <p className={classes.item}>Mufflers, Scarves & Gloves</p>
                <p className={classes.item}>Phone Cases</p>
                <p className={classes.item}>Rings & Wristwear</p>
                <p className={classes.item}>Helmets</p>
              <hr />
              <p style={{color: "#f26a10", fontWeight: "bold"}}>Bags & Backpacks</p>
              <p style={{color: "#f26a10", fontWeight: "bold"}}>Luggages & Trolleys</p>
            </div>
        </div>
      )
      case "home_living": return(
        <div className={classes.overlay} style={{display: "flex", flexDirection: "row"}} onMouseOver={() => this.setItem("home_living", 1)} onMouseOut={() => this.resetItem(0)}>
            <div style={{width: "170px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#ffffff"}}>
              <p style={{color: "#f2c210", fontWeight: "bold"}}>Indian & Fusion Wear</p>
                <p className={classes.item}>Kurtas & Suits</p>
                <p className={classes.item}>Kurtis, Tunics & Tops</p>
                <p className={classes.item}>Formal Shirts</p>
                <p className={classes.item}>Sweatshirts</p>
                <p className={classes.item}>Sweaters</p>
                <p className={classes.item}>Jackets</p>
                <p className={classes.item}>Blazers & Coats</p>
                <p className={classes.item}>Suits</p>
                <p className={classes.item}>Rain Jackets</p>
              <hr />
              <p style={{color: "#f2c210", fontWeight: "bold"}}>Indian & Festive Wear</p>
              <p className={classes.item}>Kurtas & Kurta Sets</p>
              <p className={classes.item}>Sherwanis</p>
              <p className={classes.item}>Nehru Jackets</p>
              <p className={classes.item}>Dhotis</p>
            </div>
            <div style={{width: "160px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#FDFBFB"}}>
              <p style={{color: "#f2c210", fontWeight: "bold"}}>Bottom Wear</p>
                <p className={classes.item}>Jeans</p>
                <p className={classes.item}>Casual Trousers</p>
                <p className={classes.item}>Formal Trousers</p>
                <p className={classes.item}>Shorts</p>
                <p className={classes.item}>Track Pants & Joggers</p>
              <hr />
              <p style={{color: "#f2c210", fontWeight: "bold"}}>Innerwear & Sleepwear</p>
              <p className={classes.item}>Briefs & Trunks</p>
              <p className={classes.item}>Boxers</p>
              <p className={classes.item}>Vests</p>
              <p className={classes.item}>Sleepwear & Loungewear</p>
              <p className={classes.item}>Thermals</p>
              <hr />
              <p style={{color: "#f2c210", fontWeight: "bold"}}>Plus Size</p>
            </div>
            <div style={{width: "170px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#FFFFFF"}}>
              <p style={{color: "#f2c210", fontWeight: "bold"}}>Footwear</p>
                <p className={classes.item}>Casual Shoes</p>
                <p className={classes.item}>Sports Shoes</p>
                <p className={classes.item}>Formal Shoes</p>
                <p className={classes.item}>Sneakers</p>
                <p className={classes.item}>Sandals & Floaters</p>
                <p className={classes.item}>Flip Flops</p>
                <p className={classes.item}>Socks</p>
              <hr />
              <p style={{color: "#f2c210", fontWeight: "bold"}}>Personal Care & Grooming</p>
              <p style={{color: "#f2c210", fontWeight: "bold"}}>Sunglasses & Frames</p>
              <p style={{color: "#f2c210", fontWeight: "bold"}}>Watches</p>
            </div>
            <div style={{width: "160px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#FDFBFB"}}>
              <p style={{color: "#f2c210", fontWeight: "bold"}}>Sports & Active Wear</p>
                <p className={classes.item}>Sports Shoes</p>
                <p className={classes.item}>Sports Scandals</p>
                <p className={classes.item}>Active T-Shirts</p>
                <p className={classes.item}>Track Pants & Shorts</p>
                <p className={classes.item}>Tracksuits</p>
                <p className={classes.item}>Jackets & Sweatshirts</p>
                <p className={classes.item}>Sports Accessories</p>
                <p className={classes.item}>Swimwear</p>
              <hr />
              <p style={{color: "#f2c210", fontWeight: "bold"}}>Gadgets</p>
              <p className={classes.item}>Smart Wearables</p>
              <p className={classes.item}>Fitness Gadgets</p>
              <p className={classes.item}>Headphones</p>
              <p className={classes.item}>Speakers</p>
            </div>
            <div style={{width: "190px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#FFFFFF"}}>
              <p style={{color: "#f2c210", fontWeight: "bold"}}>Fashion Accessories</p>
                <p className={classes.item}>Wallets</p>
                <p className={classes.item}>Belts</p>
                <p className={classes.item}>Perfumes & Body Mists</p>
                <p className={classes.item}>Trimmers</p>
                <p className={classes.item}>Deodrants</p>
                <p className={classes.item}>Ties, Cufflinks & Pocket Squares</p>
                <p className={classes.item}>Accessory Gift Sets</p>
                <p className={classes.item}>Caps & Hats</p>
                <p className={classes.item}>Mufflers, Scarves & Gloves</p>
                <p className={classes.item}>Phone Cases</p>
                <p className={classes.item}>Rings & Wristwear</p>
                <p className={classes.item}>Helmets</p>
              <hr />
              <p style={{color: "#f2c210", fontWeight: "bold"}}>Bags & Backpacks</p>
              <p style={{color: "#f2c210", fontWeight: "bold"}}>Luggages & Trolleys</p>
            </div>
        </div>
      )
      case "beauty": return(
        <div className={classes.overlay} style={{display: "flex", flexDirection: "row"}} onMouseOver={() => this.setItem("beauty", 1)} onMouseOut={() => this.resetItem(0)}>
            <div style={{width: "170px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#ffffff"}}>
              <p style={{color: "#0db7af", fontWeight: "bold"}}>Indian & Fusion Wear</p>
                <p className={classes.item}>Kurtas & Suits</p>
                <p className={classes.item}>Kurtis, Tunics & Tops</p>
                <p className={classes.item}>Formal Shirts</p>
                <p className={classes.item}>Sweatshirts</p>
                <p className={classes.item}>Sweaters</p>
                <p className={classes.item}>Jackets</p>
                <p className={classes.item}>Blazers & Coats</p>
                <p className={classes.item}>Suits</p>
                <p className={classes.item}>Rain Jackets</p>
              <hr />
              <p style={{color: "#0db7af", fontWeight: "bold"}}>Indian & Festive Wear</p>
              <p className={classes.item}>Kurtas & Kurta Sets</p>
              <p className={classes.item}>Sherwanis</p>
              <p className={classes.item}>Nehru Jackets</p>
              <p className={classes.item}>Dhotis</p>
            </div>
            <div style={{width: "160px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#FDFBFB"}}>
              <p style={{color: "#0db7af", fontWeight: "bold"}}>Bottom Wear</p>
                <p className={classes.item}>Jeans</p>
                <p className={classes.item}>Casual Trousers</p>
                <p className={classes.item}>Formal Trousers</p>
                <p className={classes.item}>Shorts</p>
                <p className={classes.item}>Track Pants & Joggers</p>
              <hr />
              <p style={{color: "#0db7af", fontWeight: "bold"}}>Innerwear & Sleepwear</p>
              <p className={classes.item}>Briefs & Trunks</p>
              <p className={classes.item}>Boxers</p>
              <p className={classes.item}>Vests</p>
              <p className={classes.item}>Sleepwear & Loungewear</p>
              <p className={classes.item}>Thermals</p>
              <hr />
              <p style={{color: "#0db7af", fontWeight: "bold"}}>Plus Size</p>
            </div>
            <div style={{width: "170px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#FFFFFF"}}>
              <p style={{color: "#0db7af", fontWeight: "bold"}}>Footwear</p>
                <p className={classes.item}>Casual Shoes</p>
                <p className={classes.item}>Sports Shoes</p>
                <p className={classes.item}>Formal Shoes</p>
                <p className={classes.item}>Sneakers</p>
                <p className={classes.item}>Sandals & Floaters</p>
                <p className={classes.item}>Flip Flops</p>
                <p className={classes.item}>Socks</p>
              <hr />
              <p style={{color: "#0db7af", fontWeight: "bold"}}>Personal Care & Grooming</p>
              <p style={{color: "#0db7af", fontWeight: "bold"}}>Sunglasses & Frames</p>
              <p style={{color: "#0db7af", fontWeight: "bold"}}>Watches</p>
            </div>
            <div style={{width: "160px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#FDFBFB"}}>
              <p style={{color: "#0db7af", fontWeight: "bold"}}>Sports & Active Wear</p>
                <p className={classes.item}>Sports Shoes</p>
                <p className={classes.item}>Sports Scandals</p>
                <p className={classes.item}>Active T-Shirts</p>
                <p className={classes.item}>Track Pants & Shorts</p>
                <p className={classes.item}>Tracksuits</p>
                <p className={classes.item}>Jackets & Sweatshirts</p>
                <p className={classes.item}>Sports Accessories</p>
                <p className={classes.item}>Swimwear</p>
              <hr />
              <p style={{color: "#0db7af", fontWeight: "bold"}}>Gadgets</p>
              <p className={classes.item}>Smart Wearables</p>
              <p className={classes.item}>Fitness Gadgets</p>
              <p className={classes.item}>Headphones</p>
              <p className={classes.item}>Speakers</p>
            </div>
            <div style={{width: "190px", padding: "20px 30px", lineHeight: "10px", fontSize: "12px", cursor: "pointer", backgroundColor: "#FFFFFF"}}>
              <p style={{color: "#0db7af", fontWeight: "bold"}}>Fashion Accessories</p>
                <p className={classes.item}>Wallets</p>
                <p className={classes.item}>Belts</p>
                <p className={classes.item}>Perfumes & Body Mists</p>
                <p className={classes.item}>Trimmers</p>
                <p className={classes.item}>Deodrants</p>
                <p className={classes.item}>Ties, Cufflinks & Pocket Squares</p>
                <p className={classes.item}>Accessory Gift Sets</p>
                <p className={classes.item}>Caps & Hats</p>
                <p className={classes.item}>Mufflers, Scarves & Gloves</p>
                <p className={classes.item}>Phone Cases</p>
                <p className={classes.item}>Rings & Wristwear</p>
                <p className={classes.item}>Helmets</p>
              <hr />
              <p style={{color: "#0db7af", fontWeight: "bold"}}>Bags & Backpacks</p>
              <p style={{color: "#0db7af", fontWeight: "bold"}}>Luggages & Trolleys</p>
            </div>
        </div>
      )
      case "profile": return (
        <div className={classes.profile} style={{width: "220px",cursor: "default", lineHeight: "10px", height: "350px", fontSize: "12px", left: "78%", boxShadow: "0px 1px 1px 0.5px #eeeeee", borderRadius: "4px"}}
        onMouseOver={() => this.setItem("profile", 1)} onMouseOut={() => this.resetItem(0)}>
            <p style={{fontWeight: "500"}}>Welcome</p>
            <p style={{marginTop: "1px"}}>To access account and manage orders</p>
            <button style={{backgroundColor: "#FFFFFF", width: "130px", height: "40px", border: "none", boxShadow: "1px 1px 1px 1px #eeeeee", cursor: "pointer", color: "#F7328F", fontWeight: "bold"}}>LOGIN/SIGNUP</button>
            <hr style={{color: "#eeeeee", border: "1px 0px 0px 0px", borderColor: "#eeeeee"}} />
            <p className={classes.item} style={{cursor: "pointer"}}>Orders</p>
            <p className={classes.item} style={{cursor: "pointer"}}>Wishlist</p>
            <p className={classes.item} style={{cursor: "pointer"}}>Gift Cards</p>
            <p className={classes.item} style={{cursor: "pointer"}}>Contact Us</p>
            <p className={classes.item} style={{cursor: "pointer"}}>Myntra Insider <i><span style={{backgroundColor: "#F7328F", color: "white", borderRadius: "6px", fontSize: "10px", width: "100px", padding: "2px 2px 2px 2px"}}><i>New</i></span></i></p>
            <hr style={{color: "#eeeeee", borderColor: "#eeeeee"}}/>
            <p className={classes.item} style={{cursor: "pointer"}}>Myntra Card</p>
            <p className={classes.item} style={{cursor: "pointer"}}>Coupons</p>
            <p className={classes.item} style={{cursor: "pointer"}}>Saved Cards</p>
            <p className={classes.item} style={{cursor: "pointer"}}>Saved Addresses</p>
        </div>
      )
      default: return(
        <h3>None</h3>
      )
    }
  }
  
  render() {
    const { classes } = this.props;
    const { item, sidesale } = this.state;
  return (
    <div>
      <div className={classes.header} style={{padding: "10px", display: "flex", flexDirection: "row", backgroundColor: "#ffffff", height: "60px", width: "100%", paddingBottom:"0px"}}>
          <img src={myntra} style={{width: "100px", marginTop: "10px"}} />
          <div className={classes.men} style={{marginLeft: "40px", paddingTop: "20px", borderBottom: item == "men" ? "3px solid #ee5f73" : "none" }} onMouseOver={() => this.setItem("men", 1)} onMouseOut={() =>this.resetItem(0)}>MEN</div>
          <div className={classes.women} style={{marginLeft: "40px", paddingTop: "20px", borderBottom: item == "women" ? "3px solid #fb56c1" : "none" }} onMouseOver={ () => this.setItem("women", 1)} onMouseOut={() =>this.resetItem(0)}>WOMEN</div>
          <div className={classes.kids} style={{marginLeft: "40px", paddingTop: "20px", borderBottom: item == "kids" ? "3px solid #f26a10" : "none" }} onMouseOver={() => this.setItem("kids", 1)} onMouseOut={() =>this.resetItem(0)}>KIDS</div>
          <div className={classes.home_living} style={{marginLeft: "40px", paddingTop: "20px", width: item == "home_living" ? "120px" : "120px", borderBottom: item == "home_living" ? "3px solid #f2c210" : "none" }} onMouseOver={() => this.setItem("home_living", 1)} onMouseOut={() =>this.resetItem(0)}>HOME & LIVING</div>
          <div className={classes.beauty} style={{marginLeft: "40px", paddingTop: "20px", borderBottom: item == "beauty" ? "3px solid #0db7af" : "none" }} onMouseOver={() => this.setItem("beauty", 1)} onMouseOut={() =>this.resetItem(0)}>BEAUTY</div>
          <div style={{backgroundColor: "#eee", marginLeft: "100px", height: "35px", marginTop: "15px", width: "350px", borderRadius: "5px"}}>
            <div style={{display: "flex", flexDirection: "row", padding: "5px"}}>
              <SearchIcon style={{color: "gray", width: "20px", marginLeft: "5px"}} />
              <input placeholder="Search for products, brands and more" 
              style={{backgroundColor: "#eee", border: "none", marginLeft: "20px", width: "250px", outlineStyle: "none"}} />
            </div>
          </div>
          <div style={{marginLeft: "40px", marginTop: "10px", lineHeight: "0px",
           borderBottom: item == "profile" ? "3px solid #ee5f73" : "none" }}
            onMouseOver={() => this.setItem("profile", 1)} onMouseOut={() =>this.resetItem(0)}>
            <PersonOutlineOutlinedIcon style={{color: "gray"}} />
            <p style={{fontSize: "10px", fontWeight: "bolder"}} >Profile</p>
          </div>
          <div style={{marginLeft: "20px", marginTop: "10px", lineHeight: "0px"}}>
            <FavoriteBorderOutlinedIcon style={{color: "gray"}} />
            <p style={{fontSize: "10px", fontWeight: "bolder"}}>Wishlist</p>
          </div>
          <div style={{marginLeft: "20px", marginTop: "10px", lineHeight: "0px"}}>
            <LocalMallOutlinedIcon style={{color: "gray"}} />
            <p style={{fontSize: "10px", fontWeight: "bolder", marginLeft: "2px"}}>Bag</p>
          </div>
          {this.state.item.length > 0 ? (<div style={{backgroundColor: "#ffffff", zIndex: 3, position: "fixed"}}>
          {this.showItems(this.state.item)}
        </div>) : null}
      </div>
      
      <div style={{backgroundColor: "#ffffff", height: "1000px", cursor: "pointer"}}>
        <img src={ad2} style={{width: "100%"}} />
        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/23/cbd573a1-2a02-4f9f-b5c3-4cb1fd677a7a1627052843156-Desktop-Bank-Offer--1-.jpg" style={{width: "100%"}}/>
        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/23/62a321a3-9232-4fe8-9128-07a2e44011a61627043864259-Knockout-Deals.jpg" style={{width: "100%"}} />
        <div style={{display: "flex", flexDirection: "row", padding: "20px 70px 20px 70px"}}>
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/23/34a7f2cd-e9df-4ac9-a4c4-1f18e81d0bd21627021258067-Fila_.jpg" style={{width: "17%"}} />
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/23/ba73d880-dac1-41a5-8be8-9a319390e1ef1627021258030-Asics.jpg" style={{width: "17%",paddingLeft: "40px"}} />
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/23/ff735371-ee8d-4bc4-8200-ad0865b9f1851627021258074-Flats_-_Heels_exclusively_on_Myntra.jpg" style={{width: "17%", paddingLeft: "40px"}} />
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/23/be61f986-7e61-48b5-a423-24fb5f024c4b1627021258115-Top_Brands_-_Campus-_Carlton_London_and_more.jpg" style={{width: "17%", paddingLeft: "40px"}} />
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/23/25f80bd6-8a7c-4d13-8ee7-8b716cab7ef51627021258052-Best_selling_Western_Wear_from_top_brands_-_Tokyo_Talkies-_Only_-_more.jpg" style={{width: "17%", paddingLeft: "40px"}} />
        </div>
        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/23/86ca0d5d-d6ca-4927-b277-96769ec6cd911627042125366-For-Women.jpg" style={{width: "100%"}} />
        <div style={{display: "flex", flexDirection: "row", padding: "20px 70px 20px 70px"}}>
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/22/31c6bfea-ba3e-4a9e-ac56-d27c4882c23a1626974562268-Kurta-_-Kurta_sets.jpg" style={{width: "18%"}} />
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/22/dbcba6a4-386b-4fc8-83d7-104befcd12d71626974562293-Sarees.jpg" style={{width: "18%",paddingLeft: "26px"}} />
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/22/f5835246-323d-41ff-a1ef-6ef7b5ea94f61626974562226-Dress.jpg" style={{width: "18%", paddingLeft: "26px"}} />
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/22/b0c3212a-dd81-4cc9-811d-9009c8a7312b1626974562279-Lingerie.jpg" style={{width: "18%", paddingLeft: "26px"}} />
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/22/09a85d5f-5d61-4000-84af-529189b5abf81626974562286-Loungewear.jpg" style={{width: "18%", paddingLeft: "26px"}} />
        </div>
        <div style={{display: "flex", flexDirection: "row", paddingLeft: "70px", paddingRight: "70px", marginTop: "-20px"}}>
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/22/d00776eb-a3fc-460a-8a38-cc721af5cbf61626974562260-jewellery.jpg" style={{width: "18%"}} />
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/22/92c40e30-cd51-4af9-ae3b-e26fae63f77c1626974562300-Tops-_-Tees.jpg" style={{width: "18%",paddingLeft: "26px"}} />
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/22/b4a9dc84-e62e-4217-aad3-669e206e11471626974562243-Handbasg.jpg" style={{width: "18%", paddingLeft: "26px"}} />
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/22/e56d6513-ff30-49ea-a637-c8e10884bf5b1626974562252-Jeans.jpg" style={{width: "18%", paddingLeft: "26px"}} />
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/22/97667f87-7107-418d-83fc-b6bb3930b4591626953627556-Women-Plus-size.jpg" style={{width: "18%", paddingLeft: "26px"}} />
        </div>
        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/23/c7d4796c-c465-4746-afef-56369718e30f1627042125375-For-Men.jpg" style={{width: "100%", marginTop: "20px"}} />
        <div style={{display: "flex", flexDirection: "row", padding: "20px 70px 20px 70px"}}>
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/22/31c6bfea-ba3e-4a9e-ac56-d27c4882c23a1626974562268-Kurta-_-Kurta_sets.jpg" style={{width: "18%"}} />
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/22/dbcba6a4-386b-4fc8-83d7-104befcd12d71626974562293-Sarees.jpg" style={{width: "18%",paddingLeft: "26px"}} />
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/22/f5835246-323d-41ff-a1ef-6ef7b5ea94f61626974562226-Dress.jpg" style={{width: "18%", paddingLeft: "26px"}} />
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/22/b0c3212a-dd81-4cc9-811d-9009c8a7312b1626974562279-Lingerie.jpg" style={{width: "18%", paddingLeft: "26px"}} />
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/22/09a85d5f-5d61-4000-84af-529189b5abf81626974562286-Loungewear.jpg" style={{width: "18%", paddingLeft: "26px"}} />
        </div>
        <div style={{display: "flex", flexDirection: "row", paddingLeft: "70px", paddingRight: "70px", marginTop: "-20px"}}>
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/22/d00776eb-a3fc-460a-8a38-cc721af5cbf61626974562260-jewellery.jpg" style={{width: "18%"}} />
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/22/92c40e30-cd51-4af9-ae3b-e26fae63f77c1626974562300-Tops-_-Tees.jpg" style={{width: "18%",paddingLeft: "26px"}} />
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/22/b4a9dc84-e62e-4217-aad3-669e206e11471626974562243-Handbasg.jpg" style={{width: "18%", paddingLeft: "26px"}} />
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/22/e56d6513-ff30-49ea-a637-c8e10884bf5b1626974562252-Jeans.jpg" style={{width: "18%", paddingLeft: "26px"}} />
            <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/22/97667f87-7107-418d-83fc-b6bb3930b4591626953627556-Women-Plus-size.jpg" style={{width: "18%", paddingLeft: "26px"}} />
        </div>
        <div className={classes.sidesale} style={{ color: "white", left: sidesale ? "43%" : "87%"}} onClick={() => this.setState({ sidesale: !sidesale})}>
          <div style={{marginTop: "-5px", display: "flex", flexDirection: "row", backgroundColor: "#000000", height: "50px", width: "280px", transform: "rotate(270deg)"}}>
            <p style={{marginLeft: "40px", fontSize: "22px", fontWeight: "bolder", marginTop: "10px"}}>FLAT <img src={rupee} style={{width: "18px"}}/> 100 OFF</p>
            {sidesale ? <ArrowDropDownIcon style={{fontSize:"80px", width: "60px", marginLeft: "10px", marginTop: "-10px"}}/> : <ArrowDropUpIcon style={{fontSize:"80px", width: "60px", marginLeft: "10px", marginTop: "-10px"}}/>}
          </div>
          <div style={{backgroundColor: "#F0E2EF", color: "black", cursor: "pointer", marginLeft: sidesale ? "22%" : "80%", height: "280px", marginTop: "-165px"}}>
            <div style={{padding: "10px 40px 0px 40px"}}>
              <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{display: "flex", flexDirection: "column", lineHeight: "0px",  color: "#3E4152", fontFamily: "whitney"}}>
                  <p>AVAIL FLAT</p>
                  <p style={{fontSize: "48px", width: "300px", marginTop: "20px", fontWeight: 700}}><img src={rupee_gray} style={{width: "32px", fontWeight: "bolder"}}/> 400 OFF</p>
                  <p style={{fontSize: "34px", width: "350px", marginTop: "-15px", fontWeight: 700}}>+ FREE DELIVERY</p>
                  <div style={{display: "flex", flexDirection: "row", lineheight: "5px", marginTop: "20px"}}>
                    <p style={{fontSize: "15px", fontWeight: 600}}>Coupon Code:</p>
                    <p style={{marginLeft: "10px", fontSize: "18px", fontWeight: 700, marginTop: "15px"}}>MYNTRA 400</p>
                  </div>
                  <p style={{marginTop: "4px", fontSize: "12px"}}>Applicable on your first order</p>
                </div>
                <div style={{display: "flex", flexDirection: "column", marginLeft: "-20px"}}>
                  <img src="https://assets.myntassets.com/assets/images/2021/7/9/57ef2c85-dbd7-4121-9bd0-90b5a0341cd41625769349259-Desktop-Sidebar--1---1-.png" style={{width: "150px", height: "120px", justifyContent: "end", marginTop: "20px"}} />
                  <button style={{backgroundColor: "#ff3f6c", color: "white", border: "none", fontSize: "16px", fontWeight: 600, width: "172px", height: "48px", borderRadius: "6px", marginTop: "20px", marginLeft: "-20px", cursor: "pointer"}}>SIGN UP NOW </button>
                </div>
              </div>
            </div>
            <hr />
            <div style={{display: "flex", flexDirection: "row", padding: "0px 20px 10px 30px", fontFamily: "whitney", color: "#3E4152"}}>
              <img src={genuine} style={{width: "30px", height: "30px", color: "green"}}/>
              <p style={{fontSize: "13px", marginLeft: "15px", marginTop: "7px", fontWeight: 600, width: "100px"}}>Genuine products</p>
              <img src={buy} style={{width: "30px", height: "30px", color: "green", marginLeft: "20px"}}/>
              <p style={{fontSize: "13px", marginLeft: "15px", marginTop: "7px", fontWeight: 600}}>Try & Buy</p>
              <img src={exchange} style={{width: "30px", height: "30px", color: "green", marginLeft: "20px"}}/>
              <p style={{fontSize: "13px", marginLeft: "15px", marginTop: "7px", fontWeight: 600, width: "150px"}}>Easy Exchange & Returns</p>
            </div>
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "row",backgroundColor: "#FAFBFC", padding: "20px 120px 20px 120px", marginTop: "50px"}}>
        <div style={{display: "flex", flexDirection: "column", lineHeight: "0px", width: "200px", fontWeight: "10", fontSize: "14px"}}>
          <p style={{fontWeight: "600", cursor: "default"}}>ONLINE SHOPPING</p>
          <p style={{paddingTop: "10px", cursor: "pointer"}} >Men</p>
          <p style={{cursor: "pointer"}}>Women</p>
          <p style={{cursor: "pointer"}}>Kids</p>
          <p style={{cursor: "pointer"}}>Home & Living</p>
          <p style={{cursor: "pointer"}}>Beauty</p>
          <p style={{cursor: "pointer"}}>Gift Cards</p>
          <div style={{display: "flex", flexDirection: "row"}}>
            <p>Myntra Insider</p>
            <p style={{backgroundColor: "#FF0000", color: "white", fontWeight: "bold", marginLeft: "20px", lineHeight: "15px", borderRadius: "40%", fontSize: "12px", width: "35px", textAlign: "center"}}>New</p>
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "column", lineHeight: "0px", width: "200px", fontWeight: "10", fontSize: "14px"}}>
          <p style={{fontWeight: "600", cursor: "default"}}>USEFUL LINKS</p>
          <p style={{paddingTop: "10px", cursor: "pointer"}}>Men</p>
          <p style={{cursor: "pointer"}}>Contact Us</p>
          <p style={{cursor: "pointer"}}>FAQ</p>
          <p style={{cursor: "pointer"}}>T&C</p>
          <p style={{cursor: "pointer"}}>Terms Of Use</p>
          <p style={{cursor: "pointer"}}>Track Orders</p>
          <p style={{cursor: "pointer"}}>Shipping</p>
          <p style={{cursor: "pointer"}}> Cancellation</p>
          <p style={{cursor: "pointer"}}>Returns</p>
          <p style={{cursor: "pointer"}}>Whitehat</p>
          <p style={{cursor: "pointer"}}>Blog</p>
          <p style={{cursor: "pointer"}}>Careers</p>
          <p style={{cursor: "pointer"}}>Privacy Policy</p>
          <p style={{cursor: "pointer"}}>Site Map</p>
        </div>
        <div style={{display: "flex", flexDirection: "column", lineHeight: "0px", width: "400px", fontWeight: "10", fontSize: "14px"}}>
          <p style={{fontWeight: "600", cursor: "default"}}>EXPERIENCE MYNTRA APP ON MOBILE</p>
          <div style={{display: "flex", flexDirection: "row", marginTop: "10px", cursor: "pointer"}}>
            <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" style={{width: "140px"}} />
            <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" style={{width: "122px", marginLeft: "10px"}} />
          </div>
          <p style={{fontWeight: "600", paddingTop: "10px", cursor: "default"}}>KEEP IN TOUCH</p>
          <div style={{display: "flex", flexDirection: "row", marginTop: "10px", cursor: "pointer"}}>
            <img src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" style={{width: "20px"}} />
            <img src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" style={{width: "20px", marginLeft: "20px"}} />
            <img src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" style={{width: "28px", marginLeft: "20px"}} />
            <img src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png" style={{width: "22px", marginLeft: "20px"}} />
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "column", cursor: "default", lineHeight: "0px", width: "400px", fontWeight: "10", fontSize: "14px"}}>
          <div style={{display: "flex", flexDirection: "row"}}>
            <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" style={{width: "48px", height: "40px"}}/>
            <div style={{display: "flex", flexDirection: "column", marginLeft: "10px", lineHeight: "0px", marginTop: "-7px"}}>
              <p><span style={{color: "#282c3f", fontWeight: 600}}>100% ORIGINAL</span> guarantee</p>
              <p style={{marginTop: "4px"}}>for all products at myntra.com</p>
            </div>
          </div>
          <div style={{display: "flex", flexDirection: "row", marginTop: "30px"}}>
            <img src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" style={{width: "48px", height: "40px"}}/>
            <div style={{display: "flex", flexDirection: "column", marginLeft: "10px", lineHeight: "0px", marginTop: "-7px"}}>
              <p><span style={{color: "#282c3f", fontWeight: 600}}>Return within 30days</span> of</p>
              <p style={{marginTop: "4px"}}>receiving your order</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
