import { connect } from "react-redux";
import Home from "../components/Home";
import {
  sortMinToMax,
  sortMaxToMin,
  toggleFavorites,
} from "../store/actions";

const mapStateToProps = (state, ownProps) => {
  return {
    events: state.events.filter((event) => {
      if (ownProps.match.params.filter) {
        return event.categories.includes(ownProps.match.params.filter);
      }
      return true;
    }),
    categories: [...new Set(state.events.flatMap((item) => item.categories))],
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  sort: (toMin) => {
    toMin ? dispatch(sortMaxToMin()) : dispatch(sortMinToMax());
  },
  toggleFavorites: (payload) => dispatch(toggleFavorites(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
