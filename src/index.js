/**
 * Created by itay on 08/11/16.
 */
import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';
import {default as DevTools, runDevTools} from './utils/devTools';

import MainController from './mainController';

import rootReducer from './reducers';

angular.module('undo-redo',[ngRedux])
  .config(($ngReduxProvider) => {
    var state = {
      counter: {
        past: [],
        present: 1, // (?) How do we initialize the present?
        future: []
      }
    };

    //Creates the Redux store, and allow connect() to access it.
    $ngReduxProvider.createStoreWith(rootReducer, [thunk], [DevTools.instrument()],state);
  })
  //run the dev tool (will run only on dev mode)
  .run(runDevTools)
  //TODO: take the feature type constants from a shared file between the server and the client.

  .controller('mainController',MainController);




//kick start angular on doc ready.
angular.element(document).ready(() => {
  angular.bootstrap(document,['undo-redo']);
});