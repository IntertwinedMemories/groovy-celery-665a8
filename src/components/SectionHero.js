import React from 'react';
import _ from 'lodash';

import { withPrefix, markdownify } from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionHero extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const image = _.get(section, 'image');
        const imageAlt = _.get(section, 'image_alt');
        const title = _.get(section, 'title');
        const subtitle = _.get(section, 'subtitle');
        const content = _.get(section, 'content');
        const actions = _.get(section, 'actions');

        return (
            <section id={sectionId} className="block hero-block bg-accent outer">
                <div className="inner">
                    <div className="grid">
                        {image && (
                            <div className="cell block-preview">
                                <img src={withPrefix(image)} alt={imageAlt} />
                            </div>
                        )}
                        <div className="cell block-content">
                            {title && <h1 className="block-title">{title}</h1>}
                            {subtitle && <h2 className="block-subtitle underline">{subtitle}</h2>}
                            {content && content.split('\n').map(c=><div className="block-copy">{markdownify(c)}</div>)}
                            {actions && (
                                <div className="block-buttons">
                                    <CtaButtons actions={actions} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
