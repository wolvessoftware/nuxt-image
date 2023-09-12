export const images = [
  {
    args: ['/test.png', {}],
    none: { url: '/test.png' },
    ipx: { url: '/_ipx/_/test.png' },
    cloudflare: { url: '/test.png' },
    cloudinary: { url: '/f_auto,q_auto/test' },
    twicpics: { url: '/test.png' },
    fastly: { url: '/test.png' },
    glide: { url: '/test.png' },
    gumlet: { url: '/test.png' },
    imgix: { url: '/test.png' },
    imageengine: { url: '/test.png' },
    unsplash: { url: '/test.png' },
    imagekit: { url: '/test.png' },
    netlify: { url: '/test.png' },
    prepr: { url: 'https://projectName.stream.prepr.io/image-test-300x450-png' },
    prismic: { url: '/test.png?auto=compress,format&rect=0,0,200,200&w=100&h=100' },
    sanity: { url: 'https://cdn.sanity.io/images/projectid/production/test-300x450.png?auto=format' },
    contentful: { url: '/test.png' },
    cloudimage: { url: 'https://demo.cloudimg.io/v7/test.png' },
    edgio: { url: 'https://opt.moovweb.net/?img=/test.png' },
    storyblok: { url: 'https://a.storyblok.com/test.png' },
    vercel: { url: '/_vercel/image?url=/test.png&w=1536&q=100' },
    wagtail: { url: '329944/original|format-webp|webpquality-70' },
    directus: { url: '/assets/1ac73658-8b62-4dea-b6da-529fbc9d01a4' },
    uploadcare: { url: 'https://ucarecdn.com/c160afba-8b42-45a9-a46a-d393248b0072/' }
  },
  {
    args: ['/test.png', { width: 200 }],
    none: { url: '/test.png' },
    ipx: { url: '/_ipx/w_200/test.png' },
    cloudflare: { url: '/cdn-cgi/image/w=200/test.png' },
    cloudinary: { url: '/f_auto,q_auto,w_200/test' },
    twicpics: { url: '/test.png?twic=v1/cover=200x-' },
    fastly: { url: '/test.png?width=200' },
    glide: { url: '/test.png?w=200' },
    gumlet: { url: '/test.png?w=200' },
    imgix: { url: '/test.png?w=200' },
    imageengine: { url: '/test.png?imgeng=/w_200' },
    unsplash: { url: '/test.png?w=200' },
    imagekit: { url: '/test.png?tr=w-200' },
    netlify: { url: '/test.png?w=200&nf_resize=fit' },
    prepr: { url: 'https://projectName.stream.prepr.io/w_200/image-test-300x450-png' },
    prismic: { url: '/test.png?auto=compress,format&rect=0,0,200,200&w=200&h=100' },
    sanity: { url: 'https://cdn.sanity.io/images/projectid/production/test-300x450.png?w=200&auto=format' },
    contentful: { url: '/test.png?w=200' },
    cloudimage: { url: 'https://demo.cloudimg.io/v7/test.png?width=200' },
    edgio: { url: 'https://opt.moovweb.net/?img=/test.png&width=200' },
    storyblok: { url: 'https://a.storyblok.com/test.png/m/200x0' },
    vercel: { url: '/_vercel/image?url=/test.png&w=320&q=100' },
    wagtail: { url: '329944/width-200|format-webp|webpquality-70' },
    directus: { url: '/assets/1ac73658-8b62-4dea-b6da-529fbc9d01a4?width=200' },
    uploadcare: { url: 'https://ucarecdn.com/c160afba-8b42-45a9-a46a-d393248b0072/-/resize/200x/' }
  },
  {
    args: ['/test.png', { height: 200 }],
    none: { url: '/test.png' },
    ipx: { url: '/_ipx/h_200/test.png' },
    cloudflare: { url: '/cdn-cgi/image/h=200/test.png' },
    cloudinary: { url: '/f_auto,q_auto,h_200/test' },
    twicpics: { url: '/test.png?twic=v1/cover=-x200' },
    fastly: { url: '/test.png?height=200' },
    glide: { url: '/test.png?h=200' },
    gumlet: { url: '/test.png?h=200' },
    imgix: { url: '/test.png?h=200' },
    imageengine: { url: '/test.png?imgeng=/h_200' },
    unsplash: { url: '/test.png?h=200' },
    imagekit: { url: '/test.png?tr=h-200' },
    netlify: { url: '/test.png?h=200&nf_resize=fit' },
    prepr: { url: 'https://projectName.stream.prepr.io/h_200/image-test-300x450-png' },
    prismic: { url: '/test.png?auto=compress,format&rect=0,0,200,200&w=100&h=200' },
    sanity: { url: 'https://cdn.sanity.io/images/projectid/production/test-300x450.png?h=200&auto=format' },
    contentful: { url: '/test.png?h=200' },
    cloudimage: { url: 'https://demo.cloudimg.io/v7/test.png?height=200' },
    edgio: { url: 'https://opt.moovweb.net/?img=/test.png&height=200' },
    storyblok: { url: 'https://a.storyblok.com/test.png/m/0x200' },
    vercel: { url: '/_vercel/image?url=/test.png&w=1536&q=100' },
    wagtail: { url: '329944/height-200|format-webp|webpquality-70' },
    directus: { url: '/assets/1ac73658-8b62-4dea-b6da-529fbc9d01a4?height=200' },
    uploadcare: { url: 'https://ucarecdn.com/c160afba-8b42-45a9-a46a-d393248b0072/-/resize/x200/' }
  },
  {
    args: ['/test.png', { width: 200, height: 200 }],
    none: { url: '/test.png' },
    ipx: { url: '/_ipx/s_200x200/test.png' },
    cloudflare: { url: '/cdn-cgi/image/w=200,h=200/test.png' },
    cloudinary: { url: '/f_auto,q_auto,w_200,h_200/test' },
    twicpics: { url: '/test.png?twic=v1/cover=200x200' },
    fastly: { url: '/test.png?width=200&height=200' },
    glide: { url: '/test.png?w=200&h=200' },
    gumlet: { url: '/test.png?w=200&h=200' },
    imgix: { url: '/test.png?w=200&h=200' },
    imageengine: { url: '/test.png?imgeng=/w_200/h_200' },
    unsplash: { url: '/test.png?w=200&h=200' },
    imagekit: { url: '/test.png?tr=w-200,h-200' },
    netlify: { url: '/test.png?w=200&h=200&nf_resize=fit' },
    prismic: { url: '/test.png?auto=compress,format&rect=0,0,200,200&w=200&h=200' },
    prepr: { url: 'https://projectName.stream.prepr.io/w_200,h_200/image-test-300x450-png' },
    sanity: { url: 'https://cdn.sanity.io/images/projectid/production/test-300x450.png?w=200&h=200&auto=format' },
    contentful: { url: '/test.png?w=200&h=200' },
    cloudimage: { url: 'https://demo.cloudimg.io/v7/test.png?width=200&height=200' },
    edgio: { url: 'https://opt.moovweb.net/?img=/test.png&width=200&height=200' },
    storyblok: { url: 'https://a.storyblok.com/test.png/m/200x200' },
    vercel: { url: '/_vercel/image?url=/test.png&w=320&q=100' },
    wagtail: { url: '329944/fill-200x200-c0|format-webp|webpquality-70' },
    directus: { url: '/assets/1ac73658-8b62-4dea-b6da-529fbc9d01a4?width=200&height=200' },
    uploadcare: { url: 'https://ucarecdn.com/c160afba-8b42-45a9-a46a-d393248b0072/-/resize/200x200/' }
  },
  {
    args: ['/test.png', { width: 200, height: 200, fit: 'contain' }],
    none: { url: '/test.png' },
    ipx: { url: '/_ipx/fit_contain&s_200x200/test.png' },
    cloudflare: { url: '/cdn-cgi/image/w=200,h=200,fit=contain/test.png' },
    cloudinary: { url: '/f_auto,q_auto,w_200,h_200,c_scale/test' },
    twicpics: { url: '/test.png?twic=v1/inside=200x200' },
    fastly: { url: '/test.png?width=200&height=200&fit=bounds' },
    glide: { url: '/test.png?w=200&h=200&fit=contain' },
    gumlet: { url: '/test.png?w=200&h=200&fit=fill' },
    imgix: { url: '/test.png?w=200&h=200&fit=fill' },
    imageengine: { url: '/test.png?imgeng=/w_200/h_200/m_letterbox' },
    unsplash: { url: '/test.png?w=200&h=200&fit=fill' },
    imagekit: { url: '/test.png?tr=w-200,h-200,cm-pad_resize' },
    netlify: { url: '/test.png?w=200&h=200&nf_resize=fit' },
    prismic: { url: '/test.png?auto=compress,format&rect=0,0,200,200&w=200&h=200&fit=fill' },
    prepr: { url: 'https://projectName.stream.prepr.io/w_200,h_200,fit_contain/image-test-300x450-png' },
    sanity: { url: 'https://cdn.sanity.io/images/projectid/production/test-300x450.png?w=200&h=200&fit=fill&auto=format&bg=ffffff' },
    contentful: { url: '/test.png?w=200&h=200&fit=fill' },
    cloudimage: { url: 'https://demo.cloudimg.io/v7/test.png?width=200&height=200&func=fit' },
    edgio: { url: 'https://opt.moovweb.net/?img=/test.png&width=200&height=200&fit=contain' },
    storyblok: { url: 'https://a.storyblok.com/test.png/m/fit-contain/200x200' },
    vercel: { url: '/_vercel/image?url=/test.png&w=320&q=100' },
    wagtail: { url: '329944/fill-200x200-c0|format-webp|webpquality-70' },
    directus: { url: '/assets/1ac73658-8b62-4dea-b6da-529fbc9d01a4?width=200&height=200&fit=contain' },
    uploadcare: { url: 'https://ucarecdn.com/c160afba-8b42-45a9-a46a-d393248b0072/-/resize/200x200/-/stretch/off/' }
  },
  {
    args: ['/test.png', { width: 200, height: 200, fit: 'contain', format: 'jpeg' }],
    none: { url: '/test.png' },
    ipx: { url: '/_ipx/fit_contain&f_jpeg&s_200x200/test.png' },
    cloudflare: { url: '/cdn-cgi/image/w=200,h=200,fit=contain,f=jpeg/test.png' },
    cloudinary: { url: '/f_jpg,q_auto,w_200,h_200,c_scale/test' },
    twicpics: { url: '/test.png?twic=v1/output=jpeg/inside=200x200' },
    fastly: { url: '/test.png?width=200&height=200&fit=bounds&format=jpeg' },
    glide: { url: '/test.png?w=200&h=200&fit=contain&fm=jpeg' },
    gumlet: { url: '/test.png?w=200&h=200&fit=fill&format=jpeg' },
    imgix: { url: '/test.png?w=200&h=200&fit=fill&fm=jpeg' },
    imageengine: { url: '/test.png?imgeng=/w_200/h_200/m_letterbox/f_jpg' },
    unsplash: { url: '/test.png?w=200&h=200&fit=fill&fm=jpeg' },
    imagekit: { url: '/test.png?tr=w-200,h-200,cm-pad_resize,f-jpeg' },
    netlify: { url: '/test.png?w=200&h=200&nf_resize=fit' },
    prismic: { url: '/test.png?auto=compress,format&rect=0,0,200,200&w=200&h=200&fit=fill&fm=jpeg' },
    sanity: { url: 'https://cdn.sanity.io/images/projectid/production/test-300x450.png?w=200&h=200&fit=fill&fm=jpg&bg=ffffff' },
    prepr: { url: 'https://projectName.stream.prepr.io/w_200,h_200,fit_contain,format_jpg/image-test-300x450-png' },
    contentful: { url: '/test.png?w=200&h=200&fit=fill&fm=jpg' },
    cloudimage: { url: 'https://demo.cloudimg.io/v7/test.png?width=200&height=200&func=fit&force_format=jpeg' },
    edgio: { url: 'https://opt.moovweb.net/?img=/test.png&width=200&height=200&fit=contain&format=jpeg' },
    storyblok: { url: 'https://a.storyblok.com/test.png/m/fit-contain/200x200/filters:format(jpeg)' },
    vercel: { url: '/_vercel/image?url=/test.png&w=320&q=100' },
    wagtail: { url: '329944/fill-200x200-c0|format-jpeg|jpegquality-70' },
    directus: { url: '/assets/1ac73658-8b62-4dea-b6da-529fbc9d01a4?width=200&height=200&fit=contain&format=jpg' },
    uploadcare: { url: 'https://ucarecdn.com/c160afba-8b42-45a9-a46a-d393248b0072/-/format/jpeg/-/resize/200x200/-/stretch/off/' }
  }
] as const

export const modifierFixtures = images.map(image => image.args[1])
