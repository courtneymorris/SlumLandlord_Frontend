export default async function resetGame(userId) {
  const user = {};
  let error;

  await fetch(`http://127.0.0.1:5000/token/delete/${userId}`, {
    method: "DELETE",
  }).catch((error) => {
    console.log("Error deleting tokens", error);
    error = "An error occurred...Please try again later.";
  });

  if (error) {
    return { error };
  }

  await fetch(`http://127.0.0.1:5000/user/update/${userId}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      existing_game: false,
      money: 0,
    }),
  })
    .then((response) => response.json())
    .then((data) => (user = data))
    .catch((error) => {
      console.log("Error updating user", error);
      error = "An error occurred...Please try again later.";
    });

  if (error) {
    return { error };
  }

  return user;
}
