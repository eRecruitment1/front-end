import { useEffect, useState } from "react";
import { Link } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import CvAPI from "../../services/CvAPI";
import AddIcon from '@mui/icons-material/Add';
import { DatePicker, Input, Modal, Form, Radio, Select, TimePicker, Tag } from "antd";
import moment from "moment";
import ScheduleAPI from '../../services/ScheduleAPI'
import AccountAPI from "../../services/AccountAPI";
import { Option } from "antd/lib/mentions";
import { flexbox } from "@mui/system";
const ViewCV = () => {
    const [cvArr, setCvArr] = useState([]);
    const [dateRange, setDateRange] = useState([moment(), moment()])
    const [scheduleAddModal, setScheduleAddModal] = useState(false);
    const [curCVID, setCurCVID] = useState("");
    const [form] = Form.useForm();
    const [checkRound, setCheckRound] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const cvFromAPI = await CvAPI.getCV();
                console.log(cvFromAPI.data);
                setCvArr(cvFromAPI.data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);

    const handleRoundClick = async (values) => {
        if (values.target.value !== "ROUND2") {
            setCheckRound(false)
        } else {
            setCheckRound(true)
        }
    }

    const handleAddButton = () => {
        setScheduleAddModal(true)
    }

    const handleFormSubmit = async (values) => {
        await ScheduleAPI.updateStatus();
        const response = await ScheduleAPI.createSchedule({
            cvID: curCVID,
            urlMeeting: values.urlMeeting,
            round: values.roundNum,
            interviewerIDs: values.interview,
            date: values.date.format("YYYY-MM-DD"),
            startTime: dateRange[0].format("HH:mm:ss"),
            endTime: dateRange[1].format("HH:mm:ss")
        })
        console.log(response)
    }

    const columns = [
        {
            field: 'accountID',
            headerName: 'User ID',
            width: 350
        },
        {
            field: 'linkCV',
            headerName: 'Link CV',
            width: 900,
            renderCell: (params) => (
                <Link href={params.value}>{params.value}</Link>
            )
        },
        {
            field: 'applyTime',
            headerName: 'Apply Time',
            width: 120,
            renderCell: (params) => (
                <p>{params.value.slice(0, 10)}</p>
            )
        },
        {
            field: 'postID',
            headerName: 'Post ID',
            type: 'number',
            width: 90
        },
        {
            field: 'roundNum',
            headerName: 'Round',
            width: 90
        },
        {
            field: 'userCVID',
            headerName: 'Add Schedule',
            width: 150,
            renderCell: (params) => (
                <>
                    <div
                        onClick={() => {
                            setCurCVID(params.formattedValue)
                            handleAddButton()
                        }}
                        className="w-full flex justify-center"
                    >
                        <AddIcon className="cursor-pointer" />
                    </div>
                </>
            )
        }
    ];

    const tagRender = (props) => {
        const { label, value, closable, onClose } = props;
        const onPreventMouseDown = (event) => {
          event.preventDefault();
          event.stopPropagation();
        };
        return (
          <Tag
            color="lime"
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{
              marginRight: 3,
            }}
          >
            {label}
          </Tag>
        );
      };


    return (
        <>
            <div className="w-screen h-screen p-5 pt-10">
                <div style={{ height: '60%', width: '100%' }}>
                    <DataGrid
                        rows={cvArr}
                        columns={columns}
                        pageSize={10}
                        getRowId={(row => row.userCVID)}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                    />
                </div>
                <Modal
                    title="Add Schedule"
                    open={scheduleAddModal}
                    onOk={form.submit}
                    onCancel={() => setScheduleAddModal(false)}
                    width="1000px"
                >
                    <Form
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 14,
                        }}
                        layout="horizontal"
                        initialValues={{
                            size: "default",
                        }}
                        // onValuesChange={onFormLayoutChange}
                        form={form}
                        onFinish={handleFormSubmit}
                        size={'default'}
                    >
                        <Form.Item label="Round" name="roundNum">
                            <Radio.Group>
                                <Radio.Button value="ROUND1" onChange={handleRoundClick}>ROUND 1</Radio.Button>
                                <Radio.Button value="ROUND2" onChange={handleRoundClick}>ROUND 2</Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="URL" name="urlMeeting">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Interviewers" name="interview">
                            <Select
                                mode="multiple"
                                showArrow
                                tagRender={tagRender}
                                style={{
                                    width: '100%',
                                }}
                            >
                                
                                {
                                    checkRound ? 
                                        <>
                                            <Option value="68dd6051-6fa7-4ae6-88f3-438e92868af1">Tran Vu</Option>
                                            <Option value="515ced5a-0c7f-4154-9e7f-321c18d7ed66">Han Nguyen</Option>
                                            <Option value="fcc0d0df-a208-4bd6-8396-5ac560440e52">Dung Nguyen</Option>
                                            <Option value="6b1992b1-026f-40ce-9bbb-90250d4de8b7">Binh Nguyen</Option>
                                            <Option value="d2de166e-979a-40ab-9f8f-151ea42e99b9">Hieu Nguyen</Option>
                                        </>
                                        :
                                        <Option value="caef6317-571d-4c59-91ab-131531f50218">Nguyen Huy</Option>
                                }
                                
                            </Select>
                        </Form.Item>
                        <Form.Item label="DatePicker" name="date">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item label="Time">
                            <TimePicker.RangePicker format="HH:mm" onChange={(x) => setDateRange(x)} value={dateRange} />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </>
    )
}

export default ViewCV