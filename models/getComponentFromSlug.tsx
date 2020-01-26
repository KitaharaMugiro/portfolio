import autoTrading from "../pages/products/auto-trading";
import jpegResolution from "../pages/products/jpeg-resolution";
import arEducation from "../pages/products/ar-education";
import abceed from "../pages/products/abceed";
import pantyShare from "../pages/products/panty-share";
import adapp1 from "../pages/products/adapp1";
import adapp2 from "../pages/products/adapp2";
import changeTheWorld from "../pages/products/changeTheWorld";
import campwill from "../pages/products/campwill";
import smartguide from "../pages/products/smartguide";
import goalAchivement from "../pages/products/goal-achivement";
import testMaker from "../pages/products/test-maker";
import shareCycle from "../pages/products/share-cycle";

//ProductListに生やすと重くなりそうという謎懸念
//あとProductListはReactに依存しないでいてほしいという願望

type SlugByComponent = {
  slug: string;
  component: React.FC;
};

const SlugByComponentList: SlugByComponent[] = [
  {
    slug: "auto-trading",
    component: autoTrading
  },
  {
    slug: "jpeg-resolution",
    component: jpegResolution
  },
  {
    slug: "ar-education",
    component: arEducation
  },
  {
    slug: "abceed",
    component: abceed
  },
  {
    slug: "panty-share",
    component: pantyShare
  },
  {
    slug: "adapp1",
    component: adapp1
  },
  {
    slug: "adapp2",
    component: adapp2
  },
  {
    slug: "changeTheWorld",
    component: changeTheWorld
  },
  {
    slug: "campwill",
    component: campwill
  },
  {
    slug: "smartguide",
    component: smartguide
  },
  {
    slug: "goal-achivement",
    component: goalAchivement
  },
  {
    slug: "test-maker",
    component: testMaker
  },
  {
    slug: "share-cycle",
    component: shareCycle
  }
];

export function getComponentFromSlug(slug: string) {
  const maybeComponet = SlugByComponentList.find(obj => obj.slug === slug);
  if (maybeComponet) {
    return <maybeComponet.component />;
  }
  throw new Error("指定されたslugは存在しません");
}
