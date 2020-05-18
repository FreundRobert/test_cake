import React from "react";
import EventCard from "./EventCard";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "",
      sortToMin: true,
    };
  }

  handleChange = (event) => {
    this.props.history.push(event.target.value);
    this.setState({ show: event.target.value });
  };

  toggleSort = () => {
    this.props.sort(this.state.sortToMin);
    this.setState((prevState) => ({ sortToMin: !prevState.sortToMin }));
  };

  render() {
    const eventList = this.props.events.map((e) => (
      <EventCard
        currentEvent={e}
        inFavorites={this.props.user.favorites.includes(e.id)}
        toggleFavorites={this.props.toggleFavorites}
        key={e.slug}
      />
    ));
    const categories = this.props.categories.map((category) => (
      <option value={category} key={category}>
        {category}
      </option>
    ));
    return (
      <div className="content">
        <div className="sort-bar">
          <form>
            <label>
              Показать:
              <select value={this.state.show} onChange={this.handleChange}>
                <option value="">Все</option>
                {categories}
              </select>
            </label>
          </form>
          <button className="white-button" onClick={this.toggleSort}>
            {this.state.sortToMin ? "Сначала дешевле" : "Сначала дороже"}
          </button>
        </div>
        {eventList}
      </div>
    );
  }
}

export default Home;
