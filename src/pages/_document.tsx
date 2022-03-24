import Document, { Html, Head, Main, NextScript } from 'next/document';
import { metaData } from 'values';

/**
 * Custom document. To change SEO elements like keywords, description or the author
 * please don't change them here. Change the metaData in the values
 */
class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content={metaData.description} />
          <meta name="keywords" content={metaData.keywords.join(', ')} />
          <meta name="author" content={metaData.author} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
