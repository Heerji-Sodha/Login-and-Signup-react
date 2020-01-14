import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

//   const inputLabel = React.useRef(null);
//   const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
  }, []);
  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,

    });
props.onChange(event)
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel  htmlFor="age-native-helper">{props.dropName}</InputLabel>
        <NativeSelect
          value={state.group}
          onChange={handleChange('group')}
          inputProps={{
            name: 'group',
            id: 'age-native-helper',
          }}
        >
          {/* <option value="Select Your Group" /> */}

          {/* <option value={props.value} >A+</option> */}
          {/* <option value={props.value} >B+</option>
          <option value={props.value} >AB+</option>
          <option value={props.value}>A-</option>
          <option value={props.value}>B-</option>
          <option value={props.value} > AB-</option> */}
          {
            props.array.map((val,i)=>{
              return   <option  key={i} value={val.name} >{val.name}</option>
              

            })
          }

          
        </NativeSelect>
      </FormControl>
    </div>
  );
}