import { connect } from "react-redux";
import Favorites from "../components/FavoritesPage";
import { sortMinToMax, sortMaxToMin, toggleFavorites } from "../store/actions";

const mapStateToProps = (state, ownProps) => {
  return {
    events: state.events.filter((event) => {
      return state.user.favorites.includes(event.id) 
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

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
