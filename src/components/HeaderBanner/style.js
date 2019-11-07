import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  titles: {
    padding: '0 10px',
  },
  title: {
    margin: '15px 0 5px',
  },
  tagline: {
    margin: '5px 0',
  },
}));

export default useStyles;
