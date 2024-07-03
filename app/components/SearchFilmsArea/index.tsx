"use client";
import { Select, Space } from "antd";
import { useSearchFilmsArea } from "./hooks/useSearchFilmsArea";

function SearchFilmsArea() {
  const { options, onChange, onSearch } = useSearchFilmsArea();
  return (
    <Space
      style={{
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Select
        placeholder={"digite o nome do filme"}
        notFoundContent={"não encontrado"}
        onChange={onChange}
        showSearch={true}
        onSearch={onSearch}
        options={options}
        optionFilterProp="label"
        filterOption
        style={{ minWidth: "280px", backgroundColor: "yellow", height: "80%" }}
      />
    </Space>
  );
}

export default SearchFilmsArea;
