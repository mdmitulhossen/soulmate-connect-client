import { Box, IconButton, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonalInfoLine from "../../components/biodataDetails/PersonalInfoLine";

const PersonalInfo = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: '20px',
                // justifyContent: 'space-between',
                flexWrap: { sz: 'wrap', lg: 'nowrap' }
            }}
        >
            <Box
                sx={{
                    width: { lg: '50%', sz: '100%' },
                    display: 'flex',
                    gap: '10px',
                    flexDirection: 'column',
                }}
            >
                {/* Name */}
                <PersonalInfoLine level='name' value='Developer' />
                {/* Father name */}
                <PersonalInfoLine level='Father name' value='Smith' />
                {/* Date Of Birth */}
                <PersonalInfoLine level='Date Of Birth' value='10-22-2000' />
                {/* Age */}
                <PersonalInfoLine level='Age' value='23' />
                {/* Weight */}
                <PersonalInfoLine level='Weight' value='65kg' />
                {/* Height */}
                <PersonalInfoLine level='Height' value='165cm' />
                {/* Gender */}
                <PersonalInfoLine level='Height' value='Male' />

            </Box>
            <Box
                sx={{
                    width: { lg: '50%', sz: '100%' },
                    display: 'flex',
                    gap: '10px',
                    flexDirection: 'column',
                }}
            >

                {/* Religion */}
                <PersonalInfoLine level='Religion' value='Islam' />
                {/* Degree */}
                <PersonalInfoLine level='Degree' value='BSC OF CSE' />
                {/* Profession */}
                <PersonalInfoLine level='Profession' value='Working' />
                {/* Company */}
                <PersonalInfoLine level='Company' value='Google' />
                {/* Salary */}
                <PersonalInfoLine level='Salary' value='10000$' />
                {/* position */}
                <PersonalInfoLine level='position' value='SoftWare Engineer' />
                {/* Blood Group */}
                <PersonalInfoLine level='Blood Group' value='O+' />

            </Box>
        </Box>
    );
};

export default PersonalInfo;