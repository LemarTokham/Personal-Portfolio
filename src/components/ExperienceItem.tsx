import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export interface ExperienceItemProps {
    company: string
    role: string
    description: string
}

function ExperienceItem({company, role, description} : ExperienceItemProps){

    return (
        <>
        <Box sx={{mb:2}}>
        <Card variant="outlined">
            <CardContent>
                <Typography sx={{ fontWeight: 'bold'}}>{company}</Typography>
                <Typography color='text.secondary'>{role}</Typography>
                <Typography variant='body2'>{description}</Typography>
            </CardContent>
            <CardActions></CardActions>
        </Card>
        </Box>
        </>
    )
}

export default ExperienceItem