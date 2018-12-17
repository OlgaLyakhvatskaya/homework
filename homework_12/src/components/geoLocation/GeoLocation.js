
class GeoLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationLatitude: '',
      locationLongitude: ''
    };
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => this.setState({
        locationLatitude: position.coords.latitude,
        locationLongitude: position.coords.longitude
      }));
    }
  }

  render() {
    const { locationLatitude, locationLongitude } = this.state;
    return (
      <>
        <button type="button" onClick={this.getLocation}>Get</button>
        <p><strong>Latitude: </strong>{locationLatitude}</p>
        <p><strong>Longitude: </strong>{locationLongitude}</p>
      </>
    );
  }
}

export default GeoLocation;
