import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

import LockOpenIcon from '@mui/icons-material/LockOpen';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FaceIcon from '@mui/icons-material/Face';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';

import { Box } from '@mui/material';
import ragisterImage from '../../assets/Home/process/register.png'
import findMatchImage from '../../assets/Home/process/findMatch.png'
import interestImage from '../../assets/Home/process/interest.png'
import profileInformationImage from '../../assets/Home/process/profileInformation.png'
import startMeetUpImage from '../../assets/Home/process/startMeetUp.png'
import getMerriageImage from '../../assets/Home/process/getMerriage.png'


const WorkingProcessSection = () => {
    return (
        <Timeline position="alternate">

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    <Box
                        component='img'
                        src={ragisterImage}
                        width='100px'
                        height='100px'
                    >

                    </Box>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    {/* <TimelineConnector sx={{bgcolor:'#66451c'}}/> */}
                    <TimelineDot sx={{bgcolor:'#e58f27'}}>
                        <LockOpenIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: '#66451c' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ px: 2, pb: 8 }}>
                    <Typography variant="title" component="p" sx={{ color: '#66451c', fontWeight: 600, fontSize: '30px' }}>
                        Register
                    </Typography>
                    <Typography
                        component='p'
                        variant='paragraph'
                        sx={{ color: '#66451c', fontSize: '16px', maxWidth: '450px' }}
                    >The journey begins with the essential step of registration, where individuals sign up to become a part of the community.Participants kick-start the process by completing the registration form, laying the foundation for their involvement in the upcoming activities.</Typography>
                </TimelineContent>
            </TimelineItem>


            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    <Box
                        component='img'
                        src={findMatchImage}
                        width='100px'
                        height='100px'
                    >
                    </Box>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    {/* <TimelineConnector /> */}
                    <TimelineDot sx={{border:'2px solid #e58f27'}} variant="outlined">
                        <GroupAddIcon sx={{color:'#66451c'}}/>
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: '#66451c' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ pb: 8, px: 2 }}>
                    <Typography variant="title" component="p" sx={{ color: '#66451c', fontWeight: 600, fontSize: '30px' }}>
                        Find Your Match
                    </Typography>
                    <Typography
                        component='p'
                        variant='paragraph'
                        sx={{ color: '#66451c', fontSize: '16px', maxWidth: '450px', float: 'right' }}
                    >After registration, participants move on to the exciting 'Find Your Match' phase, where connections and compatibility take center stage
                    </Typography>

                </TimelineContent>
            </TimelineItem>


            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    <Box
                        component='img'
                        src={interestImage}
                        width='100px'
                        height='100px'
                    >

                    </Box>
                </TimelineOppositeContent>
                <TimelineSeparator>

                    <TimelineDot sx={{bgcolor:'#e58f27'}}>
                        <VolunteerActivismIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: '#66451c' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ pb: 8, px: 2 }}>
                    <Typography variant="title" component="p" sx={{ color: '#66451c', fontWeight: 600, fontSize: '30px' }}>
                        Send Interest
                    </Typography>
                    <Typography
                        component='p'
                        variant='paragraph'
                        sx={{ color: '#66451c', fontSize: '16px', maxWidth: '450px' }}
                    >After Matching, users utilize the 'Send Interest' feature to express enthusiasm for potential matches. This step fosters connections, allowing individuals to break the ice and initiate meaningful conversations, adding excitement to the journey of building relationships within the community.
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    <Box
                        component='img'
                        src={profileInformationImage}
                        width='100px'
                        height='100px'
                    >
                    </Box>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    {/* <TimelineConnector /> */}
                    <TimelineDot sx={{border:'2px solid #e58f27'}} variant="outlined">
                        <FaceIcon sx={{color:'#66451c'}}/>
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: '#66451c' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ pb: 8, px: 2 }}>
                    <Typography variant="title" component="p" sx={{ color: '#66451c', fontWeight: 600, fontSize: '30px' }}>
                        Get Profile Information
                    </Typography>
                    <Typography
                        component='p'
                        variant='paragraph'
                        sx={{ color: '#66451c', fontSize: '16px', maxWidth: '450px', float: 'right' }}
                    >AUsers access profile information, a key step in the journey. This feature enables individuals to delve deeper, understanding the nuances of their connections. The 'Get Profile Information' phase enriches interactions, fostering a more informed and engaging experience as participants navigate the community and build meaningful relationships.
                    </Typography>

                </TimelineContent>
            </TimelineItem>


            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    <Box
                        component='img'
                        src={startMeetUpImage}
                        width='100px'
                        height='100px'
                    >

                    </Box>
                </TimelineOppositeContent>
                <TimelineSeparator>

                    <TimelineDot sx={{bgcolor:'#e58f27'}}>
                        <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: '#66451c' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ pb: 8, px: 2 }}>
                    <Typography variant="title" component="p" sx={{ color: '#66451c', fontWeight: 600, fontSize: '30px' }}>
                        Start Meetups
                    </Typography>
                    <Typography
                        component='p'
                        variant='paragraph'
                        sx={{ color: '#66451c', fontSize: '16px', maxWidth: '450px' }}
                    >The journey advances as participants initiate 'Meetups,' bringing connections to life in shared experiences. This phase empowers users to organize and attend events, fostering real-world connections that transcend the digital realm, enriching the community with vibrant, in-person interactions
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    <Box
                        component='img'
                        src={getMerriageImage}
                        width='100px'
                        height='100px'
                    >
                    </Box>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    {/* <TimelineConnector /> */}
                    <TimelineDot sx={{border:'2px solid #e58f27'}} variant="outlined">
                        <EscalatorWarningIcon sx={{color:'#66451c'}}/>
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: '#66451c' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ pb: 8, px: 2 }}>
                    <Typography variant="title" component="p" sx={{ color: '#66451c', fontWeight: 600, fontSize: '30px' }}>
                    Getting Marriage
                    </Typography>
                    <Typography
                        component='p'
                        variant='paragraph'
                        sx={{ color: '#66451c', fontSize: '16px', maxWidth: '450px', float: 'right' }}
                    >As connections deepen, the journey reaches a significant milestone with the prospect of 'Getting Marriage.' Users explore and celebrate the next chapter, symbolizing the culmination of meaningful relationships
                    </Typography>

                </TimelineContent>
            </TimelineItem>

        </Timeline >
    );
};

export default WorkingProcessSection;