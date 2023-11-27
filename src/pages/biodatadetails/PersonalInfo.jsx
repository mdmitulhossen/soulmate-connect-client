import { Box, IconButton, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonalInfoLine from "../../components/biodataDetails/PersonalInfoLine";

const PersonalInfo = () => {
    // ['name', 'email', 'phone', 'image', 'fatherName', 'motherName', 'gender', 'dob', 'age', 'height', 'weight', 'occupation', 'race', 'presentDivision', 'parmanentDivision', 'partnerAge', 'partnerHeight', 'partnerWeight']
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
                {/* email */}
                <PersonalInfoLine level='email' value='Smith@dev.com' />
                {/* phone */}
                <PersonalInfoLine level='phone no' value='10485656' />
                {/* FatherName */}
                <PersonalInfoLine level='FatherName' value='jhon' />
                {/* motherName */}
                <PersonalInfoLine level='motherName' value='jhemla' />
                {/* gender */}
                <PersonalInfoLine level='gender' value='male' />
                {/* dob */}
                <PersonalInfoLine level='dob' value='10-12-23' />
                {/* age */}
                <PersonalInfoLine level='age' value='23yrs' />
                {/* height */}
                <PersonalInfoLine level='height' value='5ft' />

            </Box>
            <Box
                sx={{
                    width: { lg: '50%', sz: '100%' },
                    display: 'flex',
                    gap: '10px',
                    flexDirection: 'column',
                }}
            >

                {/* weight */}
                <PersonalInfoLine level='weight' value='65kg' />
                {/* occupation */}
                <PersonalInfoLine level='occupation' value='job' />
                {/* race */}
                <PersonalInfoLine level='race' value='white' />
                {/* presentDivision */}
                <PersonalInfoLine level='presentDivision' value='Dhaka' />
                {/* parmanentDivision */}
                <PersonalInfoLine level='parmanentDivision' value='Khulna' />
                {/* partnerAge */}
                <PersonalInfoLine level='partnerAge' value='25' />
                {/* partnerHeight */}
                <PersonalInfoLine level='partnerHeight' value='6.5ft' />
                {/* partnerWeight */}
                <PersonalInfoLine level='partnerWeight' value='65kg' />

            </Box>
        </Box>
    );
};

export default PersonalInfo;