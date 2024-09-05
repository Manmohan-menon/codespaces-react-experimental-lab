import React, { useEffect } from 'react';
import Grid2 from '@mui/material/Grid2';
import '../styles/AboutUs.css';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const AboutUsComponent = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    useEffect(() => {
        document.title = 'About Us';
    }, []);

    return (
        <Grid2 container spacing={3} className="about-us" justifyContent="center" alignItems="center">
            <Grid2 item xs={12} className="about-us-header">
                <h1>NRITYA ODORI</h1>
            </Grid2>
            <Grid2 container spacing={2} alignItems="center" justifyContent="center" direction={isMobile ? "column" : "row"}>
                <Grid2 item xs={12} md={6} className="about-us-image-container">
                    <img src="/paulomi_5.jpg" alt="About Us" className="about-us-image" />
                </Grid2>
                <Grid2 item xs={12} md={6} className="about-us-text-container">         
                    <p>
                    <i>Nritya Odori: Uniting Cultures through Kathak Dance in Tokyo</i>
                        Nritya Odori is a renowned Kathak dance school situated in Tokyo, Japan. Established with the aim of promoting and preserving the rich cultural heritage of India. Nritya Odori has become a hub for dance enthusiasts, both Japanese and international, seeking to learn and immerse themselves in the captivating art form of Kathak.
                        Kathak, a classical dance style originating from North India, combines intricate footwork, rhythmic movements, graceful gestures, and expressive storytelling. It is characterized by its dynamic spins, swift footwork patterns, and subtle facial expressions, all of which come together to create a mesmerizing performance.
                        Under the guidance of the school's founder Ms. Paulomi Barman, a highly accomplished Kathak dancer and teacher, Nritya Odori offers a comprehensive curriculum designed to cater to students of all levels, from beginners to advanced practitioners. The school fosters a nurturing and inclusive environment, encouraging students to explore their creativity, develop their technique, and deepen their understanding of Indian culture.
                        Nritya Odori goes beyond teaching dance steps and techniques. It endeavors to provide a holistic learning experience by integrating the cultural, historical, and philosophical aspects of Kathak into its curriculum. Students not only gain proficiency in the dance form but also develop a deeper appreciation for the art's cultural significance and its ability to transcend borders.
                        The school regularly organizes performances, workshops, and cultural events, allowing students to showcase their talent and immerse themselves in the vibrant world of Kathak. Nritya Odori has also collaborated with renowned Kathak dancers and musicians from India, hosting masterclasses and special workshops to further enrich the learning experience for its students.
                        Nritya Odori's students have participated in prestigious dance festivals, and cultural exchanges, promoting cross-cultural understanding and appreciation between Japan and India.Whether one seeks to embark on a personal dance journey, experience the joy of Kathak, or delve into the cultural heritage of India, Nritya Odori stands as an invaluable institution, offering an enriching and transformative experience for all those passionate about dance and cultural exploration.
                    </p>
                </Grid2>
            </Grid2>
        </Grid2>
    );
};

export default AboutUsComponent;