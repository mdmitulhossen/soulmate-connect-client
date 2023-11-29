import Select from 'react-select';
import { selectStyles } from '../../utils/styles';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const SelectInput = ({label,name,options,defaultValue}) => {
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

            <Select
                styles={selectStyles}
                defaultValue={options[defaultValue?defaultValue:0]}
                isClearable={true}
                isSearchable={true}
                name={name}
                options={options}
            />
        </div>
    );
};

SelectInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.array,
};
export default SelectInput;