module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_lJMaF1UxLJpTnapSQ9AChmbdD7L5/87joxv3mY7",
      apiToken: "8cuE3xH7OpJRqe5VRPLqJGdS",
      appFilter: "strapi-test",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});