// axios
import axios from "axios";
import { useState } from "react";
import { CircularProgress, Container } from "@mui/material";
import Form from "./components/Form";
import ResponseDisplay from "./components/ResponseDisplay";

const App = () => {
  // State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClickName = (e) => {
    setUsername(e.target.value);
  };

  const handleClickPass = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: username,
        body: password, 
      });

      setResponse(res.data);
      setUsername("")
      setPassword("")
    } catch (err) {
      console.error("Xatolik:", err);
    }
    finally {
      setLoading(false);
    }

  };

  return (
    <Container sx={{ paddingTop: 4 }}>
      <Form
        username={username}
        password={password}
        handleClickName={handleClickName}
        handleClickPass={handleClickPass}
        handleSubmit={handleSubmit}
      />
     {loading ? (
        <CircularProgress sx={{ display: 'block', margin: '60px auto' }} />
      ) : (
        <ResponseDisplay response={response} />
      )}
    </Container>
  );
};

export default App;
