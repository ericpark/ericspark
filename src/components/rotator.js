import React, { Component } from "react";
import Slider from "./slider";
//import Link from "gatsby-link"

class Rotator extends Component {
  state = {
    shouldAnimate: true,
    item: 0,
    size: {}
  };
  sliderContainer = React.createRef();
  intervalId = null;

  _clearInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  decrementItem = () => {
    this._clearInterval();
    this.setState({
      item:
        (this.state.item + this.props.items.length - 1) %
        this.props.items.length
    });
  };

  incrementItemAndClearInterval = () => {
    this._clearInterval();
    this.incrementItem();
  };

  incrementItem = () => {
    this.setState(state => {
      return {
        item: (state.item + 1) % this.props.items.length
      };
    });
  };

  componentDidMount() {
    const shouldAnimate = this.shouldAnimate();
    if (shouldAnimate) {
      requestAnimationFrame(() => {
        this.intervalId = setInterval(this.incrementItem, 5000);
        this.setState({ shouldAnimate, size: this.getDimensions() });
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.shouldAnimate && prevState.item !== this.state.item) {
      requestAnimationFrame(() => {
        this.setState({ size: this.getDimensions() });
      });
    }
  }

  getDimensions() {
    if (this.sliderContainer.current === null) {
      return {
        width: `auto`,
        height: `auto`
      };
    }

    return this.sliderContainer.current.getBoundingClientRect();
  }

  shouldAnimate() {
    const mediaQuery = window.matchMedia(`(prefers-reduced-motion)`);
    return !mediaQuery || !mediaQuery.matches;
  }

  render() {
    const { shouldAnimate } = this.state;
    // removed workName for now
    const { text } = this.props.items[this.state.item];
    const enableSlider = shouldAnimate && this.intervalId;
    return (
      <div
        style={{
          padding: "0rem 0 5rem",
          margin: "0rem 0 4rem",
          position: "center"
        }}
      >
        <div
          aria-live={this.intervalId ? `off` : `polite`}
          aria-atomic="true"
          aria-relevant="all"
        >
          <p
            style={{
              fontSize: "2.25rem",
              fontFamily: `"Futura PT", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
              textAlign: `center`,
              marginBottom: 0
            }}
          >
            {/*<span><Link to={`/packages/` + pluginName}>a plugin</Link>&nbsp;</span>*/}
            <span
              style={{
                display: `inline-block`,
                transition: shouldAnimate ? `width 150ms easeIn` : `none`,
                width: this.state.size.width || `auto`
              }}
            >
              <span
                style={{
                  fontWeight: 600,
                  whiteSpace: `nowrap`,
                  display: `inline-block`
                }}
                id="headline-slider"
                ref={this.sliderContainer}
              >
                {!enableSlider ? <>{text}</> : <Slider items={[text]} />}
              </span>
            </span>
          </p>
          {/** Can remove comment if it links somewhere later on 
        *<p
            style={{
              color: 'black',
              margin: 0,
              fontSize: `1.25rem`,
              textAlign: `center`,
            }}
          >
            <Link to={`/experience/` + workName}>#HowIGotHere</Link>
          </p>*/}
        </div>
      </div>
    );
  }
}

export default Rotator;
