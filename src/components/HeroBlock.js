import React from 'react';
import _ from 'lodash';

import {toStyleObj, safePrefix, markdownify, Link} from '../utils';

export default class HeroBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="block hero-block outer bg-gradient-alt">
              {_.get(this.props, 'section.image2') && 
              <div className="bg-img" style={toStyleObj('background-image: url(\'' + safePrefix(_.get(this.props, 'section.image2')) + '\')')}/>
              }
              <div className="inner">
                <div className="block-inside">
                  <div className="block-content">
                    <h2 className="block-title">{_.get(this.props, 'section.title')}<br />{_.get(this.props, 'section.title-line2')}<br />{_.get(this.props, 'section.title-line3')}</h2>
                    <div className="block-text">
                      {markdownify(_.get(this.props, 'section.content'))}
                    </div>
                    {_.get(this.props, 'section.actions') && 
                    <div className="block-cta">
                      {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                      <Link key={action_idx} to={safePrefix(_.get(action, 'url'))} className="button">{_.get(action, 'label')}</Link>
                      ))}
                    </div>
                    }
                  </div>
                  {_.get(this.props, 'section.image') && 
                   <div className="block-preview">
                     <img className="thumbnail" src={safePrefix(_.get(this.props, 'section.image'))} alt={_.get(this.props, 'section.title')} />
                   </div>
                   }
                </div>
              </div>
            </section>
        );
    }
}
