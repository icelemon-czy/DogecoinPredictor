export const createDoge = /* GraphQL */ `
  mutation CreateDoge(
    $input: CreateDogeInput!
    $condition: ModelDogeConditionInput
  ) {
    createDoge(input: $input, condition: $condition) {
      id
      price
      createdAt
      updatedAt
    }
  }
`;
export const updateDoge = /* GraphQL */ `
  mutation UpdateDoge(
    $input: UpdateDogeInput!
    $condition: ModelDogeConditionInput
  ) {
    updateDoge(input: $input, condition: $condition) {
      id
      price
      createdAt
      updatedAt
    }
  }
`;
export const deleteDoge = /* GraphQL */ `
  mutation DeleteDoge(
    $input: DeleteDogeInput!
    $condition: ModelDogeConditionInput
  ) {
    deleteDoge(input: $input, condition: $condition) {
      id
      price
      createdAt
      updatedAt
    }
  }
`;
