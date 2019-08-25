import React, { useEffect } from "react";
import CollectionOverviewContainer from "../../components/collections-overview/CollectionOverviewContainer";
import { Route } from "react-router-dom";
import CollectionContainer from "../Collection/CollectionContainer";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/actions/shopActions";

export interface IShopData {
  id: number;
  title: string;
  routeName: string;
  items: IShopItem[];
}

export interface IShopItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number;
}

interface IProps {
  match: any;
  fetchCollectionsStartAsync(): any;
}

function Shop({ match, fetchCollectionsStartAsync }: IProps): JSX.Element {
  useEffect(() => {
    fetchCollectionsStartAsync();
  });

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
}

export default connect(
  null,
  { fetchCollectionsStartAsync }
)(Shop);
