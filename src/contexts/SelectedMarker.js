import React, { Component } from "react";

export const SelectedMarkerContext = React.createContext({
  marker: null,
  selectMarker: () => {
    console.log("default selectMarker");
  }
});

class SelectedMarkerProvider extends Component {
  state = {
    marker
  };

  selectMarker = marker => {
    console.log("selectMarker", marker);
    this.setState({ marker });
  };

  render() {
    return (
      <SelectedMarkerContext.Provider
        value={{
          ...this.state,
          selectMarker
        }}
      >
        {this.props.children}
      </SelectedMarkerContext.Provider>
    );
  }
}

export default SelectedMarkerProvider;
