import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Props {
  slug: string;
}

function BlogTemplate(props: Props) {
  const [markdownBody, setMarkdonwBody] = useState("");
  useEffect(() => {
    const load = async () => {
      if (!props.slug) return;

      // grab the file in the posts dir based on the slug
      const content = await import(`../contents/${props.slug}.md`);
      //gray-matter parses the yaml frontmatter from the md body
      const data = matter(content.default);
      console.log(data);
      setMarkdonwBody(data.content);
    };

    load();
  }, []);
  return (
    <article>
      <div>
        <ReactMarkdown source={markdownBody} />
      </div>
    </article>
  );
}

BlogTemplate.getInitialProps = async function({ query }: any) {
  // context contains the query param
  const slug = query.slug;
  // grab the file in the posts dir based on the slug
  const content = await import(`../contents/${slug}.md`);
  console.log(content);
  //gray-matter parses the yaml frontmatter from the md body
  const data = matter(content.default);
  console.log(data);
  return {
    ...data
  };
};

export default BlogTemplate;
