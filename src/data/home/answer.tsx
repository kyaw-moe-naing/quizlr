import { Option } from "./option";
import Type from "./type";

interface MCQAnswer {
  type: Type;
  correct_options: Option[];
}

const emptyMCQ: MCQAnswer = {
  type: Type.MCQ,
  correct_options: []
}

export { type MCQAnswer, emptyMCQ };