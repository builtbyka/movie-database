import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  detailRoot: {
    flexGrow: 1,
    padding: 10,
  },
  featuredImg: {
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right',
    boxShadow: '50px -75px 100px black inset, 75px 0px 75px black inset',
    minHeight: 150,
    display: 'block',
  },
  featuredHeader: {
    textAlign: 'right',
    padding: 10,
  },
  featuredTitle: {
    fontSize: 14,
  },
  featuredSubtitle: {
    fontSize: 11,
  },
  summaryImg: {
    width: '100% !important',
    maxWidth: 300,
  },
  summaryTitle: {
    margin: '5px 0',
    fontSize: '20px',
  },
  summarySubtitle: {
    fontSize: '16px',
  },
  listRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: '100% !important',
  },
  listGridList: {
    flexWrap: 'nowrap !important',
    transform: 'translateZ(0)',
  },
  listTitleBar: {
    background: 'rgba(0,0,0,0.9)',
    top: '60% !important',
    height: '40% !important',
    display: 'block !important',
  },
  listTitle: {
    fontSize: '13 !important',
    fontWeight: 'bold ',
    whiteSpace: 'normal',
    lineHeight: '16px !important',
    height: '52px',
    display: 'block !important',
  },
  listTile: {
    transition: 'opacity 0.3s',
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.6,
    },
  },
  listTitleWrap: {
    margin: 8,
  },
  listImg: {
    top: '0  !important',
    transform: 'translate(-50%, 0) !important',
    left: '50% !important',
  },
  listLink: {
    display: 'block',
  },
  listRating: {
    color: 'yellow',
  },
}));

export default useStyles;
