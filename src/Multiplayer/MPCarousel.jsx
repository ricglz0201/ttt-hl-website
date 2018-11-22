import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import tutorialSteps from './MPTutorialSteps';
import styles from './MPStyle';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class MPCarousel extends React.Component {
  state = {
    activeStep: 0,
    isOpen: false,
  };

  handleStepChange = (activeStep) => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep, isOpen } = this.state;

    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          onClick={() => this.setState({ isOpen: true })}
        >
          {tutorialSteps.map(step => (
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
            mainSrc={tutorialSteps[activeStep].img}
            nextSrc={tutorialSteps[(activeStep + 1) % maxSteps].img}
            prevSrc={tutorialSteps[(activeStep + maxSteps - 1) % maxSteps].img}
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

MPCarousel.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  theme: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles, { withTheme: true })(MPCarousel);
