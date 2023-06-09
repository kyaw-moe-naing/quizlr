import { User, emptyUser } from "../common/user";
import { Option } from "./option";
import Type from "./type";

interface MCQ {
  type: Type;
  id: number;
  playlist: string;
  description: string;
  image: string;
  question: string;
  options: Option[];
  user: User;
}

const emptyMCQ: MCQ = {
  type: Type.MCQ,
  id: 0,
  playlist: "",
  description: "",
  image: "",
  question: "",
  options: [],
  user: emptyUser
}

export { type MCQ, emptyMCQ };