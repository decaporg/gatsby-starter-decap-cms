import CMS, {init} from 'netlify-cms'
import {FileSystemBackend} from 'netlify-cms-backend-fs'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)

if(process.env.NODE_ENV === 'development'){
  window.CMS_ENV = 'development'
  CMS.registerBackend('file-system', FileSystemBackend)
}

init()