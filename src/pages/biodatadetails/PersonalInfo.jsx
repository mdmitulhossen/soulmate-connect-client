import { Box, IconButton, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonalInfoLine from "../../components/biodataDetails/PersonalInfoLine";

const PersonalInfo = ({data}) => {
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
                <PersonalInfoLine level='name' value={data?.name || 'N/A'} />
                {/* email */}
                <PersonalInfoLine level='email' value={data?.email || 'N/A'} />
                {/* phone */}
                <PersonalInfoLine level='phone no' value={data?.phone || 'N/A'} />
                {/* FatherName */}
                <PersonalInfoLine level='FatherName' value={data?.fatherName || 'N/A'} />
                {/* motherName */}
                <PersonalInfoLine level='motherName' value={data?.motherName || 'N/A'} />
                {/* gender */}
                <PersonalInfoLine level='gender' value={data?.gender || 'N/A'} />
                {/* dob */}
                <PersonalInfoLine level='dob' value={data?.dob || 'N/A'} />
                {/* age */}
                <PersonalInfoLine level='age' value={data?.age || 'N/A'} />
                {/* height */}
                <PersonalInfoLine level='height' value={data?.height || 'N/A'} />

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
                <PersonalInfoLine level='weight' value={data?.weight || 'N/A'} />
                {/* occupation */}
                <PersonalInfoLine level='occupation' value={data?.occupation || 'N/A'} />
                {/* race */}
                <PersonalInfoLine level='race' value={data?.race || 'N/A'}  />
                {/* presentDivision */}
                <PersonalInfoLine level='presentDivision' value={data?.presentDivision || 'N/A'}  />
                {/* parmanentDivision */}
                <PersonalInfoLine level='parmanentDivision' value={data?.parmanentDivision || 'N/A'} />
                {/* partnerAge */}
                <PersonalInfoLine level='partnerAge' value={data?.partnerAge || 'N/A'} />
                {/* partnerHeight */}
                <PersonalInfoLine level='partnerHeight' value={data?.partnerHeight || 'N/A'} />
                {/* partnerWeight */}
                <PersonalInfoLine level='partnerWeight' value={data?.partnerWeight || 'N/A'}  />

            </Box>
        </Box>
    );
};

export default PersonalInfo;