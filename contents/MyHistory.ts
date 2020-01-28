type History = {
  date: string;
  what: string;
  where: string;
  description: string;
  main?: boolean;
};

const UNIVERSITY: History = {
  date: "2011-2016",
  what: "大学生",
  where: "東京大学工学部",
  description: "統計、最適化、機械学習、AIの勉強を主に行う"
};

const MAJOR: History = {
  date: "2016-2018",
  what: "大学院生",
  where: "東京大学大学院工学系研究科",
  description: "掘削機のデータ分析による無人稼働の可能性を研究"
};

const ABCEED: History = {
  date: "2016-2019",
  what: "アプリエンジニア",
  where: "globee",
  description: "英語教材アプリabceedのモバイルエンジニアを担当"
};

const FREELANCE: History = {
  date: "2019-2020",
  what: "フルスタックエンジニア",
  where: "フリーランス",
  description: "複数のスタートアップ企業のWebサービスのMVPを作成"
};

const SOFTBANK: History = {
  date: "2019-2019",
  what: "エンジニア",
  where: "Softbank株式会社",
  description: "アジャイル開発を推進する部署に配属"
};

const DELOITTE: History = {
  date: "2020-Present",
  what: "エンジニア",
  where: "デロイトトーマツコンサルティング",
  description: "PoCを作成する業務を担当",
  main: true
};

export const MyHistory: History[] = [
  UNIVERSITY,
  MAJOR,
  ABCEED,
  SOFTBANK,
  FREELANCE,
  DELOITTE
];
