import {Box, Grid} from '@mui/material'
import "./App.css"

export default function App(){
    const items_arr=[
        {
            Id:"1",
            Img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            Item_Name:"Fancy Product",
            Item_Price:"$40.00 - $80.00",
            Offer_Price:null,
            Button_Name:"View Options"
    
        },
        {
            Id:"2",
            Img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            Item_Name:"Special Item",
            Item_Price:"$20.00",
            Offer_Price:"$18.00",
            Button_Name:"Add to cart"
    
        },
        {
            Id:"3",
            Img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            Item_Name:"Sale Item",
            Item_Price:" $50.00",
            Offer_Price:"$25.00",
            Button_Name:"Add to cart"
    
        },
        {
            Id:"4",
            Img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            Item_Name:"Popular Item",
            Item_Price:"$40.00",
            Offer_Price:null,
            Button_Name:"Add to cart"
    
        },
        {
            Id:"5",
            Img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            Item_Name:"Sale Item",
            Item_Price:"$50.00",
            Offer_Price:"$25.00",
            Button_Name:"Add to cart"
    
        },
        {
            Id:"6",
            Img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            Item_Name:"Fancy Product",
            Item_Price:"$120.00 - $280.00",
            Offer_Price:null,
            Button_Name:"Add to cart"
    
        },
        {
            Id:"7",
            Img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            Item_Name:"Special Item",
            Item_Price:"$20.00",
            Offer_Price:"$18.00",
            Button_Name:"Add to cart"
    
        },
        {
            Id:"8",
            Img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            Item_Name:"Popular Item",
            Item_Price:"$40.00",
            Offer_Price:null,
            Button_Name:"Add to cart"
    
        }
    ]
    return(
        <div className="container">
        <Box sx={{ display: 'flex' , flexWrap: 'wrap'}}>
            <Grid container  sx={{justifyContent: 'space-evenly', rowGap:6}} spacing={6} 
            columns={{ xs: 1, sm: 2, md: 32 }} >
                
                    {items_arr.map((e) => (
                        <Grid item xs={1} sm={1} md={8}>
                        <div className={` item item${e.Id}`}>
                            <p className="sale">Sale</p>
                            <img src={e.Img} alt="img"/>
                            <h2>{e.Item_Name}</h2>
                            <p className="price"><span>{e.Item_Price}</span>    {e.Offer_Price}</p>
                            <div className="btn_div"><button className="button">{e.Button_Name}</button></div>
                        </div>
                        </Grid>
                    ))}
            </Grid>
        </Box>
        </div>
    )
}
    
    