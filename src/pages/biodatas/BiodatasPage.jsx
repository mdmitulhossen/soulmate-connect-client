import { Box, Divider, IconButton, Typography } from "@mui/material";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import MatrimonyContainer from "../../components/shared/MatrimonyContainer";
import Select from 'react-select';
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IamLooking, age, division } from "./options";
import BiodataCard from "../../components/cards/BiodataCard";

const selectStyles = {
    control: (base, state) => ({
        ...base,
        border: '1px solid #000',
        // This line disable the blue border
        boxShadow: state.isFocused ? 0 : 0,
        '&:hover': {
            border: '1px solid #000',
        }
    })
}



const BiodatasPage = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    console.log(selectedOption)

    return (
        <Box
            component='div'
        >
            <Breadcrumb />
            <Box
                component='div'
                sx={{
                    width: '100%',
                    py: 8,
                    // height: '100vh',
                    // display: 'flex',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                }}
            >
                <MatrimonyContainer>
                    <Box
                        component='div'
                        sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            gap: { lg: '20px', sz: '30px' },
                            flexWrap: { sz: 'wrap', lg: 'nowrap' },
                        }}
                    >
                        <Box
                            // component='div'
                            sx={{
                                width: { lg: '30%', sz: '100%' },
                                height: '100%',
                                border: '1px solid #e58f27',
                                padding: '20px',
                                borderRadius: '8px',
                                minHeight: '100vh',
                                // display:'flex',
                                // flexDirection:'column',

                            }}
                        >
                            {/* I am Looking For */}
                            <Box>
                                <Box
                                    sx={{
                                        mb: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                    }}
                                >
                                    <IconButton
                                        disableFocusRipple={true}
                                        disableRipple={true}
                                        size="small"
                                        sx={{
                                            color: '#B2694F',
                                            // fontSize: '30px',
                                            fontWeight: 600,
                                            border: '1px solid #B2694F',
                                            borderRadius: '10px',
                                            padding: '2px'

                                        }}
                                    >
                                        <SearchIcon fontSize="small" />
                                    </IconButton>
                                    <Typography
                                        variant='title'
                                        component='p'
                                        sx={{
                                            color: '#B2694F',
                                            fontWeight: 600,
                                            fontSize: '18px',
                                        }}
                                    >
                                        I am Looking For
                                    </Typography>
                                </Box>
                                <Select
                                    styles={selectStyles}
                                    classNamePrefix="I am Looking For"
                                    defaultValue={IamLooking[0]}
                                    onChange={setSelectedOption}
                                    isClearable={true}
                                    isSearchable={true}
                                    name="gender"
                                    options={IamLooking}
                                />
                            </Box>
                            {/* age */}
                            <Box>
                                <Box
                                    sx={{
                                        mt: 4,
                                        mb: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                    }}
                                >
                                    <IconButton
                                        disableFocusRipple={true}
                                        disableRipple={true}
                                        size="small"
                                        sx={{
                                            color: '#B2694F',
                                            // fontSize: '30px',
                                            fontWeight: 600,
                                            border: '1px solid #B2694F',
                                            borderRadius: '10px',
                                            padding: '2px'

                                        }}
                                    >
                                        <AccessAlarmsIcon fontSize="small" />
                                    </IconButton>
                                    <Typography
                                        variant='title'
                                        component='p'
                                        sx={{
                                            color: '#B2694F',
                                            fontWeight: 600,
                                            fontSize: '18px',
                                        }}
                                    >
                                        Age
                                    </Typography>
                                </Box>
                                <Select
                                    styles={selectStyles}
                                    // classNamePrefix="I am Looking For"
                                    defaultValue={age[0]}
                                    onChange={setSelectedOption}
                                    isClearable={true}
                                    isSearchable={true}
                                    name="age"
                                    options={age}
                                />
                            </Box>
                            {/* division */}
                            <Box>
                                <Box
                                    sx={{
                                        mt: 4,
                                        mb: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                    }}
                                >
                                    <IconButton
                                        disableFocusRipple={true}
                                        disableRipple={true}
                                        size="small"
                                        sx={{
                                            color: '#B2694F',
                                            // fontSize: '30px',
                                            fontWeight: 600,
                                            border: '1px solid #B2694F',
                                            borderRadius: '10px',
                                            padding: '2px'

                                        }}
                                    >
                                        <LocationOnIcon fontSize="small" />
                                    </IconButton>
                                    <Typography
                                        variant='title'
                                        component='p'
                                        sx={{
                                            color: '#B2694F',
                                            fontWeight: 600,
                                            fontSize: '18px',
                                        }}
                                    >
                                        Division
                                    </Typography>
                                </Box>
                                <Select
                                    styles={selectStyles}
                                    // classNamePrefix="I am Looking For"
                                    defaultValue={division[0]}
                                    onChange={setSelectedOption}
                                    isClearable={true}
                                    isSearchable={true}
                                    name="division"
                                    options={division}
                                />
                            </Box>
                        </Box>


                        {/* Right side */}
                        <Box
                            component='div'
                            sx={{
                                width: { lg: '70%', sz: '100%' },
                                height: '100vh',
                                // minHeight:'100vh',
                                overflowY: 'scroll',
                                '::-webkit-scrollbar': {
                                    width: '4px'
                                },
                                '::-webkit-scrollbar-track': {
                                    boxShadow: 'inset 0 0 1px #B2694F',
                                    borderRadius: '5px'
                                },
                                '::-webkit-scrollbar-thumb': {
                                    backgroundColor: 'rgba(188, 167, 160,0.8)',

                                    borderRadius: '5px'
                                }
                            }}
                        >
                            <Box
                                component='div'
                                sx={{
                                    pb: 2,
                                    px: 4
                                }}
                            >
                                <Typography
                                    variant='title'
                                    component='p'
                                    sx={{
                                        color: '#B2694F',
                                        fontWeight: 600,
                                        fontSize: '28px',
                                    }}
                                >
                                    Showing 32 profiles
                                </Typography>
                            </Box>
                            <Divider />
                            <Box
                                sx={{
                                    pt: 4,
                                    px: 4,
                                    display: 'flex',
                                    gap: '20px',
                                    flexDirection: 'column'
                                }}
                            >
                                <BiodataCard />
                                <BiodataCard />
                                <BiodataCard />
                                <BiodataCard />
                                <BiodataCard />
                                <BiodataCard />
                            </Box>

                        </Box>
                    </Box>
                </MatrimonyContainer>
            </Box>
        </Box>
    );
};

export default BiodatasPage;