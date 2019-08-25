import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/selectors/shop-selectors.js";
import WithSpinner from "../../components/with-spinner/WithSpinner";
import Collection from "./Collection";

const mapStatetoProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionContainer = compose(
  connect(mapStatetoProps),
  WithSpinner
)(Collection);

export default CollectionContainer as React.JSXElementConstructor<any>;
