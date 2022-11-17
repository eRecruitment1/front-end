import React, { useEffect, useState } from 'react'
import { Col, Menu, notification, Popconfirm, Row, Select, Space, Statistic, Table, Tag } from 'antd';
import AccountAPI from '../../services/AccountAPI';
import PostAPI from '../../services/PostAPI';
import CvAPI from '../../services/CvAPI';
import EditIcon from '@mui/icons-material/Edit';
import LocalStorageKey from '../../constant/LocalStorageKey';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('WeHR Company DashBoard', '', null),
  getItem('Accounts', 'g1', null, [getItem('View Account Dashboard', '1')], 'group'),
  getItem('Post', 'g2', null, [getItem('View Post Dashboard', '2')], 'group'),
  getItem('CV', 'g3', null, [getItem('View CV Dashboard', '3')], 'group'),
];
const handleUpdateStatus = (id) => {
  (async () => {
    try {
      await AccountAPI.updateStatus(id);
      notification.success({
        top: 48,
        message: 'Update Sucessfully',
        description: 'Click to reload to see updates....',
        className: 'cursor-pointer',
        onClick: () => {
          window.location.reload()
        }
      });
    } catch {
      notification.error({
        top: 48,
        message: 'Update Failed',
        description: 'Please try again....',
      });
    }
  })()
}

const handleChangeRoleClick = (e, value) => {
  console.log(e, value)
}

const postColumns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Creator',
    dataIndex: 'fullName',
    key: 'fullName',
    render: (e) => {
      return <p>{e}</p>
    }
  },
  {
    title: 'Create Time',
    dataIndex: 'startTime',
    key: 'startTime',
    render: (e) => {
      return <p>{e.split("T")[0]}</p>
    }
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (e) => {
      if (e) {
        return <Tag color='green'>Available</Tag>
      } else {
        return <Tag color='red'>Unavailable</Tag>
      }
    }
  },
];

const accountColumns = [
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
    render: (e, rec) => {
      return <p>{e}</p>
    }
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Role',
    dataIndex: 'roleName',
    width: '10%',
    key: 'roleName',
    render: (e, rec) => (
      // e !== "CANDIDATE"
      //   ?
      //   <Select
      //     defaultValue={e}
      //     onChange={handleChangeRoleClick}
      //   >
      //     <Select.Option value="HRMANAGER">HRMANAGER</Select.Option>
      //     <Select.Option value="HREMPLOYEE">HREMPLOYEE</Select.Option>
      //     <Select.Option value="EMPLOYEE">EMPLOYEE</Select.Option>
      //   </Select>
      //   :
        <Tag color='lime'>{e}</Tag>
    )
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (e) => {
      if (e) {
        return <Tag color='green'>Available</Tag>
      } else {
        return <Tag color='red'>Unavailable</Tag>
      }
    }
  },
  {
    key: 'id',
    dataIndex: 'id',
    render: (id, rec) => (
      <Space size="middle">

        <Popconfirm placement="topLeft" onConfirm={() => handleUpdateStatus(id)} okText="Yes" cancelText="No" okButtonProps={{ type: "ghost" }}>
          <button
            type="button" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update Status
          </button>
        </Popconfirm>
      </Space>
    )
  },
];

const cvColumns = [
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
    render: (e, rec) => {
      return <p>{e}</p>
    }
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Link CV',
    dataIndex: 'linkCV',
    key: 'linkCV',
    render: (e) => {
      return <a href={e}>Link</a>
    }
  },
  {
    title: 'Apply Time',
    dataIndex: 'applyTime',
    key: 'applyTime',
    sorter: (a, b) => new Date(a.applyTime) - new Date(b.applyTime),
    render: (e) => {
      return <p>{e.split("T")[0]}</p>
    }
  },
  {
    title: 'Post Title',
    dataIndex: 'postTitle',
    key: 'postTitle',
    render: (e) => {
      return <p>{e}</p>
    }
  },
  {
    title: 'Status',
    dataIndex: 'roundNum',
    key: 'roundNum',
    filters: [
      {
        text: 'PASS',
        value: 'PASS',
      },
      {
        text: 'PENDING',
        value: 'PENDING',
      },
    ],
    onFilter: (value, record) => record.roundNum.indexOf(value) === 0,
    render: (params) => {
      if (params === "PENDING") {
        return <Tag color='lime'>{params}</Tag>
      } else if (params === "ROUND1") {
        return <Tag color='red'>{params}</Tag>
      } else {
        return <Tag color='cyan'>{params}</Tag>
      }
    }
  },
];

