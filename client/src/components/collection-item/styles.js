import { makeStyles } from "@material-ui/core/styles";

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
    transform: "translate(-50%, -80%)",
    visibility: props => props.visible
  }
});

export default useStyles;
