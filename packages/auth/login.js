const login = (event) => {
  console.log(event);

  return {
    statusCode: 200,
    body: 'Login',
  };
};

exports.main = login;
