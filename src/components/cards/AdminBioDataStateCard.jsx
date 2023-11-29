import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';







const  AdminBioDataStateCard = ({ title, total, icon, color = 'primary', sx, ...other })=> {
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
      }}
    >
      {icon && <Box component='img' src={icon} sx={{ width: 64, height: 64 }}>

        </Box>}

      <Stack spacing={0.5}>
        <Typography variant="h4">{total}</Typography>

        <Typography variant="paragraph" sx={{ color: 'text.disabled',fontWeight:600 }}>
          {title}
        </Typography>
      </Stack>
    </Card>
  );
}

AdminBioDataStateCard.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
export default AdminBioDataStateCard;