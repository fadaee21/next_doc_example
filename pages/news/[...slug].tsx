import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles.module.css";
import Code from "../../components/Code";

export default function News() {
  const { asPath, route, query } = useRouter();
  console.log(query);
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>asPath: {asPath}</h1>
        <h1>route: {route}</h1>
        <h1>query.slug: {JSON.stringify(query.slug)}</h1>
        <hr className={styles.hr} />
        <p>
          This page was rendered by <Code>route:{`pages${route}.tsx`}</Code>.
        </p>
        <p>
          The query <Code>slug</Code> for this page is:{" "}
          <Code>{JSON.stringify(query.slug)}</Code>
        </p>
        <Link href="/">&larr; Back home</Link>
      </div>
    </div>
  );
}