const DashBoard = () => {
  const [key, setKey] = useState(1);
  const [accounts, setAccounts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [cvs, setCvs] = useState([]);

  const [availableAccounts, setAvailableAccounts] = useState([]);
  const [availablePosts, setAvailablePosts] = useState([]);

  const [pendingCV, setPendingCV] = useState([]);
  const [passCV, setPassCV] = useState([]);


  useEffect(() => {
    (async () => {
      const accountsFromAPI = await AccountAPI.getListAccount();
      console.log(accountsFromAPI.data)
      const postsFromAPI = await PostAPI.getAllPosts();
      console.log(postsFromAPI.data)
      setPosts(postsFromAPI.data)
      const cvFromAPI = await CvAPI.getAllCV();
      console.log(cvFromAPI.data)
      setCvs(cvFromAPI.data)

      let removeADMINArr = accountsFromAPI.data.filter(e => e.roleName != "ADMIN")
      setAccounts(removeADMINArr)

      let a = accountsFromAPI.data.filter(e => e.status == true)
      setAvailableAccounts(a)
      let b = postsFromAPI.data.filter(e => e.status == true)
      setAvailablePosts(b)
      let c = cvFromAPI.data.filter(e => e.roundNum == "PASS")
      setPassCV(c)
      let d = cvFromAPI.data.filter(e => e.roundNum == "PENDING")
      setPendingCV(d)
    })()
  }, []);

  return (
    <div className='h-screen flex'>
      <Menu
        onClick={(e) => setKey(e.key)}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
      />
      {
        (key == 1) &&
        <div className='w-full p-10'>
          <Row gutter={16} className="mb-54 flex justify-center">
            <Col span={6}>
              <Statistic title="Total Accounts" value={accounts.length} />
            </Col>
            <Col span={6}>
              <Statistic title="Available Accounts" value={availableAccounts.length - 1} suffix={"/ " + accounts.length} />
            </Col>
            <Col span={6}>
              <Statistic title="Unvailable Accounts" value={accounts.length - availableAccounts.length + 1} suffix={"/ " + accounts.length} />
            </Col>
          </Row>
          <Table dataSource={accounts} columns={accountColumns} />
        </div>

      }
      {
        (key == 2) &&
        <div className='w-full p-10'>
          <Row gutter={16} className="mb-54 flex justify-center">
            <Col span={6}>
              <Statistic title="Total Posts" value={posts.length} />
            </Col>
            <Col span={6}>
              <Statistic title="Available Posts" value={availablePosts.length} suffix={"/ " + posts.length} />
            </Col>
            <Col span={6}>
              <Statistic title="Unvailable Posts" value={posts.length - availablePosts.length} suffix={"/ " + posts.length} />
            </Col>
          </Row>
          <Table dataSource={posts} columns={postColumns} />
        </div>

      }
      {
        (key == 3) &&
        <div className='w-full p-10'>
          <Row gutter={24} className="mb-54 flex justify-center">
            <Col span={4}>
              <Statistic title="Total CV" value={cvs.length} />
            </Col>
            <Col span={4}>
              <Statistic title="PENDING" value={pendingCV.length} suffix={"/ " + cvs.length} />
            </Col>
            <Col span={4}>
              <Statistic title="ROUND 1" value={0} suffix={"/ " + cvs.length} />
            </Col>
            <Col span={4}>
              <Statistic title="PASSED" value={passCV.length} suffix={"/ " + cvs.length} />
            </Col>
            <Col span={4}>
              <Statistic title="NOT PASSED" value={cvs.length - pendingCV.length - passCV.length} suffix={"/ " + cvs.length} />
            </Col>
          </Row>
          <Table dataSource={cvs} columns={cvColumns} />
        </div>
      }
    </div>
  );
}
export default DashBoard