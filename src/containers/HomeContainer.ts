import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../reducers/rootReducer';
import { setLevel } from '../actions/levelActions';
import { getMapRequest, getMapSuccess } from '../actions/mapActions';
import Home from '../pages/Home';

const mapStateToProps = (state: AppState) => {
  return {
    map: state.map.map,
    isLoading: state.map.isLoading,
    level: state.level.level,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onSetLevel: (level: string) => dispatch(setLevel(level)),
  onFetchMap: () => dispatch(getMapRequest()),
  onGetMap: (map: Pipes) => dispatch(getMapSuccess(map)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
