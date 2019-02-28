import React from 'react'
import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

import { StyleSheetManager } from 'styled-components'

// Hard to use with CSS-in-JS libs. #793
// This is a component taken from some github issues
// https://github.com/netlify/netlify-cms/issues/793
// https://github.com/netlify/netlify-cms/issues/1408
export class CSSInjector extends React.Component {
  state = {
    iframeRef: null
  }

  componentDidMount() {
    const iframe = document.getElementsByTagName('iframe')[0]
    const iframeHeadElem = iframe.contentDocument.head
    this.setState({ iframeRef: iframeHeadElem })
  }

  render() {
    return (
      <div>
        {this.state.iframeRef && (
          <StyleSheetManager target={this.state.iframeRef}>
            {this.props.children}
          </StyleSheetManager>
        )}
      </div>
    )
  }
}

CMS.registerPreviewTemplate('index', props => (
  <CSSInjector>
    <IndexPagePreview {...props} />
  </CSSInjector>
))
CMS.registerPreviewTemplate('about', props => (
  <CSSInjector>
    <AboutPagePreview {...props} />
  </CSSInjector>
))
CMS.registerPreviewTemplate('products', props => (
  <CSSInjector>
    <ProductPagePreview {...props} />
  </CSSInjector>
))
CMS.registerPreviewTemplate('blog', props => (
  <CSSInjector>
    <BlogPostPreview {...props} />
  </CSSInjector>
))
