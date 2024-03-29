import React from 'react';
import _ from 'lodash';

import { Layout } from '../components/index';
import { htmlToReact, withPrefix, markdownify } from '../utils';
import BlogPostFooter from '../components/BlogPostFooter';

export default class Post extends React.Component {
    render() {
        const page = _.get(this.props, 'page');
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const title = _.get(page, 'title');
        const subtitle = _.get(page, 'subtitle');
        const image = _.get(page, 'image');
        const imageAlt = _.get(page, 'image_alt');
        const markdownContent = _.get(page, 'markdown_content');

        return (
            <Layout page={page} config={config}>
                <div className="outer">
                    <div className="inner-medium">
                        <article className="post post-full">
                            <header className="post-header">
                                <h1 className="post-title">{title}</h1>
                                {subtitle && <div className="post-subtitle">{htmlToReact(subtitle)}</div>}
                            </header>
                            {image && (
                                <div className="post-image">
                                    <img src={withPrefix(image)} alt={imageAlt} />
                                    {imageAlt && <p className="image-caption">{imageAlt}</p>}
                                </div>
                            )}
                            {markdownContent && <div className="post-content">{markdownify(markdownContent)}</div>}
                            <BlogPostFooter post={page} dateType={'long'} data={data} />
                        </article>
                    </div>
                </div>
            </Layout>
        );
    }
}
