import React, {useEffect} from 'react';
import '../styles/Lessons.css';

const LessonsComponent = () => {
    useEffect(() => {
        document.title = 'Lessons';
    }, []);
    return (
        <div className="lessons">
            <h1>Lessons-Classes</h1>
            <div className="lesson-card">
                <img src="/paulomi_3.jpg" alt="lessons" className="lessons-image" />
                <div>
                    <h3>NRITYA ODORI</h3>
                    <i>Nritya Odori: Uniting Cultures through Kathak Dance in Tokyo</i>
                    <p>New batches starting from August 19, '23.Contact us if you have any questions.</p>
                </div>
            </div>
        </div>
    );
};

export default LessonsComponent;
