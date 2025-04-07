import axios from "axios";
// [ ] TODO: extend URL from .env file.
// [ ] TODO: change the base URL.
axios.defaults.baseURL =/*  process.env.REACT_APP_URL__SERVER || */ "http://localhost:5000";