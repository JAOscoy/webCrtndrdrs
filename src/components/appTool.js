import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const sections = [
  { title: 'Nosotros', url: '#' },
  { title: 'Compra corrugado', url: '#' },
  { title: 'Crea tu diseño', url: '#' },
  { title: 'Construye tu orden', url: '#'},

];

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: '#e4e6ebff',
  },
  toolbarTitle: {
    flex: 1,
    justifyContent: 'center',
    fontSize: '10px'
  },
  toolbarSecondary: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    justifyItems: 'center',
    backgroundColor: '#26302aff'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    fontSize: '10px',
    textAlign: 'center',
    color: 'white'
  },
}));

export default function () {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
      <a href='newUser'><Button variant="outlined" size="small">Registrate</Button></a>
        <Typography
          component="h2"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
        </Typography>
        <a href='login'><Button variant="outlined" size="small">
          Inicia Sesión
        </Button></a>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
