import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import FooterPage from "../LandingPage/FooterPage";
import { Box, Card, Grid } from "@mui/material";
import HomeNavbar from "../Navigation/HomeNavbar";
import { Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const images = [
  { url: "/images/bentuk/1.png", name: "1" },
  { url: "/images/bentuk/2.png", name: "2" },
  { url: "/images/bentuk/3.png", name: "3" },
  { url: "/images/bentuk/4.png", name: "4" },
  { url: "/images/bentuk/5.png", name: "5" },
  { url: "/images/bentuk/6.png", name: "6" },
  { url: "/images/bentuk/7.png", name: "7" },
  { url: "/images/bentuk/8.png", name: "8" },
  { url: "/images/bentuk/9.png", name: "9" },
  { url: "/images/bentuk/10.png", name: "10" },
  { url: "/images/bentuk/11.png", name: "11" },
  { url: "/images/bentuk/12.png", name: "12" },
  { url: "/images/bentuk/13.png", name: "13" },
  { url: "/images/bentuk/14.png", name: "14" },
  { url: "/images/bentuk/15.png", name: "15" },
  { url: "/images/bentuk/16.png", name: "16" },
  { url: "/images/bentuk/17.png", name: "17" },
  { url: "/images/bentuk/18.png", name: "18" },
  { url: "/images/bentuk/19.png", name: "19" },
  { url: "/images/bentuk/20.png", name: "20" },
  { url: "/images/bentuk/21.png", name: "21" },
  { url: "/images/bentuk/22.png", name: "22" },
  { url: "/images/bentuk/23.png", name: "23" },
  { url: "/images/bentuk/24.png", name: "24" },
  { url: "/images/bentuk/25.png", name: "25" },
];

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

const LevelButton = ({ level, unlocked, onClick }) => {
  return (
    <div className="flex ">
      <button
        disabled={!unlocked}
        onClick={onClick}
        style={{
          width: "50px",
          height: "50px",
          margin: "10px",
          fontSize: "20px",
          backgroundColor: unlocked ? "blue" : "yellow",
          borderRadius: 5,
        }}
      >
        <Typography variant="lead" color="green" className="m-1 font-semibold">
          {level}
        </Typography>
      </button>
    </div>
  );
};

const ImageQuestion = ({ options, image, answer, onAnswer }) => {
  return (
    <>
      <Card className="m-3 w-150">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h4" color="blue" className="m-2">
            PILIH BENTUK
          </Typography>
          <img src={image.url} alt={image.name} style={{ width: "100px", height: "100px" }} />
        </div>

        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: 3, border: "rounded" }}>
          {options.map((option, index) => (
            <div backgroundColor="blue">
              <Button
                className="bg-transparent"
                key={index}
                onClick={() => onAnswer(option)}
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundImage: `url(${option.url})`,
                  backgroundSize: "cover",
                  margin: 2,
                  border: 1,
                }}
              ></Button>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

const GimBangunDatar = () => {
  const [level, setLevel] = useState(1);
  const [unlockedLevels, setUnlockedLevels] = useState([1]);
  const [image, setImage] = useState(null);
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const selectLevel = (level) => {
    setLevel(level);
    setImage(null);
    setOptions([]);
    setAnswer(null);
  };

  const setupLevel = () => {
    const shuffledImages = shuffle(images);
    const image = shuffledImages[0];
    const options = shuffledImages.slice(0, 4);
    const shuffledOptions = shuffle(options);
    const answer = image.name;
    setImage(image);
    setOptions(shuffledOptions);
    setAnswer(answer);
  };

  const handleAnswer = (option) => {
    if (option.name === answer) {
      setScore((score) => score + 10);

      if (score === 90) {
        navigate("/score");
      }

      if (level < 10) {
        setUnlockedLevels((unlockedLevels) => [...unlockedLevels, level + 1]);
        Swal.fire({
          icon: "success",
          title: "Yeay Benar",
          text: "Klik Ok Untuk Lanjut",
        });
        setLevel((level) => level + 1);

        setImage(null);
        setOptions([]);
        setAnswer(null);

        if (score === 30) {
          Swal.fire({
            icon: "success",
            title: "Selamat, Benar berturut-turut yeayyy !!!",
            text: "Klik Ok Untuk Lanjut",
          });
        }
      } else {
        Swal.fire({
          icon: "info",
          title: "SELAMAT",
          text: "Kamu Berhasil Menjawab Semuanya",
          footer: '<a href="/dashboard">Kembali Ke Menu Permainan?</a>',
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Jawaban Kamu Salah",
      });
    }
  };

  useEffect(() => {
    setupLevel();
  }, [level]);

  return (
    <>
      <div className="items-center  flex align-center flex-col justify-center text-center bg-cover " style={{ backgroundImage: `url('https://source.unsplash.com/random?fruit')` }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <HomeNavbar />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", margin: 3 }}>{image && options && answer && <ImageQuestion image={image} options={options} answer={answer} onAnswer={handleAnswer} />}</div>
        <Card>
          <Box sx={{ flexGrow: 1, alignItems: "center", justifyContent: "ceneter", justifyItems: "center" }}>
            <Grid container>
              <Grid>
                <Box sx={{ m: 2, flexGrow: 1, alignItems: "center", justifyContent: "ceneter", justifyItems: "center" }}>
                  <Typography className="m-2" variant="h5" color="amber">
                    SKOR POIN: " {score} "
                  </Typography>
                </Box>
              </Grid>
              <Grid></Grid>
            </Grid>
          </Box>
        </Card>
        <Card style={{ display: "flex", flexWrap: "wrap", margin: 3 }}>
          {unlockedLevels.map((unlockedLevel) => (
            <LevelButton key={unlockedLevel} level={unlockedLevel} unlocked={true} onClick={() => selectLevel(unlockedLevel)} />
          ))}
          {Array.from({ length: 10 - unlockedLevels.length }, (_, i) => i + unlockedLevels.length + 1).map((lockedLevel) => (
            <LevelButton key={lockedLevel} level={lockedLevel} unlocked={false} onClick={() => {}} />
          ))}
        </Card>
      </div>
      <FooterPage />
    </>
  );
};

export default GimBangunDatar;
