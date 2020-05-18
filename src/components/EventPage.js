import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "../styles/event-page.css";

class EventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.event.id,
      title: props.event.title,
      slug: props.event.slug,
      description: props.event.description,
      image: props.event.image,
      body: props.event.body,
      price: props.event.price,
      is_free: props.event.is_free,
      categories: props.event.categories,
      editable: false,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    this.setState({ [target.id]: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const payload = Object.assign({}, this.state);
    this.props.editEvent(payload);
    this.setState({ editable: false });
  };
  edit = () => this.setState({ editable: true });

  render() {
    const {
      title,
      description,
      body,
      image,
      price,
      is_free,
      categories,
      editable,
    } = this.state;
    const editableFrom = (
      <form onSubmit={this.handleSubmit} className="column edit-form">
        <label className="column">
          Название:
          <input
            required 
            type="text"
            value={title}
            id="title"
            onChange={this.handleChange}
          />
        </label>
        <label className="column">
          Описание:
          <textarea
            required 
            type="text"
            value={description}
            id="description"
            onChange={this.handleChange}
          />
        </label>
        <label className="column">
          Полное описание:
          <textarea
            required 
            type="text"
            value={body || ""}
            id="body"
            onChange={this.handleChange}
          />
        </label>
        <label className="column">
          Цена:
          <input
            required 
            type="text"
            value={price || 0}
            id="price"
            onChange={this.handleChange}
          />
        </label>
        <label className="column">
          Категории:
          <div>
            {categories.map((category) => (
              <div key={category}>{category}</div>
            ))}
          </div>
        </label>
        <input type="submit" value="Сохранить" />
      </form>
    );

    const content = (
      <div className="column">
        <div>
          <img
            src={image || `https://picsum.photos/600?random&t=${Date.now()}`}
            alt="image not found"
            className="event-img"
          />
          <h2>{title}</h2>
          <div>{body}</div>
        </div>
        <div className="small-view-price">
            Цена:  
            {is_free ?  
            <div className="free">  Бесплатно</div> : 
            <div className="cost">  {price} ₽</div> 
            }
        </div>
        <div></div>
        <div className="row badges-line">
          {categories.map((category) => (
            <div className="badge" key={category}>
              {category}
            </div>
          ))}
        </div>
        <button className="white-button edit-btn" onClick={this.edit}>
          Редактировать
        </button>
      </div>
    );
    return (
      <div className="content content-wrapper">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={editable ? "editable" : "non editable"}
            addEndListener={(node, done) =>
              node.addEventListener("transitionend", done, false)
            }
            classNames="fade"
          >
            {editable ? editableFrom : content}
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  }
}

export default EventPage;
