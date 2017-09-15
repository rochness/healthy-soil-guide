import React, { Component } from 'react';

class ParticipateContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container participate-container">
        <h3 className="contentPageTitle"> Participate </h3>
        <p> Interested in participating in our research or learning more about
        our project? Fill out the form below to get in touch via email.
        </p>
        <form
          action="https://formspree.io/info@healthysoilguide.com"
          method="POST">
          <label>Organization / business name:
            <input name="businessName" type="text"/>
          </label>
          <label>Name of contact:
            <input name="contactName" type="text"/>
          </label>
          <label>Email address:
            <input name="email" type="text"/>
          </label>
          <label>Phone number:
            <input name="phone" type="text"/>
          </label>
          <label>Interested in participating?
            <br />
            <input name="participating?" type="radio" value="y"/> Yes
            <br />
            <input name="participating?" type="radio" value="n"/> No
          </label>
          <label>Interested in more info/ mailing list sign up?
            <br />
            <input name="mailingList?" type="radio" value="y"/> Yes
            <br />
            <input name="mailingList?" type="radio" value="n"/> No
          </label>
          <label>Comments:</label>
          <textarea name="comments" type="textarea"/>
          <br />
          {<input type="hidden" name="_next" value={ window.location.hostname } />}
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default ParticipateContent;