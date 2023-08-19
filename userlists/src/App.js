import UserProfile from './components/UserProfile/index'
import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Chinnu',
    role: 'FULL SATCK DEVELOPER',
  },

  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'marvel',
    role: 'software developer',
  },

  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'cassie',
    role: 'FULL SATCK DEVELOPER',
  },

  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Harshith',
    role: 'trainee',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">users list</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
