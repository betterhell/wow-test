import React from "react";

interface Props {
  link?: string;
  label: string;
  style: string;
  onClick?: () => void;
}

const MainButton: React.FunctionComponent<Props> = ({
  link,
  label,
  style,
  onClick,
}) => {
  return (
    <div onClick={onClick} className={style}>
      <a href={link}>{label}</a>
    </div>
  );
};

export default MainButton;
