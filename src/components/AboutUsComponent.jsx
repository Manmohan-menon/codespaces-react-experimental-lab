import React, {useEffect} from 'react';
import '../styles/AboutUsComponent.css';
//import kathakImage from './public/paulomi_5.jpg';

const AboutUsComponent = () => {
    useEffect(() => {
        document.title = 'About Us';
    }, []);
    return (
        <div className="about-us">
            <h1>About Us</h1>
            <img src="/paulomi_5.jpg" alt="About Us" className="about-us-image" />
            <h3>NRITYA ODORI</h3>
            <i>Nritya Odori: Uniting Cultures through Kathak Dance in Tokyo</i>
            <p>
                Nritya Odori is a renowned Kathak dance school situated in Tokyo, Japan. Established with the aim of promoting and preserving the rich cultural heritage of India. Nritya Odori has become a hub for dance enthusiasts, both Japanese and international, seeking to learn and immerse themselves in the captivating art form of Kathak.
                Kathak, a classical dance style originating from North India, combines intricate footwork, rhythmic movements, graceful gestures, and expressive storytelling. It is characterized by its dynamic spins, swift footwork patterns, and subtle facial expressions, all of which come together to create a mesmerizing performance.
                Under the guidance of the school's founder Ms. Paulomi Barman, a highly accomplished Kathak dancer and teacher, Nritya Odori offers a comprehensive curriculum designed to cater to students of all levels, from beginners to advanced practitioners. The school fosters a nurturing and inclusive environment, encouraging students to explore their creativity, develop their technique, and deepen their understanding of Indian culture.
                Nritya Odori goes beyond teaching dance steps and techniques. It endeavors to provide a holistic learning experience by integrating the cultural, historical, and philosophical aspects of Kathak into its curriculum. Students not only gain proficiency in the dance form but also develop a deeper appreciation for the art's cultural significance and its ability to transcend borders.
                The school regularly organizes performances, workshops, and cultural events, allowing students to showcase their talent and immerse themselves in the vibrant world of Kathak. Nritya Odori has also collaborated with renowned Kathak dancers and musicians from India, hosting masterclasses and special workshops to further enrich the learning experience for its students.
                Nritya Odori's students have participated in prestigious dance festivals, and cultural exchanges, promoting cross-cultural understanding and appreciation between Japan and India.Whether one seeks to embark on a personal dance journey, experience the joy of Kathak, or delve into the cultural heritage of India, Nritya Odori stands as an invaluable institution, offering an enriching and transformative experience for all those passionate about dance and cultural exploration.
            </p>
        </div>
    );
};

export default AboutUsComponent;
