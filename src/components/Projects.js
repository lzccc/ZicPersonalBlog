import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Projects = () => {
  const handleButtonClick = () => {
    window.open("https://zic-test-project.web.app/", "_blank");
  };
  return (
    <section id="services" className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">My Projects</h3>
              <p className="text-uppercase small">
                A Lead UX &amp; UI designer based in Canada
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb project-box-1">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="flame graph"
                height="160"
                image="/static/img/FlameGraph.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Visualizing Execution Phases Using Flame Graph
                </Typography>
                <Typography variant="body2">
                  A{" "}
                  <a
                    href="https://escholarship.org/uc/item/96s3w67t"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    project
                  </a>{" "}
                  of UCI Spider lab that shows the execution phases of Java
                  program using Flame Graph. This project utilizes Java bytecode
                  manipulation tool ASM to instrument the Java project and uses
                  the result to construct Flame Graph.
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={handleButtonClick} size="small">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb project-box-1">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/static/img/contemplative-reptile.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb project-box-1">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/static/img/contemplative-reptile.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb project-box-1">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/static/img/contemplative-reptile.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb project-box-1">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/static/img/contemplative-reptile.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb project-box-1">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/static/img/contemplative-reptile.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          {/* / */}
        </div>
      </div>
    </section>
  );
};
export default Projects;
