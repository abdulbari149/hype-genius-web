import React from "react";
import Layout from "./Layout";

function signin() {
  // const styles="opacity-70 rounded-lg text-md py-1 px-4 shadow-xl mt-3"
  return (
    <Layout
      title="Hey! Let&apos;s get started"
      label1="Business Name"
      placeholder1="Tesla"
      label2="Business Link"
      placeholder2="Tesla.com"
    />
  );
}

export default signin;
