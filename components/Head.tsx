import React, { FC } from "react";
import NextHead from "next/head";

interface Props {
  title?: string;
  description?: string;
  url?: string;
  ogImage?: string;
}

// prettier-ignore
const Head: FC<Props> = ({ title = "", description = "", url = "", ogImage = "", }) => (
  <NextHead>
    <meta charSet={"UTF-8"} />
    <title>{title}</title>
    <meta name={"description"} content={description} />
    <meta name={"viewport"} content={"width=device-width, initial-scale=1"} />
    <link rel={"icon"} sizes={"192x192"} href={"/static/touch-icon.png"} />
    <link rel={"apple-touch-icon"} href={"/static/touch-icon.png"} />
    <link rel={"mask-icon"} href={"/static/favicon-mask.svg"} color={"#49B882"} />
    <link rel={"icon"} href={"/favicon.png"} />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400;1,800&family=Ubuntu:wght@500&display=swap" rel="stylesheet" />
    <meta property={"og:url"} content={url} />
    <meta property={"og:title"} content={title} />
    <meta property={"og:description"} content={description} />
    <meta name={"twitter:site"} content={url} />
    <meta name={"twitter:card"} content={"summary_large_image"} />
    <meta name={"twitter:image"} content={ogImage} />
    <meta property={"og:image"} content={ogImage} />
    <meta property={"og:image:width"} content={"1200"} />
    <meta property={"og:image:height"} content={"630"} />
  </NextHead>
);

export default Head;
