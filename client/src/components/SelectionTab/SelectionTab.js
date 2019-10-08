import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    button: {
        color: '#3f73e8',
        border: '0.5px solid #e9eaec',
        marginRight: '1%',
        '&:hover': {
            backgroundColor: '#e4ecfa',
        },
    },
    ordering_tabs: {
        display: 'flex',
        justifyContent: 'space-between'
    }
})


function SelectionTab() {
    const classes = useStyles();
    return (
        <div>
            <div>
                <Button className={classes.button}>Image</Button>
                <Button className={classes.button}>Preview Image</Button>
            </div>
            <div>

            </div>
        </div>

    )
}


export default SelectionTab;