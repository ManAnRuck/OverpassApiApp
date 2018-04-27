import React, { Component } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import map from "lodash/map";

import { SelectedMarkerContext } from "../../contexts/SelectedMarker";

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Tag = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const Label = styled.Text`
  font-weight: bold;
  padding-right: 3;
`;

const Value = styled.Text``;

class MarkerDetails extends Component {
  state = {
    width: Dimensions.get("window").width - 2 * 11
  };
  render() {
    const { tags } = this.props;
    const { width } = this.state;
    return (
      <Wrapper style={{ width }}>
        <SelectedMarkerContext.Consumer>
          {({ marker }) => {
            {
              console.log({ marker });
            }
            map(tags, (value, key) => {
              return (
                <Tag key={key}>
                  <Label>{key}:</Label>
                  <Value>{value}</Value>
                </Tag>
              );
            });
          }}
        </SelectedMarkerContext.Consumer>
      </Wrapper>
    );
  }
}

export default MarkerDetails;
