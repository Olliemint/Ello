import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import React from "react";

const SkeletonLoader: React.FC = () => {
  return (
    <div className="w-full md:max-w-[345px]">
      <Card sx={{ borderTop: "2px solid #5ACCCC" }}>
        <Skeleton variant="rectangular" height={140} />
        <CardContent>
          <Typography variant="h6" component="div">
            <Skeleton width="80%" />
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            <Skeleton width="60%" />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Skeleton width="40%" />
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button variant="contained" color="primary" startIcon={null} disabled>
            <Skeleton width="100px" />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default SkeletonLoader;
