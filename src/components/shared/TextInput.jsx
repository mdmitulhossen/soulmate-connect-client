import { TextField, Typography } from "@mui/material";
import PropTypes from 'prop-types';

const TextInput = ({label,name,disabled,type}) => {
    return (
        <div>
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
            <TextField type={type?type:'text'}  disabled={disabled} color="warning" fullWidth size="small" id="outlined-basic" label={label} variant="outlined" name={name} placeholder={name} />
        </div>
    );
};

TextInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
};

export default TextInput;