function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const { Component } = React;
const drumKit = [
{
  name: 'Heater-1',
  key: 'Q',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

{
  name: 'Heater-2',
  key: 'W',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  name: 'Heater-3',
  key: 'E',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  name: 'Heater-4',
  key: 'A',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  name: 'Clap',
  key: 'S',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  name: 'Open-HH',
  key: 'D',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },


{
  name: "Kick-'n-Hat",
  key: 'Z',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

{
  name: 'Kick',
  key: 'X',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

{
  name: 'Closed-HH',
  key: 'C',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];




class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClick",










    e => {
      this.setState({
        soundName: e.target.id });




      const id = e.target.innerText.trim();
      const audio = this.refs[id];
      audio.play();
    });_defineProperty(this, "handleKeyPress",
    e => {
      if (e.key) {
        const name = this.props.drumKit.find(el => el.key == e.key.toUpperCase()).name;
        this.setState({
          soundName: name });




        const audio = document.getElementById(e.key.toUpperCase());
        audio ? audio.play() : '';

      }
    });_defineProperty(this, "handleChange",
    e => {
      const volume = e.target.value / 100;
      document.querySelectorAll('audio').forEach(el => el.volume = volume);



    });this.state = { soundName: '' };this.handleKeyPress = this.handleKeyPress.bind(this);this.handleClick = this.handleClick.bind(this);this.handleChange = this.handleChange.bind(this);}


  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);

  }
  componentWillUnmount() {
    document.removeEvenntListener('keydown', this.handleKeyPress);
    this.setState({ padStyle: inactiveStyle });

  }
  render() {

    let drumPad = this.props.drumKit.map((item) =>
    React.createElement("div", { className: "drum-pad", onClick: this.handleClick, id: item.name },
    item.key,
    React.createElement("audio", { className: "clip", ref: item.key, id: item.key, src: item.src })));


    return React.createElement("div", { id: "drum-machine" },
    React.createElement("h1", null, "Drum Machine "),
    React.createElement("div", { id: "container" },
    React.createElement("div", { id: "content" },
    drumPad),

    React.createElement("div", { id: "display" },
    this.state.soundName,
    React.createElement("div", { className: "volume" },
    React.createElement("label", { for: "volume-range" }, "Volume"),
    React.createElement("input", { id: "volume-range", type: "range", min: "0", max: "100", class: "volume",
      onChange: this.handleChange })))));







  }}


ReactDOM.render(
React.createElement(App, { drumKit: drumKit }),
document.getElementById('root'));