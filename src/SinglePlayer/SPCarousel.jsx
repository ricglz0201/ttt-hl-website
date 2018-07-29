import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import sp1 from '../images/sp1.png';
import sp2 from '../images/sp2.png';
import sp3 from '../images/sp3.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [ {
    img: sp1,
    id: 0,
  },
  {
    img: sp2,
    id: 1,
  },
  {
    img: sp3,
    id: 2,
  },
];

const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
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

class SPCarousel extends React.Component {
  state = {
    activeStep: 0,
    isOpen: false,
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
    console.log(activeStep);
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep, isOpen } = this.state;

    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          onClick={() => this.setState({ isOpen: true })}
        >
          {tutorialSteps.map(step => (
            <img key={step.id} className={classes.img} src={step.img} alt=''/>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
        />
        {isOpen && (
          <Lightbox
            mainSrc={tutorialSteps[activeStep].img}
            nextSrc={tutorialSteps[(activeStep + 1) % maxSteps].img}
            prevSrc={tutorialSteps[(activeStep + maxSteps- 1) % maxSteps].img}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                activeStep: (activeStep + maxSteps - 1) % maxSteps,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                activeStep: (activeStep + 1) % maxSteps,
              })
            }
          />
        )}
      </div>
    );
  }
}

SPCarousel.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SPCarousel);
