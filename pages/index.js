import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return <div>my blog page {router.query.slug}</div>;
}
