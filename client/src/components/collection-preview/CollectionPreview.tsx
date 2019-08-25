import React from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { IShopItem } from "../../pages/Shop/Shop";
import CollectionItem from "../collection-item/CollectionItem";

type CollectionPreviewProps = {
  title: string;
  items: IShopItem[];
};

function CollectionPreview({
  title,
  items
}: CollectionPreviewProps): JSX.Element {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        <Grid container spacing={1} justify="space-between">
          {items.slice(0, 4).map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default CollectionPreview;
