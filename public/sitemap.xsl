<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; color: #333; margin: 0; padding: 2rem; background: #fafafa;}
          #header { padding-bottom: 2rem; border-bottom: 1px solid #eaeaea; margin-bottom: 2rem; }
          #header h1 { margin: 0; font-size: 24px; color: #111; }
          #header p { margin: 0; margin-top: 0.5rem; color: #666; font-size: 14px; }
          table { width: 100%; border-collapse: collapse; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-size: 14px; }
          th, td { border-bottom: 1px solid #eaeaea; padding: 12px 16px; text-align: left; }
          th { background-color: #f9f9f9; font-weight: 600; color: #444; }
          tr:hover { background-color: #f5f5f5; }
          tr:last-child td { border-bottom: none; }
          a { color: #0066cc; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .tag { display: inline-block; padding: 2px 8px; border-radius: 12px; font-size: 12px; background: #eee; color: #555;}
        </style>
      </head>
      <body>
        <div id="header">
            <h1>XML Sitemap</h1>
            <p>This is a structured XML Sitemap for Google Search Console. It has been styled for easier reading by humans in browsers.</p>
        </div>
        <table>
          <tr>
            <th>URL Location</th>
            <th>Last Modified Date</th>
            <th>Change Frequency</th>
            <th>Priority</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td>
                <xsl:variable name="itemURL">
                  <xsl:value-of select="sitemap:loc"/>
                </xsl:variable>
                <a href="{$itemURL}">
                  <xsl:value-of select="sitemap:loc"/>
                </a>
              </td>
              <td><span class="tag"><xsl:value-of select="sitemap:lastmod"/></span></td>
              <td><xsl:value-of select="sitemap:changefreq"/></td>
              <td><xsl:value-of select="sitemap:priority"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
