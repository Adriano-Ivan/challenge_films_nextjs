"use client";
import { Select } from "antd";
import { useSearchFilmsArea } from "./hooks/useSearchFilmsArea";

function SearchFilmsArea() {
  const { options, onChange, onSearch } = useSearchFilmsArea();
  return (
    <Select
      placeholder={"digite o nome do filme"}
      notFoundContent={"não encontrado"}
      onChange={onChange}
      showSearch={true}
      onSearch={onSearch}
      options={options}
      optionFilterProp="label"
      filterOption
      style={{ minWidth: "250px" }}
    />
  );
}

export default SearchFilmsArea;
