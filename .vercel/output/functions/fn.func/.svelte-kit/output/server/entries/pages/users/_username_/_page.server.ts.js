import { p as prisma } from "../../../../chunks/prisma.js";
import { e as error } from "../../../../chunks/index.js";
const load = async ({ params }) => {
  const userData = await prisma.user.findFirst({
    where: { name: params.username },
    include: { posts: true, projects: true }
  });
  if (!userData) {
    throw error(404, "User with this username not found!");
  }
  return {
    user: userData
  };
};
export {
  load
};
