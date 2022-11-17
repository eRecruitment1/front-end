import EventNoteIcon from '@mui/icons-material/EventNote';
import { List, Modal, notification, Popconfirm, Space, Table, Tabs, Tag } from 'antd';
import { useEffect, useState } from 'react';
import CvAPI from '../../services/CvAPI';
import NoteAPI from '../../services/NoteAPI';
import EventBusyIcon from '@mui/icons-material/EventBusy';

const ViewNote = () => {
  const [notes, setNotes] = useState([]);
  const [completedCV, setCompletedCV] = useState([]);
  const [viewCompletedCvModal, setViewCompletedCvModal] = useState(false);
  const [noteDetailModal, setNoteDetailModal] = useState(false);
  const [chosenCV, setChosenCV] = useState({});
  const [roundNoteDetail, setRoundNoteDetail] = useState([]);

  useEffect(() => {
    (async () => {
      const noteFromAPI = await NoteAPI.viewAllNote()
      setNotes(noteFromAPI.data)
    })()
  }, []);

  const handleEvaluate = async () => {
    const response = await CvAPI.evaluateCV({
      cvId: chosenCV.userCVID,
      scheduleId: roundNoteDetail[0].scheduleId,
      isPass: true
    });
    if (response.status == '200') {
      notification.success({
        message: 'Evaluate Successfully',
      });
    }
  }
  const handleReject = async () => {
    const response = await CvAPI.evaluateCV({
      cvId: chosenCV.userCVID,
      scheduleId: roundNoteDetail[0].scheduleId,
      isPass: false
    });
    if (response.status == '200') {
      notification.success({
        message: 'Rejected Successfully',
      });
    }
  }
  const handleRoundNoteClick = async (e) => {
    console.log(e)
    let notePerRoundFromAPI
    if (e == "round1") {
      notePerRoundFromAPI = await NoteAPI.viewNotesByRound({
        "cvId": chosenCV.userCVID,
        "roundNum": 1
      })
    } else {
      notePerRoundFromAPI = await NoteAPI.viewNotesByRound({
        "cvId": chosenCV.userCVID,
        "roundNum": 2
      })
    }
    setRoundNoteDetail(notePerRoundFromAPI.data)
    console.log(roundNoteDetail)
  }

  const handleViewEvaluate = async () => {
    const completedCVFromAPI = await CvAPI.viewCompletedCV();
    setCompletedCV(completedCVFromAPI.data)
    setViewCompletedCvModal(true)
  }


  const columns = [
    {
      title: 'Link CV',
      dataIndex: 'linkCV',
      key: 'linkCV',
      render: (text) => {
        return <a href={text}>Link CV</a>
      }
    },
    {
      title: 'Interviewer',
      dataIndex: 'accountId',
      key: 'accountId',
      render: (e, rec) => {
        return <p>{rec.firstName} {rec.lastName}</p>
      }
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
  ];
  return (
    <div className='h-screen'>
      <button
        type="button" className="m-6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleViewEvaluate}
      >
        Evaluate
      </button>
      <Table columns={columns} dataSource={notes} rowKey="id" />
      <Modal
        title="View Evaluate"
        open={viewCompletedCvModal}
        onOk={() => setViewCompletedCvModal(false)}
        onCancel={() => setViewCompletedCvModal(false)}
        width="1500px"
        footer={null}
      >
        <List
          dataSource={completedCV}
          renderItem={(item) => (
            <List.Item
              key={item.userCVID}
              onClick={() => {
                setChosenCV(item)
                setNoteDetailModal(true)
              }}
              className="cursor-pointer">
              <List.Item.Meta
                title={
                  <p>Candidate - {item.firstName} {item.lastName} | <Tag color="blue">{item.email}</Tag> | <Tag color="green">{item.roundNum}</Tag></p>
                }
                description={
                  <>
                    <Tag color="gold">apply time: {item.applyTime.split('T')[0]}</Tag>
                    <Tag color="gold">{item.postTitle}</Tag>
                  </>
                }
              />
            </List.Item>
          )}
        />
      </Modal>
      <Modal
        title={
          <Space>
            <Popconfirm title="Are you sure to evaluate this cv?" onConfirm={handleEvaluate}>
              <EventNoteIcon className='cursor-pointer' />
            </Popconfirm>
            <Popconfirm title="Are you sure to reject this cv?" onConfirm={handleReject}>
              <EventBusyIcon className='cursor-pointer' />
            </Popconfirm>
          </Space>
        }
        open={noteDetailModal}
        width="1000px"
        footer={
          <button
            type="submit" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setNoteDetailModal(false)}
          >
            Close
          </button>
        }
      >
        <Tabs defaultActiveKey='round1' onTabClick={handleRoundNoteClick}>
          <Tabs.TabPane tab="ROUND 1" key="round1">
            <List
              dataSource={roundNoteDetail}
              renderItem={(item) => (
                <List.Item
                  key={item.userCVID}
                  className="cursor-pointer">
                  <List.Item.Meta
                    title={
                      <p>Interviewer - {item.firstName} {item.lastName} | <Tag color="blue">{item.email}</Tag></p>
                    }
                    description={
                      <>
                        { 
                          item.point < 50 
                          ?
                          <Tag color="red">point: {item.point}</Tag>
                          :
                          <Tag color="purple">point: {item.point}</Tag>
                        }
                        <Tag color="gold">message: {item.message}</Tag>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="ROUND 2" key="round2">
            <List
              dataSource={roundNoteDetail}
              renderItem={(item) => (
                <List.Item
                  key={item.userCVID}
                  className="cursor-pointer">
                  <List.Item.Meta
                    title={
                      <p>Interviewer - {item.firstName} {item.lastName} | <Tag color="blue">{item.email}</Tag></p>
                    }
                    description={
                      <>
                        <Tag color="purple">point: {item.point}</Tag>
                        <Tag color="gold">message: {item.message}</Tag>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </Tabs.TabPane>
        </Tabs>
      </Modal>
    </div>
  )
}

export default ViewNote