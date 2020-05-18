import React from "react";
import url_slug from "../utils";
class CreateEventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      slug: "",
      description: "",
      image: null,
      body: "",
      price: 0,
      is_free: true,
      categories: [],
    };
  }

  handleChange = (event) => {
    const target = event.target;
    switch (target.id) {
      case "title":
        this.setState({
          title: target.value,
          slug: url_slug(target.value),
        });
        return;
      case "price":
        target.value > 0
          ? this.setState({
              price: target.value,
              is_free: false,
            })
          : this.setState({
              price: target.value,
              is_free: true,
            });
        return;
      case "categories":
        if (target.value.trim().length > 0) {
          this.setState({
            categories: target.value.split(","),
          });
        }
        return;
      default:
        break;
    }
    this.setState({ [target.id]: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const payload = Object.assign({}, this.state);
    this.props.addEvent(payload);
  };

  render() {
    const {
      title,
      description,
      body,
      image,
      price,
      is_free,
      categories,
    } = this.state;
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit} className="form-column">
          <label>
            Название:
            <input
              required 
              type="text"
              value={title}
              id="title"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Описание:
            <textarea
              required 
              type="text"
              value={description}
              id="description"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Полное описание:
            <textarea
              required 
              type="text"
              value={body || ""}
              id="body"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Цена:
            <input
              required 
              type="text"
              value={price || 0}
              id="price"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Категории (через запятую):
            <input
              required 
              type="text"
              value={categories.join(",")}
              id="categories"
              onChange={this.handleChange}
            />
          </label>

          <button
            type="submit"
            className="white-button edit-btn"
            onClick={this.edit}
          >
            Создать
          </button>
        </form>
      </div>
    );
  }
}

export default CreateEventPage;
