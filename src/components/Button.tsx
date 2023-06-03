import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  // color? indicates that color is optional
  color?: string;
  onClick: () => void;
}

const Button = ({ children, color = 'success', onClick }: Props) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
  {children}
</div>
  )
}

export default Button
