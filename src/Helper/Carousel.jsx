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

function Carousel({ classes, theme, steps }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleStepChange = React.useCallback((newStep) => {
    setActiveStep(newStep);
  }, []);

  const onTrigger = React.useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  const maxSteps = steps.length;

  const onMovePrevRequest = React.useCallback(() => {
    setActiveStep(prevStep => (prevStep + maxSteps - 1) % maxSteps);
  }, [maxSteps]);
  const onMoveNextRequest = React.useCallback(() => {
    setActiveStep(prevStep => (prevStep + 1) % maxSteps);
  }, [maxSteps]);

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        onClick={onTrigger}
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
          onCloseRequest={onTrigger}
          onMovePrevRequest={onMovePrevRequest}
          onMoveNextRequest={onMoveNextRequest}
        />
      )}
    </div>
  );
}

Carousel.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  theme: PropTypes.instanceOf(Object).isRequired,
  steps: PropTypes.instanceOf(Array).isRequired,
};

export default withStyles(styles, { withTheme: true })(Carousel);
