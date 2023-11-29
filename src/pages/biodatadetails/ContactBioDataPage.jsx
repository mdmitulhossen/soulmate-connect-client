import { Box, IconButton, Typography } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactBioDataPage = ({phone,email,address}) => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    gap: '15px',
                    alignItems: 'center'
                }}
            >
                <IconButton
                    disableFocusRipple={true}
                    disableRipple={true}
                    size="small"
                    sx={{
                        color: '#C48C46',
                        // fontSize: '30px',
                        fontWeight: 600,
                        border: '1px solid #B2694F',
                        borderRadius: '5px',
                        padding: '4px'

                    }}
                >
                    <LocalPhoneIcon fontSize="small" />
                </IconButton>
                <Typography
                    component='p'
                    variant="paragraph"
                    sx={{
                        fontWeight: 600,
                        fontSize: '17px',
                        color: '#66451c'
                    }}>
                    PHONE : <span style={{ fontWeight: 400 }}>{phone}</span>
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: '15px',
                    alignItems: 'center',
                    my: 2

                }}
            >
                <IconButton
                    disableFocusRipple={true}
                    disableRipple={true}
                    size="small"
                    sx={{
                        color: '#C48C46',
                        // fontSize: '30px',
                        fontWeight: 600,
                        border: '1px solid #B2694F',
                        borderRadius: '5px',
                        padding: '4px'

                    }}
                >
                    <EmailIcon fontSize="small" />
                </IconButton>
                <Typography
                    component='p'
                    variant="paragraph"
                    sx={{
                        fontWeight: 600,
                        fontSize: '17px',
                        color: '#66451c'
                    }}>
                    EMAIL : <span style={{ fontWeight: 400 }}>{email}</span>
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: '15px',
                    alignItems: 'center',
                }}
            >
                <IconButton
                    disableFocusRipple={true}
                    disableRipple={true}
                    size="small"
                    sx={{
                        color: '#C48C46',
                        // fontSize: '30px',
                        fontWeight: 600,
                        border: '1px solid #B2694F',
                        borderRadius: '5px',
                        padding: '4px'

                    }}
                >
                    <LocationOnIcon fontSize="small" />
                </IconButton>
                <Typography
                    component='p'
                    variant="paragraph"
                    sx={{
                        fontWeight: 600,
                        fontSize: '17px',
                        color: '#66451c'
                    }}>
                    ADDRESS : <span style={{ fontWeight: 400 }}>{address}</span>
                </Typography>
            </Box>
        </>
    );
};

export default ContactBioDataPage;