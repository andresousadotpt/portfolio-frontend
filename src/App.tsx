import { Button } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'
import { SocialIcon } from 'react-social-icons';
import Logo from './components/Logo';

const App = () => {

    return (
        <div className="App">
            <div className="content">
                <Logo />
                <h1>Coming Soon...</h1>
                <Button href="mailto:support@andresousa.pt?subject=André Sousa - Contact" variant="contained" color="secondary" startIcon={<MailIcon />}>
                    Get in touch
                </Button>
                <div className="social-links">
                    <SocialIcon url="https://www.linkedin.com/in/andresousadotpt" fgColor="white"/>
                    <SocialIcon url="https://github.com/andresousadotpt" bgColor="white" fgColor="black"/>
                </div>
            </div>
        </div>
    );
}

export default App;
