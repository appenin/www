import React from 'react';
import _ from 'lodash';

import {htmlToReact, classNames, toStyleObj, Link, safePrefix} from '../utils';

export default class CtaBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="block cta-block outer">
              <div className="inner">
                <div className="block-outside bg-accent-alt">
                  <div className={classNames('block-inside', {'with-icon': _.get(this.props, 'section.icon')})} style={_.get(this.props, 'section.icon') && toStyleObj('background-image: url(\'' + safePrefix(_.get(this.props, 'section.icon')) + '\')')}>
                    <div className="block-content">
                      <h2 className="block-title">{_.get(this.props, 'section.title')}</h2>
                      {_.get(this.props, 'section.subtitle') && 
                      <p className="block-text">
                        {htmlToReact(_.get(this.props, 'section.subtitle'))}
                      </p>
                      }
                    </div>
                    {_.get(this.props, 'section.actions') && 
                    <div className="block-cta">
                      {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                      <Link key={action_idx} to={safePrefix(_.get(action, 'url'))} className="button">{_.get(action, 'label')}</Link>
                      ))}
                    </div>
                    }
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
