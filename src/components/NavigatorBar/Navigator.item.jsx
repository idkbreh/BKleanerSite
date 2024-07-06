import { Link } from 'react-router-dom';
import { HomeOutlined, ContactsOutlined ,GlobalOutlined} from '@ant-design/icons';

export const Items =  [{
    label: <Link to="/">Home</Link>,
    icon: <HomeOutlined/>,
    key: 'Home'
  },{
    label: <Link to="/login">Login</Link>,
    icon: <GlobalOutlined/>,
    key: 'Product'
    },
  ];