import config from "@payload-config";
import { getPayload } from "payload";

const email = process.env.CMS_ADMIN_EMAIL;
const password = process.env.CMS_ADMIN_PASSWORD;

if (!email || !password || password.length < 16) {
  throw new Error("Set CMS_ADMIN_EMAIL and CMS_ADMIN_PASSWORD (16+ characters) before bootstrapping.");
}

const payload = await getPayload({ config });
const { totalDocs } = await payload.find({ collection: "admins", limit: 1 });

if (totalDocs !== 0) {
  throw new Error("A CMS administrator already exists.");
}

await payload.create({
  collection: "admins",
  data: { email, password },
});

console.log("CMS administrator created.");
