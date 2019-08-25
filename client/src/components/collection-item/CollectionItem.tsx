import React, { useState } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { IShopItem } from "../../pages/Shop/Shop";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { connect } from "react-redux";
import { addItem } from "../../redux/actions/cartActions";

const useStyles = makeStyles({
  card: {
    margin: 10,
    width: "100%"
  },
  media: {
    "&:hover": {
      transform: "scale(1.2)"
    }
  },
  cartIcon: {
    marginRight: 10
  },
  cartButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -80%)"
  }
});

const StyledImage = styled.div<{ imageUrl: string }>`
  background-image: url(${props => props.imageUrl});

  width: 400px;
  height: 200px;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

interface IProps {
  item: IShopItem;
  addItem: (item: IShopItem) => { type: string; payload: {} };
}

function CollectionItem({ item, addItem }: IProps): JSX.Element {
  let [isVisible, setVisible] = useState("visible");
  let classes = useStyles(isVisible);
  let { name, imageUrl, price } = item;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <Card className={classes.card}>
        <CardActionArea>
          <StyledImage imageUrl={imageUrl as string} />
          {/* <CardMedia component="img" alt="Product Image" image={imageUrl} /> */}
          <CardContent>
            <Grid container justify="space-between" alignItems="baseline">
              <Grid item>
                {" "}
                <Typography gutterBottom variant="body1" component="p">
                  {name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="textSecondary" component="p">
                  {price}$
                </Typography>
              </Grid>

              <Fab
                variant="extended"
                aria-label="add-to-cart"
                classes={{ root: classes.cartButton }}
              >
                <AddShoppingCartIcon className={classes.cartIcon} />
                <Typography variant="body2" noWrap>
                  <span onClick={() => addItem(item)}>Add to Cart</span>
                </Typography>
              </Fab>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default connect(
  null,
  { addItem }
)(CollectionItem);
