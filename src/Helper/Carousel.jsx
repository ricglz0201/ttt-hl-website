import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Lightbox from 'react-image-lightbox';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import 'react-image-lightbox/style.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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

class Carousel extends React.Component {
  constructor() {
    super();

    this.state = {
      activeStep: 0,
      isOpen: false,
    };

    this.handleStepChange = this.handleStepChange.bind(this);
  }

  handleStepChange = (activeStep) => {
    this.setState({ activeStep });
  };

  handleClick = () => {
    this.setState({ isOpen: true });
  }

  render() {
    const { classes, theme, steps } = this.props;
    const { activeStep, isOpen } = this.state;

    const maxSteps = steps.length;

    return (
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          onClick={this.handleClick}
        >
          {steps.map(step => (
            <img key={step.id} className={classes.img} src={step.img} alt="" />
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
            mainSrc={steps[activeStep].img}
            nextSrc={steps[(activeStep + 1) % maxSteps].img}
            prevSrc={steps[(activeStep + maxSteps - 1) % maxSteps].img}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() => this.setState({
              activeStep: (activeStep + maxSteps - 1) % maxSteps,
            })
            }
            onMoveNextRequest={() => this.setState({
              activeStep: (activeStep + 1) % maxSteps,
            })
            }
          />
        )}
      </div>
    );
  }
}

Carousel.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  theme: PropTypes.instanceOf(Object).isRequired,
  steps: PropTypes.instanceOf(Array).isRequired,
};

export default withStyles(styles, { withTheme: true })(Carousel);
