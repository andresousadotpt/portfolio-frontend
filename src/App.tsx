import { Button } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'
import { SocialIcon } from 'react-social-icons';
import CountdownTimer from './components/CountdownTimer';
import Logo from './components/Logo';

const App = () => {

    return (
        <div className="App">
            <div className="content">
                <Logo />
                <CountdownTimer text="days to the beginning of a new career!" />
                <Button href="mailto:andre.sousa@andresousa.pt?subject=André Sousa - Contact" variant="contained" color="secondary" startIcon={<MailIcon />}>
                    Get in touch
                </Button>
                <div className="social-links">
                    <SocialIcon url="https://www.linkedin.com/in/andr%C3%A9-sousa-324032208/" fgColor="white"/>
                    <SocialIcon url="https://github.com/andresousa23" bgColor="white" fgColor="black"/>
                </div>
            </div>
        </div>
    );
}

export default App;
