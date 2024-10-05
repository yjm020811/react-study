import Guide from '@/components/Guide';
import LoadingBtn from '@/components/Loading';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import {
  useLocation,
  useModel,
  useNavigate,
  useParams,
  withRouter,
} from '@umijs/max';
import { Button } from 'antd';
import styles from './index.less';

const HomePage: React.FC = (props: any) => {
  const { name } = useModel('global');
  // 1：获取路径跳转参数：
  // 方式1：基于useParams获取路由参数
  let params = useParams();
  console.log(params);
  // 方式2：使用withRouter对导出的组件进行包裹，再使用props.params获取路由参数
  console.log(props.params);

  //2：路由跳转
  //创建navigate
  const navigate = useNavigate();
  const routerChange = () => {
    // navigate('/table'); // 直接跳转
    navigate({
      // 跳转并携带问号传参
      pathname: '/table',
      search: 'name=yjm&age=18',
    });
  };

  // 3.获取路由信息
  const location = useLocation();
  console.log(location);

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
        <LoadingBtn></LoadingBtn>
        <Button type="primary" onClick={routerChange}>
          跳转到table界面
        </Button>
      </div>
    </PageContainer>
  );
};

export default withRouter(HomePage);
