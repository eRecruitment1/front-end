import { HashLoader } from 'react-spinners'

const PageLoading = ({ loading }) => {
    return (
        <>
            {loading ?
            (<div className='w-screen h-screen bg-white flex justify-center items-center'>
                <HashLoader
                    color={"#3300ff"}
                    size={100}
                />
            </div>) : null}
        </>
    )
}

export default PageLoading