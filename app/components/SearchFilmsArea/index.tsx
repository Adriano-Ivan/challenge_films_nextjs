"use client";
import { Select, Space } from "antd";
import { useSearchFilmsArea } from "./hooks/useSearchFilmsArea";
import React from "react";

const containerSearchStyle: React.CSSProperties = {
  width: "100%",
  justifyContent: "center",
};

const searchFilmsStyle: React.CSSProperties = {
  minWidth: "320px",
  backgroundColor: "yellow",
  height: "90%",
  fontSize: 40,
};

function SearchFilmsArea() {
  const { options, onChange, onSearch } = useSearchFilmsArea();
  return (
    <Space style={containerSearchStyle}>
      <Select
        placeholder={"Search Film Name"}
        notFoundContent={"not found"}
        onChange={onChange}
        showSearch={true}
        onSearch={onSearch}
        options={options}
        optionFilterProp="label"
        filterOption
        style={searchFilmsStyle}
        size="large"
      />
    </Space>
  );
}

export default SearchFilmsArea;
