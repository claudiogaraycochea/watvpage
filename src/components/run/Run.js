import React, { Component } from 'react';
import './Run.css';
import axios from 'axios';
import { API_URL } from '../../constants';
import * as commons from "../../commons/Commons";
import "../../commons/Fonts.css";
import "../../commons/Module.css";

import ModuleLink from "../modules/moduleLink/ModuleLink";
import ModuleSocialNetwork from "../modules/moduleSocialNetwork/ModuleSocialNetwork";
import ModuleFacebookSendMessage from "../modules/moduleFacebookSendMessage/ModuleFacebookSendMessage";
import ModuleTitleDescription from "../modules/moduleTitleDescription/ModuleTitleDescription";
import ModuleImage from "../modules/moduleImage/ModuleImage";
import ModuleBuyNow from "../modules/moduleBuyNow/ModuleBuyNow";
import ModuleDownloadApp from "../modules/moduleDownloadApp/ModuleDownloadApp";
import ModuleVote from "../modules/moduleVote/ModuleVote";
import ModuleRealtimeReactions from "../modules/moduleRealtimeReactions/ModuleRealtimeReactions";

class Run extends Component {
  constructor(props) {
    super(props);
    this.state = {
			websiteId: '',
      userFirstname: '',
      websiteList: [],
      websiteData: {
        title: '',
        run_src: {}
      }
    };
	}
	
	componentWillMount() {
		const websiteId = this.props.match.params.websiteId;
		console.log('websiteId: ', websiteId);
    axios
      .get(`${API_URL}getRun/?website_id=${websiteId}`)
      .then(response => {
        const data = commons.copyObj(response.data);
        const runSrc = JSON.parse(data.run_src);
        const components = runSrc.components;
        const template = runSrc.template;
				console.log(data);
        this.setState({
          websiteData: data,
          websiteDraggable: components,
          runSrc: {
            components: components,
            template: template
          }
        });
      })
      .catch(error => {});
	}

  getModuleComponent(data) {
    const moduleKey = data.moduleItem.moduleKey;
    const moduleSrc = data.moduleItem.moduleSrc;
    switch (moduleKey) {
      case "ModuleTitleDescription":
        return (
          <ModuleTitleDescription
            {...this.props}
            moduleSrc={moduleSrc}
            properties={data.properties}
            setModuleProperties={this.setModuleProperties}
            runSrc={this.state.runSrc}
            styles={data.styles}
            showStyle={data.showStyle}
          />
        );
      case "ModuleLink":
        return (
          <ModuleLink
            {...this.props}
            moduleSrc={moduleSrc}
            properties={data.properties}
            setModuleProperties={this.setModuleProperties}
            runSrc={this.state.runSrc}
            styles={data.styles}
            showStyle={data.showStyle}
          />
        );
      case "ModuleImage":
        return (
          <ModuleImage
            {...this.props}
            moduleSrc={moduleSrc}
            properties={data.properties}
            setModuleProperties={this.setModuleProperties}
            runSrc={this.state.runSrc}
            styles={data.styles}
            showStyle={data.showStyle}
          />
        );
      case "ModuleSocialNetwork":
        return (
          <ModuleSocialNetwork
            moduleSrc={moduleSrc}
            properties={data.properties}
            setModuleProperties={this.setModuleProperties}
            runSrc={this.state.runSrc}
            styles={data.styles}
            showStyle={data.showStyle}
          />
        );
      case "ModuleFacebookSendMessage":
        return (
          <ModuleFacebookSendMessage
            moduleSrc={moduleSrc}
            properties={data.properties}
            setModuleProperties={this.setModuleProperties}
            runSrc={this.state.runSrc}
            styles={data.styles}
            showStyle={data.showStyle}
          />
        );
      case "ModuleBuyNow":
        return (
          <ModuleBuyNow
            {...this.props}
            moduleSrc={moduleSrc}
            properties={data.properties}
            setModuleProperties={this.setModuleProperties}
            runSrc={this.state.runSrc}
            styles={data.styles}
            showStyle={data.showStyle}
          />
        );
      case "ModuleDownloadApp":
        return (
          <ModuleDownloadApp
            {...this.props}
            moduleSrc={moduleSrc}
            properties={data.properties}
            setModuleProperties={this.setModuleProperties}
            runSrc={this.state.runSrc}
            styles={data.styles}
            showStyle={data.showStyle}
          />
        );
      case "ModuleVote":
        return (
          <ModuleVote
            {...this.props}
            moduleSrc={moduleSrc}
            properties={data.properties}
            setModuleProperties={this.setModuleProperties}
            runSrc={this.state.runSrc}
            styles={data.styles}
            showStyle={data.showStyle}
          />
        );
      case "ModuleRealtimeReactions":
        return (
          <ModuleRealtimeReactions
            {...this.props}
            moduleSrc={moduleSrc}
            properties={data.properties}
            setModuleProperties={this.setModuleProperties}
            runSrc={this.state.runSrc}
            styles={data.styles}
            showStyle={data.showStyle}
          />
        );
      default:
        return null;
    }
  }

	getPreview() {
    if (Object.keys(this.state.runSrc).length === 0) return <div>Empty</div>;
    else {
      const styles = this.state.runSrc.template.styles;
      const showStyle = true;
      return (
        <div className="mod-run" style={styles.background}>
          {this.state.runSrc.components.map((item, key) => (
            <div key={key} className="mod-box">
              {this.getModuleComponent({
                moduleItem: item, 
                properties: false,
                showStyle: showStyle})}
            </div>
          ))}
        </div>
      );
    }
	}
	
  render() {
		console.log('state: ', this.state);
    return (
      <div className="tertiary-style">
        <div className="container padding-20">
          Production
        </div>
      </div>
    );
  }
}

export default Run;