import { createSelector } from "reselect";

const selectShopData = state => state.shop;

export const selectCollections = createSelector(
  selectShopData,
  shopData => shopData.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    selectCollections,
    collections => (collections ? collections[collectionUrlParam] : null)
  );

export const selectCollectionsForPreview = createSelector(
  selectCollections,
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectIsLoading = createSelector(
  selectShopData,
  shopData => shopData.isFetching
);

export const selectErrorMessage = createSelector(
  selectShopData,
  shopData => shopData.errorMessage
);

export const selectIsCollectionsLoaded = createSelector(
  [selectCollections],
  collections => !!collections
);
