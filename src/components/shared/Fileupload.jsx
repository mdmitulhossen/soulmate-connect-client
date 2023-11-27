import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const Fileupload = () => {
    return (
        <div 
           style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                border: '1px dashed #000',
                borderRadius: '5px',
                cursor: 'pointer',
           }}
        >
            <label>
                <input
                    // className='text-sm cursor-pointer w-36 hidden'
                    type='file'
                    name='image'
                    id='image'
                    accept='image/*'

                />
            </label>
        </div>
    );
};

export default Fileupload;