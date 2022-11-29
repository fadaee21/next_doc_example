import { useRouter } from "next/router";
import Header from "../../components/header";

const Comment = () => {
  const router = useRouter();
  console.log(router);
  const slug = (router.query.slug as any) || [];

  if (slug.length > 1) {
    return (
      <>
        <Header />
        <h1>Slug: {slug.join("/")}</h1>
      </>
    );
  }

  if (slug.length === 1) {
    return <div>you are like shit</div>;
  }
  return <div>i'm here</div>;
};

export default Comment;
