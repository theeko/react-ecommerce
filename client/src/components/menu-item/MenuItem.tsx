import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";

type MenuItemProps = {
  title: string;
  imageUrl: string;
  id: number;
  size?: string;
  linkUrl: string;
  className: {};
};

function MenuItem({
  title,
  imageUrl,
  className,
  size,
  linkUrl,
  match,
  history
}: Partial<MenuItemProps & RouteComponentProps>): JSX.Element {
  return (
    <div
      className={"menu-item " + className}
      onClick={() => {
        // @ts-ignore
        history.push(match.url);
      }}
    >
      <StyledImageBackgroundDiv imageUrl={imageUrl} />
      <div className="content">
        <h1 className="title">{title && title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

const StyledImageBackgroundDiv = styled.div<{ imageUrl?: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
  transition: 2s;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transform: scale(1.2);
  }
`;

const StyledMenuItem = styled(MenuItem)`
  min-width: 30%;
  height: ${props => (props.size ? "380px" : "240px")};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  .content {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;

    .title {
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: #4a4a4a;
    }

    .subtitle {
      font-weight: lighter;
      font-size: 16px;
    }
  }
`;

export default withRouter(StyledMenuItem);
