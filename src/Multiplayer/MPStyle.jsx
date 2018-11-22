const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    dimlay: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    marginBottom: 20,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
});

export default styles;
