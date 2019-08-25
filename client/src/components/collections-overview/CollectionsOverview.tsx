import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./collection-overview.styles.scss";
import Grid from "@material-ui/core/Grid";
import CollectionPreview from "../collection-preview/CollectionPreview";
import { selectCollectionsForPreview } from "../../redux/selectors/shop-selectors.js";

function CollectionsOverview({ collections }: any) {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...others }: any) => {
        return (
          <Grid container key={id} justify="space-between">
            <CollectionPreview {...others} />
          </Grid>
        );
      })}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
