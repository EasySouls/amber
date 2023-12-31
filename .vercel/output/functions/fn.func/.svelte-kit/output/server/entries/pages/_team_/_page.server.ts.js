const load = async ({ params }) => {
  return {
    team: {
      name: params.team,
      projects: 2,
      issues: 31
    }
  };
};
export {
  load
};
