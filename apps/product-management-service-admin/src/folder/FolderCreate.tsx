import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BacklogItemTitle } from "../backlogItem/BacklogItemTitle";

export const FolderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="backlogItems"
          reference="BacklogItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BacklogItemTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="parentFolder" source="parentFolder" />
      </SimpleForm>
    </Create>
  );
};
