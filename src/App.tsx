import { motion } from 'framer-motion';
import "./style/style.css"

function App() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
        >
            <motion.img
                src="./src/asset/logo.png"
                whileHover={{ scale: 1.1 }}
                style={{ cursor: 'pointer' }}
            />
            <motion.p style={{ cursor: 'pointer' }}>
                Your shortcut to Friendship
            </motion.p>
        </motion.div>
    );
}

export default App;