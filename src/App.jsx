// axios
import axios from "axios";
// state
import { useState } from "react";
// mui
import { CircularProgress, Container } from "@mui/material";
// components
import Form from "./components/Form";
import ResponseDisplay from "./components/ResponseDisplay";

const App = () => {
  // State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle username click
  const handleClickName = (e) => {
    setUsername(e.target.value);
  };

    // handle pass click
  const handleClickPass = (e) => {
    setPassword(e.target.value);
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // loader
    setLoading(true);

    // req
    try {
      const res = await axios.post("https://jsonplaceholder.org/posts", {
        title: username,
        content: password, 
      });

      console.log(res.data);
      
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
      {/* loader */}
     {loading ? (
        <CircularProgress sx={{ display: 'block', margin: '60px auto' }} />
      ) : (
        <ResponseDisplay response={response} />
      )}
    </Container>
  );
};

export default App;
