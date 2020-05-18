import { connect } from "react-redux";
import { addEvent } from "../store/actions";
import CreateEventPage from "../components/CreateEventPage";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
  addEvent: (payload) => dispatch(addEvent(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventPage);
