import swell from "swell-node";

export default function swellNodeInit() {
  swell.init(
    process.env.NEXT_PUBLIC_USER_ID,
    process.env.NEXT_PUBLIC_SWELL_NODE_KEY
  );
}
