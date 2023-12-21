import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Drawer, Layout, Menu } from 'antd';

import { useAppContext } from '@/context/appContext';

import { useNavigate } from 'react-router-dom';

import { HiUserGroup } from 'react-icons/hi';
import { HiMiniUserPlus } from 'react-icons/hi2';
import { BsCartPlusFill } from 'react-icons/bs';
import { PiUsersThreeFill } from 'react-icons/pi';
import { MdPayments, MdInventory, MdSms } from 'react-icons/md';
import { FaFileInvoiceDollar, FaTruckFast } from 'react-icons/fa6';
import { RiAdminFill } from 'react-icons/ri';
import { FaFilePowerpoint } from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';

import { DashboardOutlined, MenuOutlined } from '@ant-design/icons';

const { Sider } = Layout;

export default function Navigation() {
  return (
    <>
      <div className="sidebar-wraper">
        <Sidebar collapsible={true} />
      </div>
      <MobileSidebar />
    </>
  );
}

function Sidebar({ collapsible }) {
  let location = useLocation();

  const { state: stateApp, appContextAction } = useAppContext();
  const { isNavMenuClose } = stateApp;
  const { navMenu } = appContextAction;
  const [showLogoApp, setLogoApp] = useState(isNavMenuClose);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  const navigate = useNavigate();

  const items = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: <Link to={'/'}>Dashboard</Link>,
    },
    {
      key: 'patients',
      icon: <HiUserGroup />,
      label: <Link to={'/patients'}>Patients</Link>,
    },
    {
      key: 'prescriptions',
      icon: <HiMiniUserPlus />,
      label: <Link to={'/prescriptions'}>Prescriptions</Link>,
    },
    {
      key: 'suppliers',
      icon: <FaTruckFast />,
      label: <Link to={'/suppliers'}>Suppliers</Link>,
    },
    {
      key: 'orders',
      icon: <BsCartPlusFill />,
      label: <Link to={'/orders'}>Orders</Link>,
    },
    {
      key: 'employee',
      icon: <PiUsersThreeFill />,
      label: <Link to={'/employee'}>Employee</Link>,
    },
    {
      key: 'payment',
      icon: <MdPayments />,
      label: <Link to={'/payment'}>Payment</Link>,
    },
    {
      key: 'lead',
      icon: <MdPayments />,
      label: <Link to={'/lead'}>Leads</Link>,
    },
    {
      key: 'offer',
      icon: <FaFileInvoiceDollar />,
      label: <Link to={'/offer'}>Offer Invoice</Link>,
    },
    // {
    //   key: 'invoice',
    //   icon: <FaFileInvoiceDollar />,
    //   label: <Link to={'/invoice'}>Invoice</Link>,
    // },
    {
      key: 'admin',
      icon: <RiAdminFill />,
      label: <Link to={'/admin'}>Admin</Link>,
    },
    {
      key: 'inventory',
      icon: <MdInventory />,
      label: <Link to={'/inventory'}>Inventory</Link>,
    },

    // Soon to be added
    // {
    //   key: 'pos',
    //   icon: <FaFilePowerpoint />,
    //   label: <Link to={'/pos'}>PoS(WIP)</Link>,
    // },
    // {
    //   key: 'sms',
    //   icon: <MdSms />,
    //   label: <Link to={'/sms'}>SMS(WIP)</Link>,
    // },

    {
      label: 'Settings',
      key: 'settings',
      icon: <IoSettings />,
      children: [
        {
          key: 'profileSettings',
          label: <Link to={'/settings/profile'}>Profile</Link>,
        },
        {
          key: 'currencySettings',
          label: <Link to={'/settings/currency'}>Currency</Link>,
        },
      ],
    },
  ];

  useEffect(() => {
    if (location) if (currentPath !== location.pathname) setCurrentPath(location.pathname);
  }, [location, currentPath]);

  useEffect(() => {
    if (isNavMenuClose) {
      setLogoApp(isNavMenuClose);
    }
    const timer = setTimeout(() => {
      if (!isNavMenuClose) {
        setLogoApp(isNavMenuClose);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isNavMenuClose]);
  const onCollapse = () => {
    navMenu.collapse();
  };

  return (
    <Sider
      collapsible={collapsible}
      collapsed={collapsible ? isNavMenuClose : collapsible}
      onCollapse={onCollapse}
      className="navigation"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: '20px',
        top: '20px',
        bottom: '20px',
        borderRadius: '8px',
        boxShadow: '0px 0px 20px 3px rgba(150, 190, 238, 0.15)',
      }}
      theme={'light'}
    >
      <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <h1>Doc Elise Clinic</h1>
      </div>
      <Menu items={items} mode="inline" theme={'light'} style={{ paddingBottom: '55px' }} />
    </Sider>
  );
}

function MobileSidebar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button
        type="text"
        size="large"
        onClick={showDrawer}
        className="mobile-sidebar-btn"
        style={{ marginLeft: 25 }}
      >
        <MenuOutlined style={{ fontSize: 18 }} />
      </Button>
      <Drawer
        width={200}
        placement="left"
        closable={false}
        onClose={onClose}
        open={visible}
        rootClassName="mobile-sidebar-wraper"
      >
        <Sidebar collapsible={false} />
      </Drawer>
    </>
  );
}
