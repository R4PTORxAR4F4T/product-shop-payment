import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './Banner.css';

const Banner = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    const bannerStyles = {
        '--slider-height-percentage': '45%',
        '--organic-arrow-thickness': '4px',
        '--organic-arrow-border-radius': '0px',
        '--organic-arrow-height': '40px',
        '--organic-arrow-color': '#d6b18f',
        '--control-button-width': '10%',
        '--control-button-height': '25%',
        '--control-button-background': 'transparent',
        '--control-bullet-color': '#fcd0a8',
        '--control-bullet-active-color': '#d6b18f',
        '--loader-bar-color': 'transparent',
        '--loader-bar-height': '0px',
        '--timer-height': '0px',
    };

    const textcontent = {
        '--background-color': 'your-color-value', // Replace 'your-color-value' with a valid color value
        'overflow': 'hidden', // Wrap property names in quotes
        'display': 'flex', // Wrap property names in quotes
        'alignItems': 'center', // Wrap property names in quotes
        'justifyContent': 'left', // Remove the comment syntax
    };
    

    const textStyle = {
        transform: 'translate3d(0, 0, 0)',
        opacity: 1,
        transition: 'transform 0.45s cubic-bezier(0.15, 0.3, 0.15, 1), opacity 0.35s ease-out',
        textAlign: 'left', // Add text-align: left;
    };

    const slideContainerStyle = {
        display: 'flex', // Make the div a flex container
        alignItems: 'center', // Align items vertically (centered)
    };

    return (
        <div className="aws-btn z-0 mb-16">
            <AutoplaySlider
                play={true}
                interval={6000}
                style={bannerStyles}
            >
                <div data-src="./1694045252838.webp" style={{ ...slideContainerStyle, ...textcontent }}>
                    <p style={{...textStyle, padding:'60px'}} className='text-white'>
                        <span className='text-3xl lg:text-7xl'>Get 30% off</span> <br />
                        <span className='text-xl lg:text-5xl'>up to</span> <br />
                        <span className='text-3xl lg:text-7xl'>online shopping</span> 
                    </p>
                </div>
                <div data-src="/pexels-math-90946.jpg" style={{ ...slideContainerStyle, ...textcontent }}>
                    <p style={{...textStyle, padding:'60px'}} className='text-2xl text-white'>
                        <span className='text-3xl lg:text-7xl'>Get 30% off</span> <br />
                        <span className='text-xl lg:text-5xl'>up to</span> <br />
                        <span className='text-3xl lg:text-7xl'>online shopping</span> 
                    </p>
                </div>
                <div data-src="/photo-1505740420928-5e560c06d30e.jpg" style={{ ...slideContainerStyle, ...textcontent }}>
                    <p style={{...textStyle, padding:'60px'}} className='text-2xl text-white'>
                        <span className='text-3xl lg:text-7xl'>Get 30% off</span> <br />
                        <span className='text-xl lg:text-5xl'>up to</span> <br />
                        <span className='text-3xl lg:text-7xl'>online shopping</span> 
                    </p>
                </div>
                <div data-src="/photo-1523275335684-37898b6baf30.jpg" style={{ ...slideContainerStyle, ...textcontent }}>
                    <p style={{...textStyle, padding:'60px'}} className='text-2xl text-white'>
                        <span className='text-3xl lg:text-7xl'>Get 30% off</span> <br />
                        <span className='text-xl lg:text-5xl'>up to</span> <br />
                        <span className='text-3xl lg:text-7xl'>online shopping</span> 
                    </p>
                </div>
                <div data-src="/photo-1608204683146-0f7e909dca59.jpg" style={{ ...slideContainerStyle, ...textcontent }}>
                    <p style={{...textStyle, padding:'60px'}} className='text-2xl text-white'>
                        <span className='text-3xl lg:text-7xl'>Get 30% off</span> <br />
                        <span className='text-xl lg:text-5xl'>up to</span> <br />
                        <span className='text-3xl lg:text-7xl'>online shopping</span> 
                    </p>
                </div>
            </AutoplaySlider>
        </div>
    );
};

export default Banner;
