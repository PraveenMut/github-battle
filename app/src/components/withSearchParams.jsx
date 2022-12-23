import * as React from "react";
import { useSearchParams } from "react-router-dom";

const withSearchParams = (Component) => (props) => {
  const [searchParams] = useSearchParams();

  return <Component {...props} router={{ searchParams }} />;
};

export default withSearchParams;
