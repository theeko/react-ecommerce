import { takeEvery } from "redux-saga/effects";
import { ShopActionTypes } from "../actions/actionTypes";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.js";
import {} from "../actions/shopActions";

export function* fetchCollectionsAsync() {
  const collectionRef = firestore.collection("collections");
  const snapshot = yield collectionRef.get();
  //rest
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
