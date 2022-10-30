import { List, Modal, Table, Tabs, Tag } from 'antd';
import { useEffect, useState } from 'react';
import NoteAPI from '../../services/NoteAPI';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CvAPI from '../../services/CvAPI';
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
      console.log(noteFromAPI.data);
    })()
  }, []);


  const handleRoundNoteClick = async (e) => {
    console.log(e);
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
    console.log(notePerRoundFromAPI)
  }

  const handleViewEvaluate = async () => {
    const completedCVFromAPI = await CvAPI.viewCompletedCV();
    setCompletedCV(completedCVFromAPI.data)
    console.log(completedCVFromAPI.data)
    setViewCompletedCvModal(true)
  }

  const columns = [
    {
      title: 'Interviewer',
      dataIndex: 'accountId',
      key: 'accountId',
      render: (e, rec) => {
        return <p>{rec.firstName} {rec.lastName}</p>
      }
    },
    {
      title: 'Link CV',
      dataIndex: 'linkCV',
      key: 'linkCV',
      render: (text) => {
        return <a href="text">{text}</a>
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
        width="1000px"
      >
        <List
          dataSource={completedCV}
          renderItem={(item) => (
            <List.Item
              key={item.userCVID}
              onClick={() => {
                setChosenCV(item)
                console.log(item)
                setNoteDetailModal(true)
              }}
              className="cursor-pointer">
              <List.Item.Meta
                title={
                  <p>{item.linkCV} - CVID: {item.userCVID}</p>
                }
                description={
                  <Tag color="lime">{item.applyTime.split('T')[0]}</Tag>
                }
              />
            </List.Item>
          )}
        />
      </Modal>
      <Modal
        title={
          <EventNoteIcon className='cursor-pointer'/>
        }
        open={noteDetailModal}
        onOk={() => setNoteDetailModal(false)}
        onCancel={() => setNoteDetailModal(false)}
        width="1000px"
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
                      <p>{item.accountId} - CVID: {item.cvId}</p>
                    }
                    description={
                      <Tag color="gold">point: {item.point}</Tag>
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
                      <p>{item.accountId} - CVID: {item.cvId}</p>
                    }
                    description={
                      <Tag color="gold">point: {item.point}</Tag>
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