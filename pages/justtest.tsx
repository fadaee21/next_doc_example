import { AccordionComp } from "../components/AccordionComp";
import * as React from "react";

import axios from "axios";

export interface PostProp {
  userId: number;
  id: number;
  title: string;
  body: string;
}





export default function JustTest({ postProps }: any) {

  return (
    <>
      {postProps.map((postProp: PostProp) => {
        
        return (
        <AccordionComp key={postProp.id} {...postProp} />
        );
      })}
    </>
  );

}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts"); // your fetch function here

  return {
    props: {
      postProps: res.data,
    },
  };
};
