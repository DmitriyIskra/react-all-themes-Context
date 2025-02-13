      // Layout Outlet
// json-server ?
// Axios
      // useMemo
      // React.memo()
// посмотреть react/redux 
// фильтр пользователей
// УЗНАТЬ КАК МОЖНО БОЛЬШЕ ПРО ROUTERPROVIDER и <BrowserRouter future={{v7_startTransition: true,}}>
      // СДЕЛАТЬ ХЕДЕР СО ССЫЛКАМИ И КОЛБЕКОМ
// ВСПОМНИТЬ КАК ДЕЛАТЬ ПЕРЕАДРЕСАЦИЮ НА ДРУГОЙ КОМПОНЕНТ (для роутинга)
// useRef сделать кнопку со счетчиком, привязывать элемент
      // модалки (сделано на главной) (createPortal)
// формы - сделать все типы полей
    // сделать компонент с возвратом на предидущую страницу
// сделать слайдер простой
// swiper
// soundApi
// cryptoApi
// typescript (перейти)
// Express
// Перейти на Next.js

import './App.css';

import { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

// HOOKS
import useStartListing from './hooks/StartListing';

// COMPONENTS
import Layout from './layout/Layout';
import UserAbout from './pages/user-about/UserAbout';
import UserList from './pages/users-list/UserList';
import Slider from './pages/slider/Slider';
import FormsPage from './pages/Forms/FormsPage';
import HookUseMemo from './pages/use-memo/HookUseMemo';
import HookUseCallback from './pages/useCallback/HookUseCallback';
import ReactMemo from './pages/react-memo/ReactMemo';


export const usersContext = createContext(null);



function App() {
  const {listing, setListing} = useStartListing();

  return (
    <usersContext.Provider value={listing}>
        <div className="App">
          <div className="wrapper-modal" id='modal'></div>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<UserList />}/>
              <Route path='user/:id' element={<UserAbout />} />
              <Route path='slider' element={<Slider />} />
              <Route path="/form" element={<FormsPage />} />
              <Route path='/use-memo' element={< HookUseMemo />} />
              <Route path='/use-callback' element={<HookUseCallback />} />
              <Route path='/use-react-memo' element={<ReactMemo />} />
            </Route>
          </Routes>
        </div>
      </usersContext.Provider>
  );
}

export default App;
