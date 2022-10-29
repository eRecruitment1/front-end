import {useState, useEffect} from 'react'
import NoteAPI from '../../services/NoteAPI';
import { Space, Table } from 'antd';
import AccountAPI from '../../services/AccountAPI';

const ViewNote = () => {
  const [notes, setNotes] = useState([]);   
  useEffect(() => {
    (async () => {
        const noteFromAPI = await NoteAPI.viewAllNote()
        // let arr = [];
        // noteFromAPI.data.forEach(async (note) => {
        //   const accountGetFromAPI = await AccountAPI.getAccountByID(note.accountId)
        //   arr.push({
        //       ...note,
        //       username: accountGetFromAPI.data.username,
        //   })
        //   setNotes(arr)
        // })
        setNotes(noteFromAPI.data)
      })()
      console.log(notes);
  }, []);
  const columns = [
    {
      title: 'Account',
      dataIndex: 'accountId',
      key: 'accountId',
      render: (text) => {
        return <a>{text}</a>
      }
    },
    {
      title: 'CV ID',
      dataIndex: 'cvId',
      key: 'cvId',
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
    },
    {
        title: 'Point',
        dataIndex: 'point',
        key: 'point',
    },
    {
        title: 'Schedule ID',
        dataIndex: 'scheduleId',
        key: 'scheduleId',
    },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Evaluate</a>
    //     </Space>
    //   ),
    // },
  ];
  return (
    <div className='h-screen'>
        {console.log(notes)}
        <Table columns={columns} dataSource={notes} rowKey="id" />
    </div>
  )
}

export default ViewNote