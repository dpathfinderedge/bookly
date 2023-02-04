import { FiSettings, FiUser } from "react-icons/fi";
import { MdDashboard, MdDeliveryDining, MdHotel, MdLogout, MdOutlineHealthAndSafety, MdOutlineQueryStats, MdRoom } from "react-icons/md";
import { RiNotification3Fill, RiProfileLine, RiSkull2Fill } from "react-icons/ri";

export const links = [
  {
    title: 'Main',
    links: [
      {
        name: 'dashboard',
        icon: <MdDashboard />
      }
    ]
  },
  {
    title: 'Lists',
    links: [
      {
        name: 'users',
        icon: <FiUser />
      },
      {
        name: 'hotels',
        icon: <MdHotel />
      },
      {
        name: 'rooms',
        icon: <MdRoom />
      },
      {
        name: 'delivery',
        icon: <MdDeliveryDining />
      }
    ]
  },
  {
    title: 'Useful',
    links: [
      {
        name: 'stats',
        icon: <MdOutlineQueryStats />
      },
      {
        name: 'notifications',
        icon: <RiNotification3Fill />
      },
    ]
  },
  {
    title: 'Service',
    links: [
      {
        name: 'system health',
        icon: <MdOutlineHealthAndSafety />
      },
      {
        name: 'logs',
        icon: <RiSkull2Fill />
      },
      {
        name: 'settings',
        icon: <FiSettings />
      }
    ]
  },
  {
    title: 'User',
    links: [
      {
        name: 'profile',
        icon: <RiProfileLine />
      },
      {
        name: 'logout',
        icon: <MdLogout />
      }
    ]
  }
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5'
  },
  {
    name: 'green-theme',
    color: '#03C9D7'
  },
  {
    name: 'purple-theme',
    color: '#7352FF'
  },
  {
    name: 'red-theme',
    color: '#FF5C8E'
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7'
  },
  {
    name: 'orange-theme',
    color: '#FB9678'
  }
];