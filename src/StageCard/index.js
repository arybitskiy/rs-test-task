import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DraftImage from './images/draft.png';
import HelpImage from './images/help.png';

var styles = {
  clearfix : {
    height: '0',
    lineHeight : '0',
    overflow : 'hidden',
    clear : 'both',
  },
  stageCard : {
    self : {},
    content : {},
    contentActive : {},
    contentInActive : {
      backgroundColor : '#E6E7E8',
    },
    topLine : {
      height : '17px',
      width : '100%',
      backgroundColor : '#F00',
      position : 'relative',
      marginTop : '25px',
    },
    icon : {
      width : '50px',
      height : '50px',
      backgroundRepeat : 'no-repeat',
      backgroundPosition : '50% 50%',
      position : 'absolute',
      left : '50%',
      top : '50%',
      marginLeft : '-25px',
      marginTop : '-25px',
      borderRadius : '25px',
      backgroundColor : '#FFF',
      boxShadow : 'rgb(0, 0, 0) 0px 0px 20px -6px',
    },
    title : {
      textAlign : 'center',
      color : '#858c93',
      lineHeight : '25px',
      height : '25px',
      marginTop : '32px',
      fontSize : '19px',
      fontFamily : 'Arial',
    },
    titleText : {
      display : 'inline-block',
      verticalAlign : 'top',
      position : 'relative',
    },
    tooltip : {
      backgroundImage : `url(${HelpImage})`,
      width : '25px',
      height : '25px',
      backgroundRepeat : 'no-repeat',
      backgroundPosition : '50% 50%',
      cursor : 'help',
      display : 'inline-block',
      marginLeft : '20px',
      verticalAlign : 'top',
      position : 'absolute',
      left : '100%',
      top : '0px',
    },
    items : {
      textAlign : 'center',
      margin : '30px 0',
    },
    manageTemplatesLink : {
      textAlign : 'center',
      borderTop : '2px solid #E6E7E8',
      lineHeight : '36px',
    },
  },
  stageCardItem : {
    item : {
      display : 'inline-block',
      marginLeft : '20px',
      marginRight : '20px',
      lineHeight : '20px',
      height : '20px',
    },
    itemIsClickable : {
      cursor : 'pointer',
    },
    badge : {
      width : '10px',
      height : '10px',
      borderRadius : '10px',
      display : 'inline-block',
      verticalAlign : 'middle',
    },
    icon : {
      width : '20px',
      height : '20px',
      backgroundRepeat : 'no-repeat',
      backgroundPosition : '50% 50%',
      display : 'inline-block',
      verticalAlign : 'middle',
    },
    text : {
      display : 'inline-block',
      paddingLeft : '10px',
      color : '#858c93',
      verticalAlign : 'middle',
      fontSize : '19px',
      fontFamily : 'Arial',
    },
    itemActive : {
      color : '#36C5A4',
    },
    itemPending : {
      color : '#EABE00',
    },
    itemDraft : {
      icon : `url(${DraftImage})`,
    },
    itemEmpty : {
      color : '#D64933'
    },
  },
};

class StageCard extends Component {

  static propTypes = {
    title : PropTypes.string.isRequired,
    color : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired,
    tooltip : PropTypes.string,
    noTemplateText : PropTypes.string.isRequired,
    manageTemplateText : PropTypes.string.isRequired,
    manageTemplateOnClick : PropTypes.func,
    activeCount : PropTypes.number.isRequired,
    activeOnClick : PropTypes.func,
    pendingCount : PropTypes.number.isRequired,
    pendingOnClick : PropTypes.func,
    draftCount : PropTypes.number.isRequired,
    draftOnClick : PropTypes.func,
  }

  static defaultProps = {
    noTemplateText : 'No templates',
    manageTemplateText : 'Manage Templates',
    activeCount : 0,
    pendingCount : 0,
    draftCount : 0,
  }

  render() {
    const isActive = this.props.activeCount || this.props.pendingCount || this.props.draftCount;
    return (
      <div style={styles.stageCard.self}>
        <div style={{...styles.stageCard.topLine, backgroundColor: this.props.color}}>
          <div style={{...styles.stageCard.icon, backgroundImage: this.props.icon}}></div>
        </div>
        <div style={{...styles.stageCard.content, ...(isActive ? styles.stageCard.contentActive : styles.stageCard.contentInActive)}}>
          <div style={styles.clearfix}></div>
          <div style={styles.stageCard.title}>
            <div style={styles.stageCard.titleText}>
            	{this.props.title}
            	{this.props.tooltip && 
	              <div style={styles.stageCard.tooltip} title={this.props.tooltip}></div>
	            }
            </div>
          </div>
          {isActive ? (
            <div style={styles.stageCard.items}>
              <StageCardItem onClick={this.props.activeCount ? this.props.activeOnClick : null} text={this.props.activeCount} color={styles.stageCardItem.itemActive.color} />
              <StageCardItem onClick={this.props.pendingCount ? this.props.pendingOnClick : null} text={this.props.pendingCount} color={styles.stageCardItem.itemPending.color} />
              <StageCardItem onClick={this.props.draftCount ? this.props.draftOnClick : null} text={this.props.draftCount} icon={styles.stageCardItem.itemDraft.icon} />
            </div>
          ) : (
            <div style={styles.stageCard.items}>
              <StageCardItem text={this.props.noTemplateText} color={styles.stageCardItem.itemEmpty.color} />
            </div>
          )}
          <div style={styles.clearfix}></div>
        </div>
        <div style={styles.stageCard.manageTemplatesLink}>
          <StageCardItem text={this.props.manageTemplateText} onClick={this.props.manageTemplateOnClick} />
        </div>
      </div>
    );
  }
}

class StageCardItem extends Component {

  static propTypes = {
    text : PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    color : PropTypes.string,
    icon : PropTypes.string,
    onClick : PropTypes.func,
  }

  render() {
    return (
      <div onClick={this.props.onClick} style={{...styles.stageCardItem.item, ...this.props.onClick ? styles.stageCardItem.itemIsClickable : {}}}>
        {this.props.color && 
          <div style={{...styles.stageCardItem.badge, backgroundColor: this.props.color}}></div>
        }
        {this.props.icon &&
          <div style={{...styles.stageCardItem.icon, backgroundImage: this.props.icon}}></div>
        }
        <div style={styles.stageCardItem.text}>{this.props.text}</div>
      </div>
    );
  }

}

export default StageCard;
