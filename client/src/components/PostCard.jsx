import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

const PostCard = ({ post }) => (
  <Card sx={{ marginBottom: 2 }}>
    <CardContent>
      <Typography variant="h5">{post.title}</Typography>
      <Typography variant="body2" color="text.secondary">
        {post.summary}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Read More</Button>
    </CardActions>
  </Card>
);

export default PostCard;
