import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./Loader.scss";

/**
 * Functional component that takes tip as an argument. The tip is basically the text that is shown under that spinning loader.
 * @param {string} tip
 */

const Loader = ({ tip }) => {
  return (
    <Spin
      spinning
      size="large"
      indicator={<LoadingOutlined style={{ fontSize: "30px" }} />}
      tip={tip}
    />
  );
};

export default Loader;
