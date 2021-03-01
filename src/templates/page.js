import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {toStyleObj, safePrefix, htmlToReact} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <article className="post page post-full">
                <header className="post-header bg-gradient-alt outer">
                  {_.get(this.props, 'pageContext.frontmatter.img_path') && 
                  <div className="bg-img" style={toStyleObj('background-image: url(\'' + safePrefix(_.get(this.props, 'pageContext.frontmatter.img_path')) + '\')')}/>
                  }
                  <div className="inner-small">
                    <h1 className="post-title">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                    {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                    <div className="post-subtitle">
                      {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                    </div>
                    }
                  </div>
                </header>
                <div className="outer">
                  <div className="inner-medium">
                    <div className="post-content">
                       {_.get(this.props, 'pageContext.frontmatter.rubberstamp') &&
                       <div className="rubber-stamp">
                         {htmlToReact(_.get(this.props, 'pageContext.frontmatter.rubberstamp'))}
                       </div>
                      } 
                      {htmlToReact(_.get(this.props, 'pageContext.html'))}
                    </div>
                  </div>
                </div>
              </article>
            </Layout>
        );
    }
}
