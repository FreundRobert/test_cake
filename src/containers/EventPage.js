import { connect } from "react-redux";
import { setVisibilityFilter, editEvent } from "../store/actions";
import EventPage from "../components/EventPage";

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
    event: state.events.find(
      (event) => event.slug == ownProps.match.params.slug
    ),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
  editEvent: (ev) => dispatch(editEvent(ev)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
