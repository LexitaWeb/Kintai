import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class SimpleMap extends Component {
	static defaultProps = {
		center: {
			lat: 55.40021,
			lng: 21.28654
		},
		zoom: 13
	};

	render() {
		return (
			// Important! Always set the container height explicitly
			<div style={{ height: '400px', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyCMzl_25nrMr-_jdTDNe4d1VK38xP5gjxo' }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
				>
					<AnyReactComponent
						lat={59.955413}
						lng={30.337844}
						text={'Kreyser Avrora'}
					/>
				</GoogleMapReact>
			</div>
		);
	}
}

export default SimpleMap;