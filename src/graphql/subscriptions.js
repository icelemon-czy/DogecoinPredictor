export const onCreateDoge = /* GraphQL */ `
  subscription OnCreateDoge {
    onCreateDoge {
      id
      price
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDoge = /* GraphQL */ `
  subscription OnUpdateDoge {
    onUpdateDoge {
      id
      price
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDoge = /* GraphQL */ `
  subscription OnDeleteDoge {
    onDeleteDoge {
      id
      price
      createdAt
      updatedAt
    }
  }
`;
