import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

const Button: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Button;
