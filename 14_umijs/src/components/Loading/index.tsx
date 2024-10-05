import { Spin } from 'antd';

const contentStyle: React.CSSProperties = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
};

const content = <div style={contentStyle} />;
const LoadingBtn = () => {
  return (
    <div>
      <Spin tip="Loading" size="small">
        {content}
      </Spin>
    </div>
  );
};

export default LoadingBtn;
