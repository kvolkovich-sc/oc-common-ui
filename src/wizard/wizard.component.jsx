import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

import { Icon } from '../icons/index';

import './wizard.component.scss';


export default class Wizard extends React.Component {
  constructor() {
    super();

    this.scrollStep = 50;

    this.state = {
      currentStep: 0,
    };
  }

  getIndicators = () => (
    this.props.steps.map((step, i) => {
      if (i === this.state.currentStep) {
        return <span key={step.id} className="tab-indicator tab-highlight" />;
      }
      return <span key={step.id} className="tab-indicator" />;
    })
  )

  scrollLeft = () => {
    this.scrollbar.scrollLeft -= this.scrollStep;
  }

  scrollRight = () => {
    this.scrollbar.scrollLeft += this.scrollStep;
  }

  selectPage = (event, index) => {
    event.preventDefault();
    if (index < 0 || index > this.props.steps.length - 1) return;
    this.setState({
      currentStep: index,
    });
  }

  render() {
    return (
      <div id="wizard-pages">
        <div id="wizard-header">
          <button className="hidden-button" onClick={this.scrollLeft}>
            <Icon type="indicator" name="CaretLeft" height={30} width={30} />
          </button>
          <ul ref={(node) => { this.scrollbar = node; }}>
            {this.props.steps.map((step, i) => (
              <li
                key={step.id}
                className={i === this.state.currentStep ? 'doing' : ''}
              >
                <a
                  id={step.id}
                  href="#/"
                  onClick={(event) => { this.selectPage(event, i); }}
                >
                  {step.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="hidden-button" onClick={this.scrollRight}>
            <Icon type="indicator" name="CaretRight" height={30} width={30} />
          </button>
        </div>
        <div id="wizard-content">
          {this.props.steps[this.state.currentStep].component}
        </div>
        <div id="wizard-footer">
          <div id="bottom-indicators">
            {this.getIndicators()}
          </div>
          <div id="bottom-buttons">
            <Button
              id="previous-step"
              onClick={(event) => {
                this.selectPage(event, this.state.currentStep - 1);
              }}
            >
              <Icon type="indicator" name="CaretLeft" height={30} width={30} />
            </Button>
            <Button id="save-button" onClick={this.props.save}>
              {this.props.localizationTexts.save}
            </Button>
            <Button id="cancel-button" onClick={this.props.cancel}>
              {this.props.localizationTexts.cancel}
            </Button>
            <Button
              id="next-step"
              onClick={(event) => {
                this.selectPage(event, this.state.currentStep + 1);
              }}
            >
              <Icon type="indicator" name="CaretRight" height={30} width={30} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Wizard.propTypes = {
  save: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  steps: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
  })).isRequired,
  localizationTexts: PropTypes.shape({
    save: PropTypes.string,
    cancel: PropTypes.cancel,
  }).isRequired,
};