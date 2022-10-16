import { Accordion, AccordionDetails, AccordionSummary, Link, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import CvAPI from '../../services/CvAPI';
import PostAPI from '../../services/PostAPI';

const CVTracking = () => {
    const [cv, setCv] = useState(null);
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        (async () => {
            const cvFromAPI = await CvAPI.getCV()
            setCv(cvFromAPI.data[0])
            const postFromAPI = await PostAPI.getPostById(cvFromAPI.data[0].postID)
            setPost(postFromAPI.data)
            setLoading(false)
        })()
    }, []);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            {
                loading ?
                    <div className='flex justify-center items-center h-screen'>
                        <HashLoader
                            color={"#3300ff"}
                            size={100}
                        />
                    </div>
                    :
                    <>
                        <div className='w-1/2 h-screen flex justify-center items-center'>
                            <Accordion expanded={expanded === 'cv'} onChange={handleChange('cv')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    id="panel1bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        CV Tracking
                                    </Typography>
                                    <Link href={cv?.linkCV} underline="hover">
                                        Link CV
                                    </Link>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                        Aliquam eget maximus est, id dignissim quam.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </>
            }
        </>
    )
}

export default CVTracking