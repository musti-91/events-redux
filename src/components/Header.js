import React from "react";
import { Helmet } from "react-helmet";

export const Header = props => (
  <Helmet>
    <meta charset="utf-8" />
    <title>Events</title>
    <meta name="description" content="collecting  events by user" />
    <meta
      name="image"
      content="http://www.keito.com.au/wp-content/uploads/2018/04/favicon.png"
    />
    <meta itemprop="name" content="Events" />
    <meta itemprop="description" content="collecting  events by user" />
    <meta
      itemprop="image"
      content="http://www.keito.com.au/wp-content/uploads/2018/04/favicon.png"
    />
    <meta name="og:title" content="Events" />
    <meta name="og:description" content="collecting  events by user" />
    <meta
      name="og:image"
      content="http://www.keito.com.au/wp-content/uploads/2018/04/favicon.png"
    />
    <meta name="og:type" content="article" />
  </Helmet>
);
