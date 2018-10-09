import React, { PureComponent } from 'react'

export default class HTMLContent extends PureComponent {
  state = {
    sanitizeHTML: null
  }
  async componentDidMount () {
    const sanitizeHTML = await import(/* webpackChunkName: "sanitize-html" */ 'sanitize-html')
    console.log(sanitizeHTML)
    this.setState({
      sanitizeHTML
    })
  }
  render () {
    let { sanitizeHTML } = this.state
    if (sanitizeHTML) {
      let allowedTags = sanitizeHTML.defaults.allowedTags.concat(['img'])
      let allowedAttributes = {
        a: ['href', 'name', 'target', 'rel'],
        img: ['src', 'data-src', 'class'],
        pre: ['style']
      }
      let transformTags = {
        'a': (_, attrs) => ({
          tagName: 'a',
          attribs: {
            ...attrs,
            target: '_blank',
            rel: 'noopener noreferrer'
          }
        }),
        'img': (_, {
          src
        }) => ({
          tagName: 'img',
          attribs: {
            'data-src': `https://res.cloudinary.com/dqtlmyuyi/image/fetch/q_auto:good,f_auto,h_360,dpr_auto,c_fit/${src}`,
            class: 'lazyload'
          }
        }),
        'pre': (_, attribs) => ({
          tagName: 'pre',
          attribs: {
            ...attribs,
            style: 'overflow-x:scroll'
          }
        })
      }
      let options = {
        allowedTags,
        allowedAttributes,
        transformTags
      }
      let content = { __html: sanitizeHTML.default(this.props.html, options) }
      return (
        <div dangerouslySetInnerHTML={content} />
      )
    }
    return false
  }
}
