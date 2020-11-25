declare interface IHomeProps {
  data: ISite;
}

declare interface ISite {
  site: ISiteGraphql;
}

declare interface ISiteGraphql {
  siteMetadata: ISiteMetadata;
}

declare interface ISiteMetadata {
  title: string;
  description: string;
}
