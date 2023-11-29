import { TextField, Typography } from "@mui/material";
import PropTypes from 'prop-types';

const TextInput = ({ label, name, type, value, readOnly }) => {
    return (
        <div 
        style={{width:'100%'}}
        >
            <Typography
                component='p'
                variant='paragraph'
                sx={{
                    fontSize: '12px',
                    fontWeight: 600,
                    mb: 1,
                }}
            >
                {label}
            </Typography>
            <input
                readOnly={readOnly}
                type={type ? type : 'text'}
                defaultValue={value ? value : ''}
                name={name}
                placeholder={name}
                style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    boxSizing: 'border-box',

                }}

            />

            {/* <TextField type={type ? type : 'text'} defaultValue={value ? value : ''} color="warning" fullWidth size="small" id="outlined-basic" label={label} variant="outlined" name={name} placeholder={name} /> */}
        </div>
    );
};

TextInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
};

export default TextInput;