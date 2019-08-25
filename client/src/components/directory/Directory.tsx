import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/MenuItem";
import { selectDirectoryData } from "../../redux/selectors/directory-selectors.js";
import Grid from "@material-ui/core/Grid";

type DirectoryProps = {
  className: {};
  directoryData: SectionsState;
};

type SectionsState = {
  id: number;
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}[];

function Directory({
  className,
  directoryData
}: Partial<DirectoryProps & SectionsState>): JSX.Element {
  return (
    <div className={"directory-menu " + className}>
      <Grid container direction="row">
        {/*
      // @ts-ignore*/}

        {directoryData.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </Grid>
    </div>
  );
}

const styledDiv = styled(Directory)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const mapStateToProps = createStructuredSelector({
  directoryData: selectDirectoryData
});

export default connect(mapStateToProps)(styledDiv);
