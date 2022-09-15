import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import allActions from './actions';
import About from './components/About';
import Header from './components/Header';
import Index from './components/Index';
import Item from './components/Item';
import entryTeam from './reducers/team';

const App: React.FC = () => {
  const [item, setItem] = useState<string>('');

  const [stateProp, setStateProp] = useState<string>(window.location.pathname);

  const updateState = (paths: string) => {
    setStateProp(paths);
  };

  const entryItem = useSelector((state: RootState) => state.entryItem);
  const dispatch = useDispatch();
  const itemName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (item) {
      if (item.length < 33) {
        setItem(event.target.value);
        console.log(item);
      }
    }
  };
  const defaultItem = () => {
    setItem(item.slice(1));
    console.log(item);
  };
  const nullItem = () => {
    setItem(' ');
    console.log(item);
  };
  console.log(location.href);

  return (
    <BrowserRouter>
      <Header updateState={updateState} stateProp={stateProp} />
      <div className="App">
        <div className="Top">
          <div className="TopContainer">
            <div className="TopContainer__Left">
              <div className="TopHead">
                <div className="TopButton">
                  <input
                    className="TopButton__name"
                    type="text"
                    id="name"
                    onChange={itemName}
                    value={!item ? '作成したい大会・部門名を入力' : item}
                    onBlur={defaultItem}
                    onClick={nullItem}
                  ></input>
                  <button
                    onClick={() =>
                      dispatch(allActions.entryAction.addItem(item))
                    }
                    className="TopButton__button"
                  >
                    作成
                  </button>
                </div>
                <div className="TopHead__title">＜大会・部門一覧＞</div>
              </div>
              <ul className="TopList">
                {entryItem.itemList.map((item: string) => (
                  <li key={item} className="TopList__item">
                    <div className="TopList__itemName">
                      <Link to={`./${item}`} className="TopList__itemName">
                        <p>{item}</p>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="TopContainer__Right">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/:item" element={<Item />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
