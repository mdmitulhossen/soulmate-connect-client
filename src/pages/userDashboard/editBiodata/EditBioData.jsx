import { Box, Button, Paper, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { PresentDivision, age, gander, height, occupation, permanentDivision, race } from "../../../utils/editbiodataOptions";
import SelectInput from "../../../components/shared/SelectInput";
import TextInput from "../../../components/shared/TextInput";
import Fileupload from "../../../components/shared/Fileupload";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import axios from "axios";
import toast from "react-hot-toast";
import ButtonLoader from "../../../components/Spinner/ButtonLoader";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";
import { getSeleledIndex } from "../../../utils/selectIndex";
import Spinner from "../../../components/Spinner/Spinner";

const imgBBUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgBB_API_KEY}`


const EditBioData = () => {
    // Todo: useAxiosSecure
    const { user } = useAuth() || {};
    const axiosPublic = useAxiosPublic()
    const [bioDataLoading, setBioDataLoading] = useState(false);
    const [bioData, setBioData] = useState(null);
    const [dataLoading, setDataLoading] = useState(false);



    useEffect(() => {
        setDataLoading(true)
        axiosPublic.get(`/biodata?email=${user.email}`)
            .then(res => {
                setDataLoading(false)
                setBioData(res.data)
            })
            .catch(err => {
                setDataLoading(false)
                console.log(err)
            })
    }, [user, axiosPublic])

    if (dataLoading) return <Spinner />



    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

   



        // upload image to imgbb
        setBioDataLoading(true)
        const res = await axios.post(imgBBUrl, form, { headers: { 'Content-Type': 'multipart/form-data' } })
        // console.log("bb", res)


        if (res.data.success) {
            const imageUrl = res.data.data.display_url
            const data = {
                name: form.get('name') || '',
                email: form.get('email') || '',
                phone: form.get('phone') || '',
                image: imageUrl || '',
                fatherName: form.get('fatherName') || '',
                motherName: form.get('motherName') || '',
                gender: form.get('gender') || '',
                dob: form.get('dob') || '',
                age: form.get('age') || '',
                height: form.get('height') || '',
                weight: form.get('weight') || '',
                occupation: form.get('occupation') || '',
                race: form.get('race') || '',
                presentDivision: form.get('presentDivision') || '',
                parmanentDivision: form.get('parmanentDivision') || '',
                partnerAge: form.get('partnerAge') || '',
                partnerHeight: form.get('partnerHeight') || '',
                partnerWeight: form.get('partnerWeight') || '',
            }

            console.log("form==>", data)
            axiosPublic.put('/biodata/createOrUpdate', data)
                .then(res => {
                    setBioDataLoading(false)
                    toast.success('Bio Data Updated Successfully')
                })
                .catch(err => {
                    setBioDataLoading(false)
                    toast.error(`Somthing error ${err.message}`)
                })


        } else {
            toast.error(`Somthing error Photo upload`)
        }


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
                    p: { sz: 1, lg: 3, xl: 4 },
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
                                gridColumn: { lg: 'span 6', sz: 'span 12' },
                            }}
                        >

                            <TextInput value={bioData?.name} label="Name" name="name" />
                        </Box>
                        {/* Email */}
                        <Box
                            sx={{
                                gridColumn: { lg: 'span 6', sz: 'span 12' },
                            }}
                        >
                            <TextInput readOnly={true} value={user?.email} label="Email" name="email" type='email' />
                        </Box>
                        {/* phone */}
                        <Box
                            sx={{
                                gridColumn: { lg: 'span 6', sz: 'span 12' },
                            }}
                        >
                            <TextInput value={bioData?.phone} label="Phone" type='number' name="phone" />
                        </Box>
                        {/* Image Input */}
                        <Box
                            sx={{
                                gridColumn: { lg: 'span 6', sz: 'span 12' },
                            }}
                        >
                            <Fileupload />
                        </Box>
                        {/*Father Name */}
                        <Box
                            sx={{
                                gridColumn: { lg: 'span 6', sz: 'span 12' },
                            }}
                        >
                            <TextInput value={bioData?.fatherName} label="Father Name" name="fatherName" />
                        </Box>
                        {/*mother Name */}
                        <Box
                            sx={{
                                gridColumn: { lg: 'span 6', sz: 'span 12' },
                            }}
                        >
                            <TextInput value={bioData?.motherName} label="Mother Name" name="motherName" />
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
                                gridColumn: { lg: 'span 6', sz: 'span 12' },
                            }}
                        >
                            <SelectInput defaultValue={getSeleledIndex(bioData?.gender, gander)} label="Gender" name="gender" options={gander} />
                        </Box>
                        {/* Date of Birth */}
                        <Box
                            sx={{
                                gridColumn: { lg: 'span 6', sz: 'span 12' },
                            }}
                        >
                            <TextInput label="Date of birth" type='date' name="dob" />
                        </Box>
                        {/* Age */}
                        <Box
                            sx={{
                                gridColumn: { lg: 'span 6', sz: 'span 12' },
                            }}
                        >
                            <SelectInput defaultValue={getSeleledIndex(bioData?.age, age)} label="Age" name="age" options={age} />
                        </Box>
                        {/* Height */}
                        <Box
                            sx={{
                                gridColumn: { lg: 'span 6', sz: 'span 12' },
                            }}
                        >
                            <SelectInput defaultValue={getSeleledIndex(bioData?.height, height)} label="Height" name="height" options={height} />
                        </Box>
                        {/* Weight */}
                        <Box
                            sx={{
                                gridColumn: { lg: 'span 6', sz: 'span 12' },
                            }}
                        >
                            <TextInput value={bioData?.weight} label="Weight" type='number' name="weight" />
                        </Box>
                        {/* Race */}
                        <Box
                            sx={{
                                gridColumn: { lg: 'span 6', sz: 'span 12' },
                            }}
                        >
                            <SelectInput defaultValue={getSeleledIndex(bioData?.race, race)} label="Race" name="race" options={race} />
                        </Box>
                        {/* occupation */}
                        <Box
                            sx={{
                                gridColumn: { lg: 'span 6', sz: 'span 12' },
                            }}
                        >
                            <SelectInput defaultValue={getSeleledIndex(bioData?.occupation, occupation)} label="occupation" name="occupation" options={occupation} />
                        </Box>
                        {/* Present Division */}
                        <Box
                            sx={{
                                gridColumn: { lg: 'span 6', sz: 'span 12' },
                            }}
                        >
                            <SelectInput defaultValue={getSeleledIndex(bioData?.presentDivision, PresentDivision)} label="Present Division" name="presentDivision" options={PresentDivision} />
                        </Box>
                        {/* parmanent division */}
                        <Box
                            sx={{
                                gridColumn: 'span 12',
                            }}
                        >
                            <SelectInput defaultValue={getSeleledIndex(bioData?.parmanentDivision, permanentDivision)} label="parmanent division" name="parmanentDivision" options={permanentDivision} />
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
                            <SelectInput defaultValue={getSeleledIndex(bioData?.partnerAge, age)} label="PartnerAge" name="partnerAge" options={age} />
                        </Box>
                        {/*Expected Partner Height */}
                        <Box
                            sx={{
                                gridColumn: { lg: 'span 6', sz: 'span 12' },
                            }}
                        >
                            <SelectInput defaultValue={getSeleledIndex(bioData?.partnerHeight, height)} label="partnerHeight" name="partnerHeight" options={height} />
                        </Box>
                        {/*Expected Partner Weight */}
                        <Box
                            sx={{
                                gridColumn: { lg: 'span 6', sz: 'span 12' },
                            }}
                        >
                            <TextInput value={bioData?.partnerWeight} label="partnerWeight" type='number' name="partnerWeight" />
                        </Box>
                    </Box>


                    {/* submit btn */}
                    <Box
                        sx={{
                            mt: 4,
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                        <Button sx={{ fontSize: '12px', fontWeight: 600 }} variant="contained" color="warning" size="large" type="submit">{bioDataLoading ? <ButtonLoader size={12} color='#fff' /> : 'Save And Publish Now'} </Button>
                    </Box>
                </Box>


            </Paper>
        </div>
    );
};

export default EditBioData;