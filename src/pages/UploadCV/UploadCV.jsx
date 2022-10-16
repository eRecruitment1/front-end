import { useState } from 'react'
import {
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import { storage } from "../../services/FirebaseConfig";
import { useNavigate, useParams } from 'react-router-dom';
import CvAPI from '../../services/CvAPI';

const UploadCV = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [fileUpload, setFileUpload] = useState(null);
    const [fileUrl, setFileUrl] = useState("");

    const uploadFileAndGetUrl = () => {
        if (fileUpload == null) return;
        const fileRef = ref(storage, `assets/cv/${fileUpload.name}`);
        const uploadTask = uploadBytesResumable(fileRef, fileUpload);
        uploadTask.on('state_changed',
            () => {
            },
            () => {
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setFileUrl(downloadURL)
                });
            }
        );
    };
    const handleCVUpload = async() => {
        uploadFileAndGetUrl();
        const response = await CvAPI.createCV(
            {
                linkCV: fileUrl,
                postID: id,
            }
        )
        console.log(response)
    }
    return (
        <>
            <div className="flex justify-center items-center h-full mt-72 mb-96">
                <div id="cv-upload" className="w-1/3 max-w-2xl rounded-lg shadow-xl bg-gray-50">
                    <div className="m-4">
                        <label className="inline-block mb-2 text-gray-500">CV Upload</label>
                        <div className="flex-col items-center justify-center w-full">
                            <input
                                type="file"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                onChange={(event) => {
                                    setFileUpload(event.target.files[0]);
                                }}
                            />
                            <div className="flex justify-center p-2">
                                <button onClick={handleCVUpload} className="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl">Upload</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadCV