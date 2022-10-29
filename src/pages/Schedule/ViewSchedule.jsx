import { Avatar, Badge, Calendar, Descriptions, Form, Input, InputNumber, List, Modal, Tag } from 'antd';
import React, { useState, useEffect } from 'react';
import AccountAPI from '../../services/AccountAPI';
import ScheduleAPI from '../../services/ScheduleAPI';
import EditIcon from '@mui/icons-material/Edit';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import TextArea from 'antd/lib/input/TextArea';
import NoteAPI from '../../services/NoteAPI';
import CvAPI from '../../services/CvAPI';
const ViewSchedule = () => {
    const [listSchedule, setListSchedule] = useState([]);
    const [listScheduleByDate, setListScheduleByDate] = useState([]);
    const [listScheduleModal, setListScheduleModal] = useState(false);
    const [detailModal, setDetailModal] = useState(false);
    const [detailSchedule, setDetailSchedule] = useState({});
    const [noteModal, setNoteModal] = useState(false);
    const [viewNoteDetailModal, setViewNoteDetailModal] = useState(false);
    const [form] = Form.useForm();
    useEffect(() => {
        (async () => {
            const listScheduleFromAPI = await ScheduleAPI.viewSchedule();
            console.log(listScheduleFromAPI.data)
            setListSchedule(listScheduleFromAPI.data);
        })()
    }, []);

    const handleFormSubmit = async (values) => {
        const noteFromAPI = await NoteAPI.createNote({
            cvId: detailSchedule.cvID,
            scheduleId: detailSchedule.scheduleID,
            point: values.point,
            message: values.description,
        });
        if(values.point > 50){
            (async () => {
                await CvAPI.evaluateCV({
                    cvId: detailSchedule.cvID,
                    scheduleId: detailSchedule.scheduleID,
                    isPass: true,
                })
            })()
        }
        setNoteModal(false);
    }
    const handleViewNote = async () => {
        const noteFromAPI = await NoteAPI.viewNote({
            cvId: detailSchedule.cvID,
            roundNum: detailSchedule.roundNum.slice(5,6)
        })
        console.log(noteFromAPI);
        setViewNoteDetailModal(true)
    }
    const handleEditClick = () => {
        setNoteModal(true)
    }

    const loadDetailSchedule = (item) => {
        let arrayAccounts = [];
        item.interviewerID.forEach(async (accID) => {
            const accountGetFromAPI = await AccountAPI.getAccountByID(accID)
            arrayAccounts.push(accountGetFromAPI.data)
            setDetailSchedule({
                ...item,
                accounts: arrayAccounts
            })
        })
    }

    const handleOnClickDetail = (e, stateSub = true, stateMain = true) => {
        setListScheduleModal(stateMain)
        setDetailModal(stateSub);
    }

    const onSelect = (value) => {
        let newDate = value.date();
        if (value.date() < 10) {
            newDate = ('0' + value.date().toString().slice(-2));
        }
        const newMonth = value.month() + 1
        let date = value.year() + "-" + newMonth + "-" + newDate
        const arrayFilterByDate = listSchedule.filter((schedule) => schedule.date.localeCompare(date) === 0)
        setListScheduleByDate(arrayFilterByDate);
        setListScheduleModal(!listScheduleModal);
    };
    const handleCancel = () => {
        setListScheduleModal(!listScheduleModal);
    };
    const dateCellRender = (value) => {
        let count = 0;
        let newDate = value.date();
        if (value.date() < 10) {
            newDate = ('0' + value.date().toString().slice(-2));
        }
        const newMonth = value.month() + 1
        let date = value.year() + "-" + newMonth + "-" + newDate
        listSchedule.map((schedule) => {
            if (schedule.date.localeCompare(date) === 0) count++;
        })
        if (count > 0) {
            return (
                <Badge status={"success"} text={`You have ${count} new messages`} />
            )
        }
    };
    return (
        <>
            <div className='mt-10 h-screen'>
                <Calendar dateCellRender={dateCellRender} fullscreen={true} onSelect={onSelect} />
                {
                    <>
                        <Modal
                            title="Schedule List"
                            open={listScheduleModal}
                            onOk={() => setListScheduleModal(false)}
                            onCancel={handleCancel}
                        >
                            <List
                                dataSource={listScheduleByDate}
                                renderItem={(item) => (
                                    <List.Item
                                        key={item.scheduleID}
                                        onClick={
                                            () => {
                                                handleOnClickDetail();
                                                loadDetailSchedule(item);
                                            }
                                        }
                                        className="cursor-pointer">
                                        <List.Item.Meta
                                            title={<p>{item.roundNum} - CVID: {item.cvID}</p>}
                                            description={
                                                <>
                                                    <Tag color="lime">{item.startTime.slice(0, 5)} - {item.endTime.slice(0, 5)}</Tag>
                                                    <Tag color="gold">{item.urlMeeting}</Tag>
                                                </>
                                            }
                                        />
                                    </List.Item>
                                )}
                            />
                        </Modal>
                        <Modal
                            title="Shedule Detail"
                            width={1000}
                            open={detailModal}
                            onOk={(e) => handleOnClickDetail(e, false)}
                            onCancel={(e) => handleOnClickDetail(e, false)}
                        >
                            <div className='flex justify-end gap-3'>
                                <WysiwygIcon onClick={handleViewNote} className='cursor-pointer'/>
                                <EditIcon onClick={handleEditClick} className='cursor-pointer' />
                            </div>
                            <Descriptions title={"Schedule Detail: " + detailSchedule?.scheduleID} bordered>
                                <Descriptions.Item label="CVID" span={2}>{detailSchedule?.cvID}</Descriptions.Item>
                                <Descriptions.Item label="Round">{detailSchedule?.roundNum}</Descriptions.Item>
                                <Descriptions.Item label="Interview Time" span={3}>{detailSchedule?.startTime?.slice(0, 5)} - {detailSchedule?.endTime?.slice(0, 5)}</Descriptions.Item>
                                <Descriptions.Item label="Interviewer" span={3}>
                                    <List
                                        dataSource={detailSchedule.accounts}
                                        renderItem={item => (
                                            <List.Item >
                                                <List.Item.Meta
                                                    avatar={<Avatar src={item.urlImg} />}
                                                    title={<p>{item.firstName} {item.lastName}</p>}
                                                    description={item.email}
                                                />
                                            </List.Item>
                                        )}
                                    />
                                </Descriptions.Item>
                                <Descriptions.Item label="URL Meeting" span={3}>{detailSchedule?.urlMeeting}</Descriptions.Item>
                            </Descriptions>
                        </Modal>
                        <Modal
                            title="Take Note"
                            open={noteModal}
                            onOk={form.submit}
                            onCancel={() => setNoteModal(false)}
                        >
                            <Form
                                initialValues={{
                                    size: "default",
                                }}
                                form={form}
                                onFinish={handleFormSubmit}
                                size={'default'}
                            >
                                <Form.Item label="Point" name="point">
                                    <InputNumber min={0} max={100} defaultValue={0} />
                                </Form.Item>
                                <Form.Item name="description">
                                    <TextArea rows={4} placeholder="Description" maxLength={100} />
                                </Form.Item>
                            </Form>
                        </Modal>
                        <Modal
                            title="View Note Detail"
                            open={viewNoteDetailModal}
                            onOk={() => setViewNoteDetailModal(false)}
                            onCancel={() => setViewNoteDetailModal(false)}
                        >
                            
                        </Modal>
                    </>
                }
            </div>
        </>
    )
}

export default ViewSchedule