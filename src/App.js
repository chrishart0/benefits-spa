import * as React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

// -------- Images --------
// import logo from 'assets/logo.svg';

// -------- Components --------
import HeaderBar from 'components/HeaderBar';


// ------- Styles -------
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#2E77BB",
    },
    secondary: {
      main: "#6CC4EE",
    },
  },
});

const useStyles = makeStyles({
  headerText: {
    textAlign: "center"
  },

  appHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  },

  headerBar: {
    padding: "50px"
  },

  benefitCard: {
    maxWidth: "345",
    marginBottom: '30px'
  },
});
// ----- End Styles -----

function LinearDeterminate(props) {
  let percentValue = Math.round( (props.used / props.total) * 100 )

  //For an example of the bar auto-updating itself on a timer go: https://mui.com/components/progress/#main-content
  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%' }}>
          <LinearProgress variant="determinate" value={percentValue} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">
            {`${percentValue}%`}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2" color="text.secondary">
        {`${props.unit}${props.used} out of ${props.unit}${props.total}`}
      </Typography>
    </div>
    
  );
}

function BenefitCard(props) {
  const classes = useStyles();
  
  return (
    <Card className={classes.benefitCard}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <LinearDeterminate total={props.total} used={props.used} unit={props.unit} />
      </CardContent>
      <CardActions>
        <Button size="small">Visit Benefit Site</Button>
      </CardActions>
    </Card>
  )
}

function App() {
  const classes = useStyles();

  //Mapping data like this for such little data with such great variance of content was probably not a good idea... feel free to change how this is handled
  const benefitsDict = {
    monthly: [
      { name: 'Gift', total: 1, used: 0, unit: "" },
      { name: 'Phone bill', total: 70, used: 70, unit: "$" },
    ],
    yearly: [
      { name: 'Training', total: 3000, used: 395, unit: "$" },
      { name: 'Fitness', total: 500, used: 180, unit: "$" },
      { name: 'PTO Days', total: 10, used: 5, unit: "" },
    ],
    oneOff: [
      { name: 'Healthcare', total: 1, used: 1, unit: "" }
    ]
  }
  
  return (
    <ThemeProvider theme={theme}>
      <HeaderBar className={classes.headerBar}/>

      <Container >
        <Typography variant="h1" className={classes.headerText} gutterBottom>
          Benefits
        </Typography>

      <Grid container spacing={4} direction="row" >
        <Grid item md={3}>
          <Typography variant="h3" gutterBottom>
            Yearly
          </Typography>
          {benefitsDict.yearly.map(elem => (
            <Grid item key={benefitsDict.yearly.indexOf(elem)}>
              <BenefitCard name={`${elem.name}`} total={`${elem.total}`} used={`${elem.used}`} unit={`${elem.unit}`}/>
            </Grid>
          ))}
        </Grid>

        <Grid item md={3}>
          <Typography variant="h3" gutterBottom>
          Monthly
          </Typography>
          {benefitsDict.monthly.map(elem => (
            <Grid item key={benefitsDict.yearly.indexOf(elem)}>
              <BenefitCard name={`${elem.name}`} total={`${elem.total}`} used={`${elem.used}`} unit={`${elem.unit}`}/>
            </Grid>
          ))}
        </Grid>
        
        <Grid item md={3}>
          <Typography variant="h3" gutterBottom>
          One-Off
          </Typography>
          {benefitsDict.oneOff.map(elem => (
            <Grid item key={benefitsDict.yearly.indexOf(elem)}>
              <BenefitCard name={`${elem.name}`} total={`${elem.total}`} used={`${elem.used}`} unit={`${elem.unit}`}/>
            </Grid>
          ))}
        </Grid>
          
      </Grid>
    </Container>
      

    </ThemeProvider>
  );
}

export default App;
