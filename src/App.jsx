import { Route, Routes } from "react-router-dom";
import Template from "./pages/_TemplatePage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import DiscoverEvents from "./pages/DiscoverEvents.jsx";
import DiscoverGames from "./pages/DiscoverGames.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import EventPage from "./pages/EventPage.jsx";
import GamesOwned from "./pages/GamesOwned.jsx";
import HomePage from "./pages/HomePage.jsx";
import MyDrafts from "./pages/MyDrafts.jsx";
import MyEvents from "./pages/MyEvents.jsx";
import NewEvent from "./pages/NewEvent.jsx";

axios.defaults.baseURL = "http://localhost:3000";

// Request interceptor
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  console.log("Interceptor - Token from localStorage: ", token);

  // If token exists, add it to the Authorization header
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="discoverevents" element={<DiscoverEvents />} />
        <Route path="discovergames" element={<DiscoverGames />} />
        <Route path="editprofile" element={<EditProfile />} />
        <Route path="eventpage" element={<EventPage />} />
        <Route path="gamesowned" element={<GamesOwned />} />
        <Route path="mydrafts" element={<MyDrafts />} />
        <Route path="myevents" element={<MyEvents />} />
        <Route path="newevent" element={<NewEvent />} />
      </Route>
    </Routes>
  );
};

export default App;
