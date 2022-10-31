import AddIcon from '@mui/icons-material/Add';
import { Link } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { DatePicker, Form, Input, Modal, Radio, Select, Tag, TimePicker } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import AccountAPI from "../../services/AccountAPI";
import CvAPI from "../../services/CvAPI";
import ScheduleAPI from '../../services/ScheduleAPI';
const ViewCV = () => {
    const [cvArr, setCvArr] = useState([]);
    const [dateRange, setDateRange] = useState([moment(), moment()])
    const [scheduleAddModal, setScheduleAddModal] = useState(false);
    const [curCVID, setCurCVID] = useState("");
    const [form] = Form.useForm();
    const [checkRound, setCheckRound] = useState(false);
    const [empAccounts, setEmpAccounts] = useState([]);
    const [hrEmpAccounts, setHrEmpAccounts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const cvFromAPI = await CvAPI.getCV();
                console.log(cvFromAPI.data);
                setCvArr(cvFromAPI.data)

                const empAccountFromAPI = await AccountAPI.getEmpAccount("Employee");
                setEmpAccounts(empAccountFromAPI.data)
                const hrEmpAccountFromAPI = await AccountAPI.getEmpAccount("HrEmployee");
                setHrEmpAccounts(hrEmpAccountFromAPI.data)
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

    const handleAddButton = async () => {
        setScheduleAddModal(true)
    }

    const handleFormSubmit = async (values) => {
        const response = await ScheduleAPI.createSchedule({
            cvID: curCVID,
            urlMeeting: values.urlMeeting,
            round: values.roundNum,
            interviewerIDs: values.interview,
            date: values.date.format("YYYY-MM-DD"),
            startTime: dateRange[0].format("HH:mm:ss"),
            endTime: dateRange[1].format("HH:mm:ss")
        })
        setScheduleAddModal(false)
    }

    const columns = [
        {
            field: 'firstName',
            headerName: 'First Name',
            width: 70,
            renderCell: (params) => {
                <p>{params.value}</p>
            }
        },
        {
            field: 'lastName',
            headerName: 'Last Name',
            width: 190,
            renderCell: (params) => {
                <p>{params.value}</p>
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 240,
            renderCell: (params) => {
                <p>{params.value}</p>
            }
        },
        {
            field: 'linkCV',
            headerName: 'Link CV',
            width: 650,
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
            field: 'postTitle',
            headerName: 'Post Title',
            width: 270,
            renderCell: (params) => (
                <p>{params.value}</p>
            )
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
                <div style={{ height: '62%', width: '100%' }}>
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
                        <Form.Item label="Round" name="roundNum" rules={[{ required: true, message: "This field is required" }]}>
                            <Radio.Group>
                                <Radio.Button value="ROUND1" onChange={handleRoundClick}>ROUND 1</Radio.Button>
                                <Radio.Button value="ROUND2" onChange={handleRoundClick}>ROUND 2</Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="URL" name="urlMeeting" rules={[{ required: true, message: "This field is required" }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Interviewers" name="interview" rules={[{ required: true, message: "This field is required" }]}>
                            <Select
                                mode="multiple"
                                showArrow
                                tagRender={tagRender}
                                style={{
                                    
                                    width: '100%',
                                    cursor:"pointer"
                                }}
                            >
                                {
                                    checkRound ?
                                        <>
                                            {
                                                empAccounts.map(e => {
                                                    return (<Select.Option key={e.id} value={e.id}>{e.firstName} {e.lastName} - {e.username}</Select.Option>)
                                                })
                                            }
                                        </>
                                        :
                                        <>
                                            {
                                                hrEmpAccounts.map(e => {
                                                    return (<Select.Option key={e.id} value={e.id}>{e.firstName} {e.lastName} - {e.username}</Select.Option>)
                                                })
                                            }
                                        </>
                                }

                            </Select>
                        </Form.Item>
                        <Form.Item label="DatePicker" name="date" rules={[{ required: true, message: "This field is required" }]}>
                            <DatePicker />
                        </Form.Item>
                        <Form.Item label="Time" rules={[{ required: true, message: "This field is required" }]}>
                            <TimePicker.RangePicker format="HH:mm" onChange={(x) => setDateRange(x)} value={dateRange} />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </>
    )
}

export default ViewCV