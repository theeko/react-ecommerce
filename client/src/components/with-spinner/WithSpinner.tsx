import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./StyledSpinner";

interface IWithSpinnerProps {
  isLoading: boolean;
  match: any;
  history: any;
  location: any;
}

const WithSpinner = (WrappedComponent: React.JSXElementConstructor<any>) => ({
  isLoading,
  ...otherProps
}: IWithSpinnerProps) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
