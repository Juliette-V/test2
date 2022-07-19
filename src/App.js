import classes from './App.module.scss';
import { Button } from './components/Button/Button';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import autoImg from './resources/images/autoImg.png';
import arrow from './resources/images/ArrowRight.png';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1 className={classes.h1}>We are hiring!</h1>
      <h2 className={classes.h2}>The road is your second home? Join us!</h2>
      <div className={classes.mainContainer}>
        <div className={classes.left}>
          <p>We hire drivers from all across the United States, promoting quality opportunities for hardworking individuals of all backgrounds.</p>
          <p>We require our drivers to have a minimum of two years experience, knowing they have the skills and reputation to successfully take on any special requests we receive from our customers.</p>
          <Form/>
        </div>
        <div className={classes.right}><img src={autoImg} alt='DNM'></img>
      </div>
      </div>
      <div className={classes.apply}>
        <p>Or send all needed information directly to our HR department</p>
      <Button color='red' width='280px'>Apply now <img src={arrow}/></Button>
      </div>
    </div>
  );
}

export default App;
