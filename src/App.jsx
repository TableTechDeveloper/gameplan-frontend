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
import axios from "axios";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="discoverevents" element={<DiscoverEvents />} />
        <Route path="discovergames" element={<DiscoverGames />} />
        <Route path="editprofile" element={<EditProfile />} />
        <Route path="events/new" element={<NewEvent />} />
        <Route path="events/edit/:id" element={<EditEvent />} />
        <Route path="events/:id" element={<EventPage />} />
        <Route path="gamesowned" element={<GamesOwned />} />
        <Route path="mydrafts" element={<MyDrafts />} />
        <Route path="myevents" element={<MyEvents />} />
        <Route path="newevent" element={<NewEvent />} />
      </Route>
    </Routes>
  );
};

export default App;
