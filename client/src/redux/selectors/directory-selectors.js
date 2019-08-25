import { createSelector } from "reselect";

const dirData = state => state.directory;

export const selectDirectoryData = createSelector(
  dirData,
  directoryData => directoryData.sections
);
