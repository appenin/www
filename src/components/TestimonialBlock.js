import React from 'react';
import _ from 'lodash';

import {classNames, safePrefix, markdownify, Link} from '../utils';

export default class TestimonialBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={classNames('block', 'text-block', 'outer', 'testimonial', {'alternate': _.get(this.props, 'section.alternate')}, {'bg-gradient': _.get(this.props, 'section.highlight')}, {'bg-gradient-alt': _.get(this.props, 'section.highlight-alt')})}>
              <div className="inner">
                <div className="block-inside">
                  <div className="block-content">
                    <h2 className="block-title">{_.get(this.props, 'section.title')}</h2>
                    <div className="block-text">
                      {markdownify(_.get(this.props, 'section.content'))}
                    </div>
                    <div className="testimonial-source">
                       {markdownify(_.get(this.props, 'section.source'))}
                    </div>
                    <div className="testimonial-capacity">
                       {markdownify(_.get(this.props, 'section.capacity'))}
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
