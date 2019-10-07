import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    button: {
        color: '#3f73e8'
    }
})


function SelectionTab() {
    const classes = useStyles();
    return (
        <div>
            <Button className={classes.button}>Image</Button>
            <Button className={classes.button}>Preview Image</Button>
        </div>
    )
}


export default SelectionTab;