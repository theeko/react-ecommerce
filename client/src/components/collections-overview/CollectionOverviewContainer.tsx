import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsLoading } from "../../redux/selectors/shop-selectors.js";
import WithSpinner from "../with-spinner/WithSpinner";
import CollectionsOverview from "./CollectionsOverview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview) as React.JSXElementConstructor<any>;

export default CollectionOverviewContainer;
