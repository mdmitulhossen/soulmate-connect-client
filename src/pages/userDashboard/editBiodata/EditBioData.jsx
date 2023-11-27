import { Box, Button, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { PresentDivision, age, gander, height, occupation, permanentDivision, race } from "../../../utils/editbiodataOptions";
import SelectInput from "../../../components/shared/SelectInput";
import TextInput from "../../../components/shared/TextInput";
import Fileupload from "../../../components/shared/Fileupload";

const EditBioData = () => {
    const [selectedOption, setSelectedOption] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const data = {
            name: form.get('name') || {},
            email: form.get('email') || {},
            phone: form.get('phone') || {},
            image: form.get('image') || {},
            fatherName: form.get('fatherName') || {},
            motherName: form.get('motherName') || {},
            gender: form.get('gender') || {},
            dob: form.get('dob') || {},
            age: form.get('age') || {},
            height: form.get('height') || {},
            weight: form.get('weight') || {},
            occupation: form.get('occupation') || {},
            race: form.get('race') || {},
            presentDivision: form.get('presentDivision') || {},
            parmanentDivision: form.get('parmanentDivision') || {},
            partnerAge: form.get('partnerAge') || {},
            partnerHeight: form.get('partnerHeight') || {},
            partnerWeight: form.get('partnerWeight') || {},
        }

        console.log("edit bio==>", data)

    }

    return (
        <div>
            <Typography
                variant='paragraph'
                sx={{
                    fontSize: '24px',
                    fontWeight: 600
                }}
            >
                Edit Bio Data
            </Typography>

            <Paper
                elevation={2}
                sx={{
                    p: {sz:1,lg:3,xl:4},
                    borderRadius: 2,
                    mt: 2,
                    bgcolor: 'transparent',
                    border: '1px dashed #000',
                }}
            >
                <Box
                    component='form'
                    onSubmit={handleSubmit}
                >
                    <Typography
                        variant='paragraph'
                        sx={{
                            fontSize: '15px',
                            fontWeight: 600,
                        }}
                    >
                        Basic Info
                    </Typography>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(12, 1fr)',
                            pt: 2,
                            gap: 3,
                        }}
                    >

                        {/* Name */}
                        <Box
                            sx={{
                                gridColumn: {lg:'span 6',sz:'span 12'},
                            }}
                        >
                            <TextInput label="Name" name="name" />
                        </Box>
                        {/* Email */}
                        <Box
                            sx={{
                                gridColumn: {lg:'span 6',sz:'span 12'},
                            }}
                        >
                            <TextInput label="Email" name="email" disabled={true} />
                        </Box>
                        {/* phone */}
                        <Box
                            sx={{
                                gridColumn: {lg:'span 6',sz:'span 12'},
                            }}
                        >
                            <TextInput label="Phone" type='number' name="phone" />
                        </Box>
                        {/* Image Input */}
                        <Box
                            sx={{
                                gridColumn: {lg:'span 6',sz:'span 12'},
                            }}
                        >
                            <Fileupload />
                        </Box>
                        {/*Father Name */}
                        <Box
                            sx={{
                                gridColumn: {lg:'span 6',sz:'span 12'},
                            }}
                        >
                            <TextInput label="Father Name" name="fatherName" />
                        </Box>
                        {/*Father Name */}
                        <Box
                            sx={{
                                gridColumn: {lg:'span 6',sz:'span 12'},
                            }}
                        >
                            <TextInput label="Mother Name" name="motherName" />
                        </Box>
                    </Box>

                    {/*Advanced bio  */}
                    <Typography
                        component='p'
                        variant='paragraph'
                        sx={{
                            mt: 4,
                            fontSize: '15px',
                            fontWeight: 600,
                        }}
                    >
                        Advanced Info
                    </Typography>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(12, 1fr)',
                            pt: 2,
                            gap: 3,
                        }}
                    >
                        {/* gender */}
                        <Box
                            sx={{
                                gridColumn: {lg:'span 6',sz:'span 12'},
                            }}
                        >
                            <SelectInput label="Gender" name="gender" options={gander} />
                        </Box>
                        {/* Date of Birth */}
                        <Box
                            sx={{
                                gridColumn: {lg:'span 6',sz:'span 12'},
                            }}
                        >
                            <TextInput label="Date of birth" type='date' name="dob" />
                        </Box>
                        {/* Age */}
                        <Box
                            sx={{
                                gridColumn: {lg:'span 6',sz:'span 12'},
                            }}
                        >
                            <SelectInput label="Age" name="age" options={age} />
                        </Box>
                        {/* Height */}
                        <Box
                            sx={{
                                gridColumn: {lg:'span 6',sz:'span 12'},
                            }}
                        >
                            <SelectInput label="Height" name="height" options={height} />
                        </Box>
                        {/* Weight */}
                        <Box
                            sx={{
                                gridColumn: {lg:'span 6',sz:'span 12'},
                            }}
                        >
                            <TextInput label="Weight" type='number' name="weight" />
                        </Box>
                        {/* Race */}
                        <Box
                            sx={{
                                gridColumn: {lg:'span 6',sz:'span 12'},
                            }}
                        >
                            <SelectInput label="Race" name="race" options={race} />
                        </Box>
                        {/* occupation */}
                        <Box
                            sx={{
                                gridColumn: {lg:'span 6',sz:'span 12'},
                            }}
                        >
                            <SelectInput label="occupation" name="occupation" options={occupation} />
                        </Box>
                        {/* Present Division */}
                        <Box
                            sx={{
                                gridColumn: {lg:'span 6',sz:'span 12'},
                            }}
                        >
                            <SelectInput label="Present Division" name="presentDivision" options={PresentDivision} />
                        </Box>
                        {/* parmanent division */}
                        <Box
                            sx={{
                                gridColumn: 'span 12',
                            }}
                        >
                            <SelectInput label="parmanent division" name="parmanentDivision" options={permanentDivision} />
                        </Box>

                    </Box>
                    {/* Expected Partner Info  */}
                    <Typography
                        component='p'
                        variant='paragraph'
                        sx={{
                            mt: 4,
                            fontSize: '15px',
                            fontWeight: 600,
                        }}
                    >
                        Expected Partner Info
                    </Typography>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(12, 1fr)',
                            pt: 2,
                            gap: 3,
                        }}
                    >
                        {/*Expected Partner Age */}
                        <Box
                            sx={{
                                gridColumn: 'span 12',
                            }}
                        >
                            <SelectInput label="PartnerAge" name="partnerAge" options={age} />
                        </Box>
                        {/*Expected Partner Height */}
                        <Box
                            sx={{
                                gridColumn: {lg:'span 6',sz:'span 12'},
                            }}
                        >
                            <SelectInput label="partnerHeight" name="partnerHeight" options={height} />
                        </Box>
                        {/*Expected Partner Weight */}
                        <Box
                            sx={{
                                gridColumn: {lg:'span 6',sz:'span 12'},
                            }}
                        >
                            <TextInput label="partnerWeight" type='number' name="partnerWeight" />
                        </Box>
                    </Box>


                    {/* submit btn */}
                    <Box
                        sx={{
                            mt: 4,
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                        <Button sx={{ fontSize: '12px', fontWeight: 600 }} variant="contained" color="warning" size="large" type="submit"> Save And Publish Now</Button>
                    </Box>
                </Box>


            </Paper>
        </div>
    );
};

export default EditBioData;