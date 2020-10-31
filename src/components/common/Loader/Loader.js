import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./Loader.scss";

const Loader = () => {
  return (
    <Spin
      spinning
      size="large"
      indicator={<LoadingOutlined style={{ fontSize: "30px" }} />}
      tip="Loading..."
    />
  );
};

export default Loader;
