import { useRouter } from "next/router";
import Link from "next/link";

let counter = 1;
export async function getServerSideProps() {
  counter++;
  return { props: { initialPropsCounter: counter } };
}

export default function Index({ initialPropsCounter }) {
  const router = useRouter();
  const { query } = router;

  const incrementCounter = () => {
    const currentCounter = query.counter ? parseInt(query.counter) : 0;
    const href = `/?counter=${currentCounter + 1}`;
    router.push(href);
  };
  const incrementCounterShallow = () => {
    const currentCounter = query.counter ? parseInt(query.counter) : 0;
    const href = `/?counter=${currentCounter + 1}`;
    router.push(href, href, { shallow: true });
  };

  return (
    <div>
      <h2>This is the Home Page</h2>
      <Link href="/about">About</Link>
      <button onClick={incrementCounter}>Change State Counter</button>
      <button onClick={incrementCounterShallow}>
        Change State Counter shallow
      </button>
      <p>"getServerSideProps" ran for "{initialPropsCounter}" times.</p>
    </div>
  );
}
