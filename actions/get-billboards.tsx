import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (): Promise<Billboard[]> => {
  const res = await fetch(URL, { next: { revalidate: 0 } });

  return res.json();
};

export default getBillboards;
