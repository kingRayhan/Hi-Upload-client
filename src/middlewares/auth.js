function auth({ next, store }) {
  if (!store.state.auth.authenticated)
    return next({
      name: "login",
    });

  return next();
}

export default auth;
