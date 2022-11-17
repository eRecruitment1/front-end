import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Avatar, Badge, Calendar, Descriptions, Form, InputNumber, List, Modal, notification, Popconfirm, Tag } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useEffect, useState } from 'react';
import LocalStorageKey from '../../constant/LocalStorageKey';
import CvAPI from '../../services/CvAPI';
import NoteAPI from '../../services/NoteAPI';
import ScheduleAPI from '../../services/ScheduleAPI';

const ViewSchedule = () => {
    const [listSchedule, setListSchedule] = useState([]);
    const [listScheduleByDate, setListScheduleByDate] = useState([]);
    const [listScheduleModal, setListScheduleModal] = useState(false);
    const [detailModal, setDetailModal] = useState(false);
    const [detailSchedule, setDetailSchedule] = useState({});
    const [noteModal, setNoteModal] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
        (async () => {
            const listScheduleFromAPI = await ScheduleAPI.viewSchedule();
            console.log(listScheduleFromAPI.data)
            setListSchedule(listScheduleFromAPI.data);
        })()
    }, []);

    const handleFormSubmit = async (values) => {
        try {
            await NoteAPI.createNote({
                cvId: detailSchedule.cvID,
                scheduleId: detailSchedule.scheduleID,
                point: values.point,
                message: values.description,
            });
            notification.success({
                message: 'Take Note Sucessfully',
            });
        } catch {
            notification.error({
                message: 'Take Note Failed',
                description: 'Please try again...'
            });
        }
        if (values.point > 50 && (JSON.parse(localStorage.getItem(LocalStorageKey.USER)).roleName === "HREMPLOYEE")) {
            (async () => {
                const response = await CvAPI.evaluateCV({
                    cvId: detailSchedule.cvID,
                    scheduleId: detailSchedule.scheduleID,
                    isPass: true,
                })
                if (response.status == '200') {
                    notification.success({
                        message: 'Evaluate Round 1 Sucessfully',
                        description: 'Please track CV for more ....'
                    });
                }
            })()
        } else if ((JSON.parse(localStorage.getItem(LocalStorageKey.USER)).roleName === "HREMPLOYEE")) {
            notification.warning({
                message: 'Point is at least 50',
                description: 'point is less than 50, so can not evaluate'
            });
        }
        setNoteModal(false);
    }
    const handleDeleteClick = async () => {
        const response = await ScheduleAPI.deleteSchedule({
            cvId: detailSchedule.cvID,
            scheduleId: detailSchedule.scheduleID,
        });
    }

    const handleEditClick = (e, a) => {
        let flag = false;
        for (const i of detailSchedule.interviewerID) {
            if (JSON.parse(localStorage.getItem(LocalStorageKey.USER)).id === i) {
                flag = true
            }
        }
        if (!flag) {
            window.alert("You cant take note")
        } else {
            setNoteModal(true)
        }
    }

    const handleOnClickDetail = (e, stateSub = true, stateMain = true) => {
        setListScheduleModal(stateMain)
        setDetailModal(stateSub);
    }

    const onSelect = (value) => {
        setListScheduleByDate(null)
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
            if (count == 1) {
                return <Badge status={"success"} text={`You have ${count} new message`} />
            } else {
                return <Badge status={"success"} text={`You have ${count} new messages`} />
            }
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
                            onCancel={() => setNoteModal(false)}
                            footer={
                                <button
                                    type="button" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={() => setListScheduleModal(false)}
                                >
                                    Close
                                </button>
                            }
                        >
                            <List
                                dataSource={listScheduleByDate}
                                renderItem={(item) => (
                                    <List.Item
                                        onClick={
                                            () => {
                                                handleOnClickDetail();
                                                setDetailSchedule(item);
                                            }
                                        }
                                        className="cursor-pointer">
                                        <List.Item.Meta
                                            title={
                                                <p>{item.roundNum} - CVID: {item.cvID}</p>

                                            }
                                            description={
                                                <>
                                                    <Tag color="lime">{item.startTime.slice(0, 5)} - {item.endTime.slice(0, 5)}</Tag>
                                                    <Tag color="gold">{item?.urlMeeting}</Tag>
                                                    <Tag color="gold">{item?.roomName} </Tag>
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
                            onCancel={() => setNoteModal(false)}
                            footer={
                                <button
                                    type="button" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={(e) => handleOnClickDetail(e, false)}
                                >
                                    Close
                                </button>
                            }
                        >
                            <div className='flex justify-end gap-3'>
                                <Popconfirm title="Do You Want To Delete This Schedule" onConfirm={handleDeleteClick} okButtonProps={{ type: "ghost" }}>
                                    <DeleteIcon />
                                </Popconfirm>
                                <EditIcon onClick={handleEditClick} className='cursor-pointer' />
                            </div>
                            <Descriptions title={"Schedule Detail: " + detailSchedule?.scheduleID} bordered>
                                <Descriptions.Item label="CVID" span={2}>{detailSchedule?.cvID}</Descriptions.Item>
                                <Descriptions.Item label="Round">{detailSchedule?.roundNum}</Descriptions.Item>
                                <Descriptions.Item label="Interview Time" span={3}>{detailSchedule?.startTime?.slice(0, 5)} - {detailSchedule?.endTime?.slice(0, 5)}</Descriptions.Item>
                                <Descriptions.Item label="Interviewer" span={3}>
                                    <List
                                        dataSource={detailSchedule.accountResponses}
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
                                <Descriptions.Item label="Room Name" span={3}>{detailSchedule?.roomName}</Descriptions.Item>
                            </Descriptions>
                        </Modal>
                        <Modal
                            title="Take Note"
                            open={noteModal}
                            onOk={form.submit}
                            onCancel={() => setNoteModal(false)}
                            footer={
                                <button
                                    type="submit" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={form.submit}
                                >
                                    Note
                                </button>
                            }
                        >
                            <Form
                                initialValues={{
                                    size: "default",
                                }}
                                form={form}
                                onFinish={handleFormSubmit}
                                size={'default'}
                            >
                                <Form.Item label="Point" name="point" rules={[{ required: true, message: "This field is required" }]}
                                >
                                    <InputNumber min={0} max={100} initialValues={0} />
                                </Form.Item>
                                <Form.Item name="description" rules={[{ required: true, message: "This field is required" }]}>
                                    <TextArea rows={4} placeholder="Description" maxLength={100} />
                                </Form.Item>
                            </Form>
                        </Modal>
                    </>
                }
            </div>
        </>
    )
}

export default ViewSchedule