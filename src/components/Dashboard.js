import React from 'react';

import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, CardActions, Switch, Slider, Grid, FormControlLabel, InputLabel, MenuItem, FormHelperText, Select, FormControl } from '@material-ui/core'
import { VolumeUp, VolumeDown } from '@material-ui/icons'

import '../App.css'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

let label1 = 'Music';

function Dashboard(props) {
    const classes = useStyles();
    const [notification, setNotification] = React.useState('');
    const [genre, setGenre] = React.useState('');
    const [value, setValue] = React.useState(30);
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });
    React.useEffect(() => {
        if (genre === 20) {setNotification('Hell Yeah!')}
        if (genre === 10) {setNotification('Go Harder!')}
        if (genre === 30) {setNotification('🤘')}
    }, [genre]);
    React.useEffect(() => {
        setNotification('Crank it!');
        if (value > 90) {
            setNotification('Death to All but Metal!')
        }
        console.log(value)
    }, [value]);
    React.useEffect(() => {
        if(state.checkedA === true) {setNotification('The good stuff.')}
        else {setNotification('Get the good stuff.')}
    }, [state]);

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        // console.log(state.CheckedA)
        // state.CheckedA ? label1 = 'Music' : label1 = 'Good Music'
    };
    const handleVolume = (event, newValue) => {
        setValue(newValue);
    };
    const handleGenre = (event) => {
        setGenre(event.target.value);
    };

    return (
        <div>
            <h2>{notification}</h2>
        <div className='dash'>
            <Card className='card'>
                <CardContent>
                    Welcome to Music Play App! Do you want good music or whatever?
                </CardContent>
                <CardActions>
                <FormControlLabel
                    control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                    label={label1}
                />
                </CardActions>
            </Card>
            <Card className='card'>
                <CardContent>
                    How hard do you want to rock out?
                </CardContent>
                <CardActions>
                <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider value={value} onChange={handleVolume} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
                </CardActions>
            </Card>
            <Card className='card'>
                <CardContent>
                    What kind of music are you in the mood for at this time?
                </CardContent>
                <CardActions>
                <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Select:
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={genre}
          onChange={handleGenre}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Metal</MenuItem>
          <MenuItem value={20}>Heavy Metal</MenuItem>
          <MenuItem value={30}>Deadline-is-approaching Metal</MenuItem>
        </Select>
        <FormHelperText>Select Genre</FormHelperText>
      </FormControl>
                </CardActions>
            </Card>
        </div>
        </div>
    )
    
}


export default Dashboard