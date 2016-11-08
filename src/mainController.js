/**
 * Created by itay on 08/11/16.
 */
import * as counterActions from './actions/counter';

export default class MainController {
  
  constructor($scope,$ngRedux) {
    const unsubscribe = $ngRedux.connect(this.mapStateToThis,counterActions)(this);
    $scope.$on('$destroy', unsubscribe);
  }

  // Which part of the Redux global state does our component want to receive?
  mapStateToThis(state) {
    return {
      counter: state.counter
    };
  }
  
}