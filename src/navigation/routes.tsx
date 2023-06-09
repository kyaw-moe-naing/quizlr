import { ActivityIcon, BookmarksIcon, DiscoverIcon, HomeIcon, ProfileIcon } from "../../assets/icons/tab_icons";
import Route from "../data/route";
import Activity from "../view/activity/Activity";
import Bookmarks from "../view/bookmarks/Bookmarks";
import Discover from "../view/discover/Discover";
import Home from "../view/home/Home";
import Profile from "../view/profile/Profile";

const tabs: Route[] = [
  { name: 'Home', icon: <HomeIcon />, component: Home },
  { name: 'Discover', icon: <DiscoverIcon />, component: Discover },
  { name: 'Activity', icon: <ActivityIcon />, component: Activity },
  { name: 'Bookmarks', icon: <BookmarksIcon />, component: Bookmarks },
  { name: 'Profile', icon: <ProfileIcon />, component: Profile },
];

export default tabs;