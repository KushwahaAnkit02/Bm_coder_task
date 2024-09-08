export const handleRegister = async (data) => {
  try {
    const response = await fetch(
      "https://tor.appdevelopers.mobi/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data?.name,
          phone: data?.phone,
          password: data?.password,
        }),
      }
    );
    return await response.json();
  } catch (error) {
    return error.message;
  }
};

export const handleLigin = async (data) => {
  try {
    const response = await fetch("https://tor.appdevelopers.mobi/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: data?.phone,
        password: data?.password,
      }),
    });
    return await response.json();
  } catch (error) {
    return error.message
  }
};
