import "./style.scss";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Advertisiment() {
  return (
    <section className="advertisiment">
      <div className="ads">Advertisement</div>
      <section className="tags">
        <h4>FIND YOUR NEXT BOOK</h4>
        <div className="tag">
          <Button>Book</Button>
          <Button>Book</Button>
          <Button>Book</Button>
          <Button>Book</Button>
          <Button>Book</Button>
          <Button>Book</Button>
          <Button>Book</Button>
          <Button>Book</Button>
          <Button>Book</Button>
          <Button>Book</Button>
          <Button>Book</Button>
          <Button>Book</Button>
          <Button>Book</Button>
          <Button>Book</Button>
          <Button>Book</Button>
          <Button>Book</Button>
          <Button>Book</Button>
          <Button>Book</Button>
          <Button>Book</Button>
        </div>
      </section>

      <section className="recents">
        <h4>RECENTLY RECOMMENDED</h4>
        <div className="cardcontainer">
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="50"
                image="https://source.unsplash.com/random/"
                alt="green iguana"
              />
              <CardContent>
              <p>BY User</p>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="50"
                image="https://source.unsplash.com/random/"
                alt="green iguana"
              />
              <CardContent>
              <p>BY User</p>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="50"
                image="https://source.unsplash.com/random/"
                alt="green iguana"
              />
              <CardContent>
              <p>BY User</p>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="50"
                image="https://source.unsplash.com/random/"
                alt="green iguana"
              />
              <CardContent>
              <p>BY User</p>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="50"
                image="https://source.unsplash.com/random/"
                alt="green iguana"
              />
              <CardContent>
              <p>BY User</p>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </section>
    </section>
  );
}

export default Advertisiment;
