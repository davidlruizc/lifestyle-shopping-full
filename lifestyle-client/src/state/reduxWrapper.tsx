import React from 'react';
import { Provider } from 'react-redux';
import store from '.';

export default ({ element }: any) => <Provider store={store}>{element}</Provider>;
