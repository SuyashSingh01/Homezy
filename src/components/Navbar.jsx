import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { useSelector } from 'react-redux';
import { Dropdown } from 'antd';
import { LoginItems, LogoutItems } from './NavDropdowndata.jsx';




const Navbar = () => {

  const [showSearchBar, setShowSearchBar] = useState(true);
  const [hasShadow, setHasShadow] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();


  const { user, token } = useSelector((state) => state.auth)

  const handleScroll = (event) => {
    event.preventDefault();
    const shouldHaveShadow = window.scrollY > 0;
    setHasShadow(shouldHaveShadow);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: false });
    // hide searchbar based on the current empty or not of searchItem
    if (location?.pathname === '/') {
      setShowSearchBar(true);
    } else {
      setShowSearchBar(false);
    }
    // clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return (
    <header
      className={`fixed top-0 z-10 flex w-screen justify-center mb-4 bg-white py-2 ${hasShadow ? 'shadow-md' : ''
        }`}
    >

      <div
        className={`flex p-2 ${showSearchBar ? 'justify-around' : 'justify-between px-10'
          } w-screen max-w-screen-xl`}
      >
        <Link to="/" className="flex items-center gap-1">
          <img
            className="h-8 w-8 md:h-10 md:w-10"
            src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png"
            alt="png"
          />

          <span className="hidden text-2xl font-bold text-red-500 md:block">
            Airbnb
          </span>
        </Link>

        {showSearchBar && <SearchBar />}

        <div
          className={`w-50  flex h-full items-center gap-2 rounded-full py-1 px-3 md:border shadow-sm ${isActive ? 'border border-slate-200 shadow-md' : ''}`}
          onClick={() => setIsActive(!isActive)}
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="hidden h-6 w-6 md:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <div
            className={`z-10 h-[35px] w-[35px] overflow-hidden rounded-full cursor-pointer transition`}
          >
            {user ? (
              <Dropdown
                menu={{
                  items: LoginItems,
                }}
                placement="bottomRight"
                arrow={{
                  pointAtCenter: true,
                }}
                trigger={['click']}
              >
                <Avatar>
                  {user?.picture ? (
                    <AvatarImage src={user.picture} className="h-full w-full"
                    />
                  ) : (
                    <AvatarImage
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      className="h-full w-full"

                    />
                  )}
                </Avatar>
              </Dropdown>
            ) : (

              <Dropdown
                menu={{
                  items: LogoutItems,
                }}
                placement="bottomRight"
                arrow={{
                  pointAtCenter: true,
                }}
              >
                <svg
                  fill="#858080"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="796 796 200 200"
                  enableBackground="new 796 796 200 200"
                  xmlSpace="preserve"
                  stroke="#858080"
                  className="h-8 w-8"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M896,796c-55.14,0-99.999,44.86-99.999,100c0,55.141,44.859,100,99.999,100c55.141,0,99.999-44.859,99.999-100 C995.999,840.86,951.141,796,896,796z M896.639,827.425c20.538,0,37.189,19.66,37.189,43.921c0,24.257-16.651,43.924-37.189,43.924 s-37.187-19.667-37.187-43.924C859.452,847.085,876.101,827.425,896.639,827.425z M896,983.86 c-24.692,0-47.038-10.239-63.016-26.695c-2.266-2.335-2.984-5.775-1.84-8.82c5.47-14.556,15.718-26.762,28.817-34.761 c2.828-1.728,6.449-1.393,8.91,0.828c7.706,6.958,17.316,11.114,27.767,11.114c10.249,0,19.69-4.001,27.318-10.719 c2.488-2.191,6.128-2.479,8.932-0.711c12.697,8.004,22.618,20.005,27.967,34.253c1.144,3.047,0.425,6.482-1.842,8.817 C943.037,973.621,920.691,983.86,896,983.86z"></path>{' '}
                  </g>
                </svg>
              </Dropdown>

            )}
          </div>
        </div>
      </div>
      <br className="border border-gray-600" />
    </header>
  );
};

export default Navbar;