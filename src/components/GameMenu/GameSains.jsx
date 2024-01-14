import { Button, Typography } from "@material-tailwind/react";
import { Box, Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";

export default function GameSains() {
  return (
    <>
      <div className=" mx-auto gap-2 items-center">
        <Box sx={{ flexGrow: 1, alignItems: "center", justifyContent: "ceneter", justifyItems: "center" }}>
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid>
              <div className="items-center ">
                <Card sx={{ maxWidth: 250, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="buah" src="https://source.unsplash.com/random?hands" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Anatomi
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Anatomi
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-buah">
                      <Button color="blue" size="sm">
                        MAINKAN
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid>
              <div className="items-center ">
                <Card sx={{ maxWidth: 250, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="buah" src="https://source.unsplash.com/random?fruit" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Buah
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Buah
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-buah">
                      <Button color="blue" size="sm">
                        MAINKAN
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid>
              <div className="items-center ">
                <Card sx={{ maxWidth: 250, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="hewan" src="https://source.unsplash.com/random?animal" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Hewan
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Hewan
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-hewan">
                      <Button color="blue" size="sm">
                        MAINKAN
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid>
              <div className="items-center ">
                <Card sx={{ maxWidth: 250, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="profesi" src="https://source.unsplash.com/random?vegetable" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Sayur
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Sayuran
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-profesi">
                      <Button color="blue" size="sm">
                        MAINKAN
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid>
              <div className="items-center ">
                <Card sx={{ maxWidth: 250, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="bentuk" src="https://source.unsplash.com/random?star" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Astronomi
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Astronomi
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-bentuk">
                      <Button color="blue" size="sm">
                        MAINKAN
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
