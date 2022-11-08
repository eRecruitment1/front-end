import AddIcon from '@mui/icons-material/Add';
import { Link } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { DatePicker, Form, Input, Modal, notification, Radio, Select, Tag, TimePicker } from "antd";
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
    const [options, setOpstions] = useState(false);

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
        console.log(values)
        let minute = Math.floor((dateRange[1].toDate() - dateRange[0].toDate()) / 60000)
        if (minute >= 45) {
            const response = await ScheduleAPI.createSchedule({
                cvID: curCVID,
                urlMeeting: values.urlMeeting ? values.urlMeeting : "",
                roomName: values.roomName ? values.roomName : "",
                round: values.roundNum,
                interviewerIDs: values.interview,
                date: values.date.format("YYYY-MM-DD"),
                startTime: dateRange[0].format("HH:mm:ss"),
                endTime: dateRange[1].format("HH:mm:ss")
            })
            if (response.status == '200') {
                notification.success({
                    message: 'Create Sucessfully',
                    description: 'Please track schedule for more...',
                });
            } else {
                notification.error({
                    message: 'Create Failed',
                    description: 'Oops! Something failed @@',
                });
            }
            setScheduleAddModal(false)
        } else {
            notification.warning({
                message: 'Create Failed',
                description: 'Short time! Please change time > 45 min',
            });
        }
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
            width: 250,
            renderCell: (params) => {
                <p>{params.value}</p>
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 300,
            renderCell: (params) => {
                <p>{params.value}</p>
            }
        },
        {
            field: 'linkCV',
            headerName: 'Link CV',
            width: 150,
            renderCell: (params) => (
                <Link href={params.value}>Link CV</Link>
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
            width: 90,
            renderCell: (params) => {
                if (params.value === "PENDING") {
                    return <Tag color='lime'>{params.value}</Tag>
                } else if (params.value === "ROUND1") {
                    return <Tag color='red'>{params.value}</Tag>
                } else {
                    return <Tag color='cyan'>{params.value}</Tag>
                }
            }
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
                    footer={
                        <button
                            type="submit" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={form.submit}
                        >
                            Create
                        </button>
                    }
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
                        <Form.Item label="Options" name="options" rules={[{ required: true, message: "This field is required" }]}>
                            <Radio.Group>
                                <Radio.Button value="Offline" onChange={() => setOpstions(false)}>Offline</Radio.Button>
                                <Radio.Button value="Online" onChange={() => setOpstions(true)}>Online</Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                        {
                            options ?
                                <Form.Item label="URL" name="urlMeeting" rules={[{ required: true, message: "This field is required" }]}>
                                    <Input />
                                </Form.Item>
                                :
                                <Form.Item label="Room Name" name="roomName" rules={[{ required: true, message: "This field is required" }]}>
                                    <Input />
                                </Form.Item>
                        }
                        <Form.Item label="Interviewers" name="interview" rules={[{ required: true, message: "This field is required" }]}>
                            <Select
                                mode="multiple"
                                showArrow
                                tagRender={tagRender}
                                style={{

                                    width: '100%',
                                    cursor: "pointer"
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