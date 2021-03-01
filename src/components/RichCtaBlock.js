import React from 'react';
import _ from 'lodash';

import {htmlToReact, Link, safePrefix} from '../utils';

export default class RichCtaBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="block cta-block outer">
            <div className="inner">
                <div className="block-outside bg-gradient-alt">
                  <div className="block-inside">
                    <div className="block-content">
                      <h2 className="block-title">{_.get(this.props, 'section.title')}</h2>
                      {_.get(this.props, 'section.subtitle') && 
                      <p className="block-text">
                        {htmlToReact(_.get(this.props, 'section.subtitle'))}
                      </p>
                      }
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
                      <img className="thumbnail" src={safePrefix(_.get(this.props, 'section.image'))} alt={_.get(this.props, 'sectio n .title')} />
                    </div>
                    }
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
