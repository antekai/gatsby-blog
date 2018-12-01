import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";

import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Content from "../components/Main/Content";
import Form from "../components/ContactForm";
import config from "../../content/meta/config";

const styles = theme => ({});

const Contact = () => {
  return (
    <Main>
      <Article>
        <PageHeader title="Contact" />
        <Content>
          Feel free to connect with me at&nbsp;
          <a href="https://linkedin.com/in/andreasten" target="_blank">
            LinkedIn
          </a>
          ,&nbsp;
          <a href="https://www.xing.com/profile/Andreas_Teneketzoglou" target="_blank">
            Xing
          </a>{" "}
          or to contact me by email: <Obfuscate email={config.contactEmail} />
        </Content>
        {/* <Form /> */}
      </Article>
    </Main>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Contact);
