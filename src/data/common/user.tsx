interface User {
  name: string;
  avatar: string;
}

const emptyUser: User = {
  name: "User",
  avatar: "avatar.png"
}

export { type User, emptyUser };