interface Option {
  id: number;
  answer: string;
}

const emptyOption: Option = {
  id: 0,
  answer: ""
}

export { type Option, emptyOption };