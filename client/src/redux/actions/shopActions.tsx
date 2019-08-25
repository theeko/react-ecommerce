import { ShopActionTypes } from "./actionTypes";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase";

export const updateCollections = (collectionsMap: any) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap: any) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAIL
});

export const fetchCollectionsStartAsync = () => (dispatch: any) => {
  let collectionRef = firestore.collection("collections");
  dispatch(fetchCollectionsStart);
  collectionRef
    .get()
    .then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    //@ts-ignore
    .catch(e => dispatch(fetchCollectionsFailure(e.message)));
};
