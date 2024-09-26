import { Menu } from 'antd'
import {
    ShopOutlined,
    UserOutlined,
    CoffeeOutlined,
    ShoppingOutlined,
} from '@ant-design/icons'

const MenuList = () => {
  return (
    <Menu mode="inline" className="menu-bar">
        <Menu.SubMenu 
        key="home" 
        title="Administrativo" 
        icon={<CoffeeOutlined /> }>
            <Menu.Item key="task-1" icon={<ShoppingOutlined /> }>Fornecedores</Menu.Item>
            <Menu.Item key="task-2" icon={<ShopOutlined /> }>Unidade de Distribuição</Menu.Item>
            
        </Menu.SubMenu>
        </Menu>
  )
}

export default MenuList