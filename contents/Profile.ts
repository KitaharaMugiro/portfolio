type Skill = {
  skillName: string;
  languages: string;
  about: string;
};

const skills: Skill[] = [
  {
    skillName: "モバイル開発",
    languages: "swift,kotlin,ReactNative",
    about: "商用アプリ開発、個人開発を経験"
  },
  {
    skillName: "Webアプリ開発",
    languages:
      "React,Vue,Next,Nuxt,Flask,Express,Routing Controller,SQL,NoSQL...",
    about: "商用アプリ開発、個人開発を経験"
  },
  {
    skillName: "データ分析",
    languages: "Python,R",
    about:
      "開発した株式売買システムの成績評価、リコメンド機能の評価、大学での研究"
  },
  {
    skillName: "機械学習",
    languages: "R,Python,Keras",
    about:
      "株式売買システムの構築、ResNet+GANによる画像の高画質化をするプロダクトの作成"
  }
];

export const Profile = {
  name: "mugiro",
  profile:
    "新しい技術を取り入れて世にない価値を生み出すことをモチベーションにしている。ゼロイチの開発フェーズが得意で、手早くプロトタイピングを作成できる。フロント/バックエンド/インフラを一通りは触れるので、少人数あるいは個人での開発が可能。",
  skills: skills
};
