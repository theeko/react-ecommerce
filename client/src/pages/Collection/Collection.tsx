import React from "react";
import "./collection.scss";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/selectors/shop-selectors.js";

interface ICollectionProps {
  match: any;
  collection: any;
}

function Collection({ match, collection }: ICollectionProps): JSX.Element {
  const { title, items } = collection;
  return (
    <div className="collection">
      <h2 className="title">{title}</h2>
      <div className="items">
        {/*
        //@ts-ignore */}
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

// @ts-ignore
const mapStateToProps = (state, ownProps) => ({
  // @ts-ignore
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
