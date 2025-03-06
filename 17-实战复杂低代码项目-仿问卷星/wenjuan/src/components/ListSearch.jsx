import { ChangeEvent, useEffect, useState } from "react";
import { Button, Input } from "antd";
import { useSearchParams } from "react-router-dom";

const { Search } = Input;

export const ListSearch = ({ onKeywordChange, onReset }) => {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const keyword = searchParams.get("keyword");
    setValue(keyword || "");
    if (keyword) {
      onKeywordChange(keyword); // 将keyword传递给父组件
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSearch = (value) => {
    setSearchParams({
      ...searchParams,
      keyword: value
    });
  };

  const handleReset = () => {
    setSearchParams({});
    onReset();
  };

  return (
    <div>
      <Search
        value={value}
        placeholder="请输入关键字"
        allowClear
        onChange={handleChange}
        onSearch={handleSearch}
        style={{ width: 260 }}
      />
      <Button type="primary" onClick={handleReset}>
        重置
      </Button>
    </div>
  );
};
