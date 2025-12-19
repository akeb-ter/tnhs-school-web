import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, 'src/pages/index.html'));
});

app.get('/about-school', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, 'src/pages/aboutSchool.html'));
});

app.get('/about-vision-mission', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, 'src/pages/visionAndMission.html'));
});

app.get('/STE-program', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, 'src/pages/STEprogram.html'));
});

app.get('/SPA-program', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, 'src/pages/spaProgram.html'));
});

app.get('/regular-curriculum', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, 'src/pages/regularCurriculum.html'));
});

app.get('/system-updates', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, 'src/pages/systemUpdates.html'));
});

app.get('/Academic-track', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, 'src/pages/academicTrack.html'));
});

app.get('/TVL-track', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, 'src/pages/tvlTrack.html'));
});

app.get('/school-publication', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, 'src/pages/schoolPublication.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});