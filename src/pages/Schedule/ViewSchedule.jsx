import { Badge, Calendar, Descriptions, List, Menu, Modal, Tag } from 'antd';
import React, { useState, useEffect } from 'react';
import ScheduleAPI from '../../services/ScheduleAPI';
const ViewSchedule = () => {
    const [listSchedule, setListSchedule] = useState([]);
    const [listScheduleByDate, setListScheduleByDate] = useState([]);
    const [listScheduleModal, setListScheduleModal] = useState(false);
    const [detailModal, setDetailModal] = useState(false);
    const [detailSchedule, setDetailSchedule] = useState({});

    useEffect(() => {
        (async () => {
            const listScheduleFromAPI = await ScheduleAPI.viewSchedule();
            setListSchedule(listScheduleFromAPI.data);
            console.log(listScheduleFromAPI.data)
        })()
    }, []);

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
        console.log(date, listSchedule);
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
                    listScheduleModal ?
                        <>
                            <Modal
                                title="Schedule List"
                                open={listScheduleModal}
                                onOk={() => setListScheduleModal(false)}
                                onCancel={handleCancel}
                            >
                                {console.log(listScheduleByDate)}
                                <List
                                    dataSource={listScheduleByDate}
                                    renderItem={(item) => (
                                        <List.Item
                                            key={item.scheduleID}
                                            onClick={
                                                () => {
                                                    handleOnClickDetail();
                                                    setDetailSchedule(item);
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
                                <Descriptions title={"Schedule Detail: " + detailSchedule?.scheduleID} bordered>
                                    <Descriptions.Item label="CVID" span={2}>{detailSchedule?.cvID}</Descriptions.Item>
                                    <Descriptions.Item label="Round">{detailSchedule?.roundNum}</Descriptions.Item>
                                    <Descriptions.Item label="Interview Time" span={3}>{detailSchedule?.startTime.slice(0, 5)} - {detailSchedule?.endTime.slice(0, 5)}</Descriptions.Item>
                                    {console.log(detailSchedule?.interviewerID)}
                                    <Descriptions.Item label="Interviewer" span={3}>
                                        <List
                                            dataSource={detailSchedule.interviewID}
                                            renderItem={item => (
                                                <List.Item >
                                                    <p>{item}</p>
                                                </List.Item>
                                            )}
                                        />
                                    </Descriptions.Item>
                                    <Descriptions.Item label="URL Meeting" span={3}>{detailSchedule?.urlMeeting}</Descriptions.Item>
                                </Descriptions>
                            </Modal>
                        </>
                        : null
                }
            </div>
        </>
    )
}

export default ViewSchedule