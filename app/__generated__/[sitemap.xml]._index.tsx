/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { XmlNode as XmlNode } from "@webstudio-is/sdk-components-react";


      export const projectId = "dba9d753-ddf9-434f-be13-fdc5fabadb2d";

      export const lastPublished = "2025-07-11T08:36:48.244Z";

      export const siteName = "たいくんの部屋";

      export const breakpoints = [{"id":"7hPMMapQ_YKRAmEWw_M-S"},{"id":"oIVfj9CW1VSGQ1nzAMQhV","maxWidth":991},{"id":"b-tdPHJg4N8hzh8wxGSqL","maxWidth":767},{"id":"sURTnOO_xRAsuAvyLcB6L","maxWidth":479}];

      export const favIconAsset: string | undefined =
        "favicon_KlZhqsaIZDngBH2QBAuUy.png";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        []

      export const pageBackgroundImageAssets: string[] =
        []

      

      const Page = (_props: { system: any; }) => {
let [siteURL, set$siteURL] = useVariableState<any>("https://www.taikun-room.com")
let _ = useResource("__2")
let __1 = useResource("__3")
return <XmlNode
xmlns={"http://www.sitemaps.org/schemas/sitemap/0.9"}
tag={"urlset"}>
{_?.data?.data?.posts?.nodes?.map?.((collectionItem: any, index: number) =>
<Fragment key={index}>
<XmlNode
tag={"url"}>
<XmlNode
tag={"loc"}>
{`${siteURL}/blog/${collectionItem?.slug}`}
</XmlNode>
<XmlNode
tag={"lastmod"}>
{collectionItem?.modified + "+09:00"}
</XmlNode>
</XmlNode>
</Fragment>
)}
{__1?.data?.data?.pages?.nodes?.map?.((collectionItem_1: any, index_1: number) =>
<Fragment key={index_1}>
<XmlNode
tag={"url"}>
<XmlNode
tag={"loc"}>
{`${siteURL}/page/${collectionItem_1?.slug}`}
</XmlNode>
<XmlNode
tag={"lastmod"}>
{collectionItem_1?.modified + "+09:00"}
</XmlNode>
</XmlNode>
</Fragment>
)}
</XmlNode>
}


      export { Page }
    