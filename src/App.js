import React, { Component } from "react";
import { View, Panel, PanelHeader, Group, Cell } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Sleder from "./Components/Sleder";
import './app.css';

export default class App extends Component {
  render() {
    return (
      <View>
        <Panel>
          <PanelHeader>VKUI</PanelHeader>
          <Group>
            <Cell>
              <Sleder />
							<h1 class="main_h1">Каталог</h1>
							
            </Cell>
          </Group>
        </Panel>
      </View>
    );
  }
}
