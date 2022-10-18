import { Link } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import CvAPI from "../../services/CvAPI";
const ViewCV = () => {
    const [cvArr, setCvArr] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const cvFromAPI = await CvAPI.getCV();
                console.log(cvFromAPI.data)
                setCvArr(cvFromAPI.data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);

    const columns = [
        { field: 'accountID', headerName: 'User ID', width: 350 },
        {
            field: 'linkCV',
            headerName: 'Link CV',
            width: 900,
            renderCell: (params) => (
                <Link href={params.value}>{params.value}</Link>
            )
        },
        { field: 'applyTime', headerName: 'Apply Time', width: 170 },
        { field: 'postID', headerName: 'Post ID', type: 'number', width: 90 },
    ];

    return (
        <>
            <div className="w-screen h-screen p-5">
                <div style={{ height: '53%', width: '100%' }}>
                    <DataGrid
                        rows={cvArr}
                        columns={columns}
                        pageSize={10}
                        getRowId={(row => row.userCVID)}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                    />
                </div>
            </div>
        </>
    )
}

export default ViewCV