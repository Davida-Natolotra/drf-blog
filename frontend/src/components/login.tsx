import React, { useState } from "react";
import { Input, Form, FormGroup, Button } from "reactstrap";

type Props = {};

const Login = (props: Props) => {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");

  const onSubmit = (e: React.FormEvent) => {
    alert(`userName: ${userName}, userEmail: ${userEmail}`);
    e.preventDefault();
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <label htmlFor="username">User name</label>
        <Input
          placeholder="username"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="userEmail">Email</label>
        <Input
          placeholder="email"
          type="text"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </FormGroup>
      <Button type="submit" color="primary">
        Valider
      </Button>
    </Form>
  );
};

export default Login;
