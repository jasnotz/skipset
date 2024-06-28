import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import logo_text from "./asset/logo.png";

import "./style/style.css"

function App() {
    const [startColor, setStartColor] = useState('black');
    const [endColor, setEndColor] = useState('black');

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartColor('black');
            setEndColor('#9E7BB5');
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ background: `linear-gradient(to bottom, ${startColor}, ${endColor})`, opacity: 0 }}
                animate={{ background: [`linear-gradient(to bottom, ${startColor}, ${endColor})`, `linear-gradient(to bottom, ${startColor}, ${endColor})`], opacity: 1 }}
                transition={{ duration: 2 }}
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', position: 'absolute', width: '100%' }}
            >
                <motion.img
                    src={logo_text}
                    whileHover={{ scale: 1.1 }}
                    style={{ cursor: 'pointer' }}
                />

                <br/>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    style={{ cursor: 'pointer', color: 'white', fontFamily: '"Montserrat", sans-serif' }}
                >
                    Your shortcut to Friendship, Coming Soon 🍭
                </motion.p>
            </motion.div>
        </AnimatePresence>
    );
}

export default App;