
import React, { Component } from 'react';
import { Platform, View, StatusBar } from 'react-native';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';

import configureStore from "./src/store";
import ErrorBoundary from "./src/components/common/errorBoundary";
import RootNavigator from "./src/navigators/appNavigator";
import NavigationService from "./src/navigators/navigationService";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			storeConfig: configureStore({}, () => this.setState({ isLoading: false })),
		};
	}

	render() {
		if (this.state.isLoading) return null;
		return (
			<Provider store={this.state.storeConfig.store}>
				<PersistGate persistor={this.state.storeConfig.persistor}>
					<ErrorBoundary>
						<View style={{ height: Platform.OS == 'ios' ? 20 : 0 }}>
							<StatusBar
								backgroundColor={'#F2F2F2'}
								barStyle="light-content"
							/>
						</View>
						<RootNavigator 
							ref={ navigatorRef => {
								NavigationService.setTopLevelNavigator(navigatorRef)
							}
						}/>
					</ErrorBoundary>
				</PersistGate>
			</Provider>
		);
	}
}