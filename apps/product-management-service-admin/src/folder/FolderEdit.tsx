import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BacklogItemTitle } from "../backlogItem/BacklogItemTitle";

export const FolderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
