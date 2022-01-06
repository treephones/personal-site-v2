import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

const ProjectCard = ({ tech, name, description, links }) => {

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {tech}
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography className='projdesc' variant="body2">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                {
                    links.map(link => {
                        return <Button size="small" href={link.link} target='_blank' key={Date.now()+Math.random()*Math.random()}>{link.text}</Button>
                    })
                }
            </CardActions>
        </Card>
    );
}

export default ProjectCard;