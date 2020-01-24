export enum Tag {
  machineLearning = "機械学習",
  python = "Python",
  dataAnalysis = "データ分析",
  R = "R",
  Selenium = "Selenium",
  scraping = "スクレイピング",
  deepLearning = "ディープラーニング",
  swift = "Swift",
  AR = "AR",
  physic = "物理シミュレーション",
  iOS = "iOS",
  android = "android",
  kotlin = "kotlin",
  webApp = "Webアプリ",
  mobile = "mobile",
  vue = "Vue",
  react = "React",
  speechToText = "音声認識",
  imageRecognition = "画像認識",
  cleanArchitecture = "クリーンアーキテクチャ",
  TDD = "テスト駆動開発",
  naturalLanguage = "自然言語処理",
  twitter = "Twitter",
  SPA = "シングルページアプリケーション",
  serverless = "サーバレス",
  dynamo = "DynamoDB",
  lambda = "Lambda",
  S3 = "S3 hosting",
  AWS = "AWS",
  APIGateway = "API Gateway",
  MySQL = "MySQL",
  TypeScript = "TypeScript",
  redux = "Redux",
  team = "チーム開発",
  solo = "一人開発",
  highLoad = "高負荷",
  GCP = "GCP",
  speed = "スピード開発",
  agile = "アジャイル開発",
  AppEngine = "GoogleAppEngine",
  express = "Express/RoutingController",
  TypeORM = "TypeORM",
  automation = "自動化",
  nuxt = "Nuxt.js",
  next = "Next.js",
  EC2 = "EC2",
  CICD = "CI/CD",
  reactNative = "ReactNative",
  heroku = "heroku",
  netlify = "Netlify",
  websocket = "Websocket",
  puppeteer = "Puppeteer",
  firebase = "Firebase",
  realTimeDB = "RealTimeDB",
  OAuth = "OAuth"
}

export enum Type {
  intern = "インターン",
  personal = "個人プロジェクト",
  work = "業務"
}

export type Product = {
  name: string;
  slug: string;
  type: Type;
  tags: Tag[];
  image?: string;
};

export const ProductList: Product[] = [
  {
    name: "機械学習による株式売買の最適化/自動化",
    type: Type.personal,
    slug: "auto-trading",
    image: "/auto-trading.png",
    tags: [
      Tag.machineLearning,
      Tag.python,
      Tag.R,
      Tag.dataAnalysis,
      Tag.Selenium,
      Tag.scraping,
      Tag.solo,
      Tag.automation
    ]
  },
  {
    name: "DeepLearningによるjpeg画像の劣化復元",
    type: Type.intern,
    slug: "jpeg-resolution",
    image: "/jpeg-resolution.jpg",
    tags: [Tag.machineLearning, Tag.python, Tag.deepLearning, Tag.solo]
  },
  {
    name: "ARを活用した教育アプリ",
    type: Type.intern,
    slug: "ar-education",
    image: "/ar-education.png",
    tags: [Tag.swift, Tag.AR, Tag.physic, Tag.iOS, Tag.mobile, Tag.team]
  },
  {
    name: "TOEIC/英語学習アプリ abceed",
    type: Type.work,
    slug: "abceed",
    image: "/abceed.png",
    tags: [
      Tag.swift,
      Tag.kotlin,
      Tag.android,
      Tag.iOS,
      Tag.python,
      Tag.vue,
      Tag.mobile,
      Tag.webApp,
      Tag.dataAnalysis,
      Tag.speechToText,
      Tag.imageRecognition,
      Tag.cleanArchitecture,
      Tag.TDD,
      Tag.naturalLanguage,
      Tag.automation
    ]
  },
  {
    name: "パンツシェアアプリ",
    type: Type.personal,
    slug: "panty-share",
    image: "/panty-share.png",
    tags: [
      Tag.vue,
      Tag.twitter,
      Tag.SPA,
      Tag.serverless,
      Tag.webApp,
      Tag.solo,
      Tag.firebase,
      Tag.realTimeDB,
      Tag.OAuth
    ]
  },
  {
    name: "宣伝アプリ あどあっぷ(1)",
    type: Type.personal,
    slug: "adapp1",
    tags: [
      Tag.react,
      Tag.twitter,
      Tag.serverless,
      Tag.redux,
      Tag.S3,
      Tag.lambda,
      Tag.APIGateway,
      Tag.team,
      Tag.netlify
    ]
  },
  {
    name: "抽選アプリ あどあっぷ(2)",
    type: Type.personal,
    slug: "adapp2",
    tags: [
      Tag.react,
      Tag.twitter,
      Tag.serverless,
      Tag.redux,
      Tag.lambda,
      Tag.APIGateway,
      Tag.solo,
      Tag.highLoad,
      Tag.netlify
    ]
  },
  {
    name: "Change the world",
    type: Type.personal,
    slug: "changeTheWorld",
    tags: [Tag.react, Tag.serverless, Tag.GCP, Tag.solo, Tag.speed]
  },
  {
    name: "予約サイトコントローラ Campwill",
    type: Type.work,
    slug: "campwill",
    tags: [
      Tag.react,
      Tag.TypeScript,
      Tag.GCP,
      Tag.AppEngine,
      Tag.scraping,
      Tag.express,
      Tag.TypeORM,
      Tag.MySQL,
      Tag.highLoad,
      Tag.automation,
      Tag.TDD,
      Tag.CICD,
      Tag.puppeteer
    ]
  },
  {
    name: "スマホで音声ガイド smartguide",
    type: Type.work,
    slug: "smartguide",
    tags: [
      Tag.nuxt,
      Tag.vue,
      Tag.TypeScript,
      Tag.AWS,
      Tag.EC2,
      Tag.express,
      Tag.TypeORM,
      Tag.MySQL,
      Tag.TDD,
      Tag.agile,
      Tag.CICD,
      Tag.puppeteer,
      Tag.automation
    ]
  },
  {
    name: "自分用目標達成アプリ",
    type: Type.personal,
    slug: "goal-achivement",
    tags: [Tag.reactNative, Tag.mobile, Tag.TypeScript, Tag.agile]
  },
  {
    name: "テストメーカー",
    type: Type.personal,
    slug: "test-maker",
    tags: [
      Tag.react,
      Tag.webApp,
      Tag.TypeScript,
      Tag.express,
      Tag.MySQL,
      Tag.heroku,
      Tag.TypeORM,
      Tag.CICD,
      Tag.team,
      Tag.agile,
      Tag.speed
    ]
  },
  {
    name: "シェアサイクル",
    type: Type.personal,
    slug: "share-cycle",
    tags: [
      Tag.react,
      Tag.webApp,
      Tag.TypeScript,
      Tag.express,
      Tag.MySQL,
      Tag.EC2,
      Tag.TypeORM,
      Tag.CICD,
      Tag.solo,
      Tag.agile,
      Tag.websocket
    ]
  }
];

export function getTagList(productList: Product[], thresh: number = 1) {
  const map: { [key: string]: number } = {};
  productList.forEach(product => {
    product.tags.forEach(tag => {
      if (map[tag]) {
        map[tag] += 1;
      } else {
        map[tag] = 1;
      }
    });
  });
  const result: string[] = [];
  for (const key in map) {
    if (map[key] >= thresh) {
      result.push(key);
    }
  }
  return result;
}
