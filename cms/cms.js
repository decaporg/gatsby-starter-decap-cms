import CMS from 'netlify-cms';

import AboutPagePreview from './components/AboutPagePreview';
import BlogPostPreview from './components/BlogPostPreview';
import ProductPagePreview from './components/ProductPagePreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
